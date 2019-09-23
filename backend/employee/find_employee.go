package main

import (
	"employee/command"
	"employee/enum"

	"github.com/labstack/echo"
)

// FindEmployee --
type FindEmployee struct {
}

// Init --
func (fe *FindEmployee) Init() *command.Config {
	return &command.Config{
		Name:   "Find Employee",
		Method: enum.GET,
		Path:   "/:id",
	}
}

// Execute --
func (fe *FindEmployee) Execute(c echo.Context) *command.Response {
	id := c.Param("id")

	return &command.Response{
		Error: nil,
		Data:  nil,
	}
}
