package command

import (
	"employee/enum"

	"github.com/labstack/echo"
)

// Command --
type Command interface {
	Init() *Config
	Execute(c echo.Context) *Response
}

// Config --
type Config struct {
	Name   string
	Method string
	Path   string
}

// Request --
type Request struct {
	Data interface{}
}

// Response --
type Response struct {
	Error enum.ErrorType
	Data  interface{}
}
