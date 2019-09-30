package main

import (
	"authorization/command"
	"authorization/domain"
	"authorization/enum"
	"fmt"
	"net/http"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/labstack/echo"
)

var tokenEncodeString = []byte(serviceConfiguration.HTTP.Secret)

// Login --
type Login struct {
	Request LoginRequest
}

// LoginRequest --
type LoginRequest struct {
	Authorization domain.Authorization
}

// Init --
func (l *Login) Init() *command.Config {
	return &command.Config{
		Name:   "Login",
		Method: http.MethodPost,
		Path:   "/",
	}
}

// Execute --
func (l *Login) Execute(c echo.Context) *command.Response {
	if err := c.Bind(&l.Request.Authorization); err != nil {
		return &command.Response{
			Error: err,
			Data:  nil,
		}
	}

	fmt.Println(l.Request.Authorization)

	// authorization check for root --
	if l.Request.Authorization.Username == serviceConfiguration.Admin.Username {
		if l.Request.Authorization.Password == serviceConfiguration.Admin.Password {
			ct := domain.Token{
				DisplayName: "Administrator",
				Username:    "administrator",
				Role:        enum.ADMINISTRATOR,
			}

			generatedToken, err := l.GenerateToken(ct)

			if err != nil {
				return &command.Response{
					Error: err,
					Data:  nil,
				}
			}

			return &command.Response{
				Error: nil,
				Data: &map[string]interface{}{
					"access_token": generatedToken,
				},
			}
		}
	}

	auth, err := Db.IsAuthorized(l.Request.Authorization.Username)

	if err != nil {
		return &command.Response{
			Error: err,
			Data:  nil,
		}
	}

	ct := domain.Token{
		DisplayName: auth.DisplayName,
		Username:    auth.Username,
		Role:        enum.EMPLOYEE,
	}

	generatedToken, err := l.GenerateToken(ct)

	if err != nil {
		return &command.Response{
			Error: err,
			Data:  nil,
		}
	}

	return &command.Response{
		Error: nil,
		Data: &map[string]interface{}{
			"access_token": generatedToken,
		},
	}
}

// GenerateToken --
func (l *Login) GenerateToken(ct domain.Token) (string, error) {
	token := jwt.New(jwt.SigningMethodHS256)
	claims := make(jwt.MapClaims)

	claims["display_name"] = ct.DisplayName
	claims["username"] = ct.Username
	claims["role"] = ct.Role
	claims["expiry"] = time.Now().Add(time.Hour * 72).Unix()
	claims["iat"] = time.Now().Unix()

	token.Claims = claims

	tokenString, err := token.SignedString(tokenEncodeString)

	if err != nil {
		fmt.Println(err)
		return "", err
	}

	return tokenString, nil
}
