package main

import (
	"authorization/command"
	"authorization/domain"
	"fmt"
	"net/http"

	"github.com/labstack/echo"
)

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
	if err := c.Bind(&l.Request); err != nil {
		return &command.Response{
			Error: err,
			Data:  nil,
		}
	}

	// authorization check for root --
	if l.Request.Authorization.Username == serviceConfiguration.Admin.Username {
		if l.Request.Authorization.Password == serviceConfiguration.Admin.Password {
			return &command.Response{
				Error: nil,
				Data:  nil,
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

	fmt.Println(auth)

	return &command.Response{
		Error: nil,
		Data:  nil,
	}
}
