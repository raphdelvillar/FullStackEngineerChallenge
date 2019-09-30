package main

import (
	"authorization/command"
	"authorization/domain"
	"net/http"

	"github.com/labstack/echo"
)

// ChangePassword --
type ChangePassword struct {
	Request ChangePasswordRequest
}

// ChangePasswordRequest --
type ChangePasswordRequest struct {
	ChangePassword domain.ChangePassword
}

// Init --
func (cp *ChangePassword) Init() *command.Config {
	return &command.Config{
		Name:   "Change Password",
		Method: http.MethodPost,
		Path:   "/change-password",
	}
}

// Execute --
func (cp *ChangePassword) Execute(c echo.Context) *command.Response {
	if err := c.Bind(&cp.Request.ChangePassword); err != nil {
		return &command.Response{
			Error: err,
			Data:  nil,
		}
	}

	return &command.Response{
		Error: nil,
		Data: &map[string]interface{}{
			"message": "success!",
		},
	}
}
