package main

import (
	"mailer/command"
	"mailer/domain"
	"net/http"
	"net/smtp"

	"github.com/labstack/echo"
)

// SendEmail --
type SendEmail struct {
	Request SendEmailRequest
}

// SendEmailRequest --
type SendEmailRequest struct {
	Mail domain.Mail
}

// Init --
func (se *SendEmail) Init() *command.Config {
	return &command.Config{
		Name:   "Send Email",
		Method: http.MethodPost,
		Path:   "/",
	}
}

// Execute --
func (se *SendEmail) Execute(c echo.Context) *command.Response {
	if err := c.Bind(&se.Request.Mail); err != nil {
		return &command.Response{
			Error: err,
			Data:  nil,
		}
	}

	sender := serviceConfiguration.Email.Sender
	password := serviceConfiguration.Email.Password
	to := se.Request.Mail.To

	msg := se.Request.Mail.Message

	err := smtp.SendMail("smtp.gmail.com:587",
		smtp.PlainAuth("", sender, password, "smtp.gmail.com"),
		sender, to, []byte(msg))

	if err != nil {
		return &command.Response{
			Error: err,
			Data:  nil,
		}
	}

	return &command.Response{
		Error: nil,
		Data:  nil,
	}
}
