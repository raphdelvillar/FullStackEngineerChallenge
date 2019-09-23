package main

import (
	"employee/command"
	"employee/enum"

	"github.com/labstack/echo"
)

// ListEmployee --
type ListEmployee struct {
}

// Init --
func (le *ListEmployee) Init() *command.Config {
	return &command.Config{
		Name:   "List Employee",
		Method: enum.GET,
		Path:   "/",
	}
}

// Execute --
func (le *ListEmployee) Execute(c echo.Context) *command.Response {
	return &command.Response{
		Error: nil,
		Data:  nil,
	}
}
