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
	employees, err := Db.ListEmployees()

	if err != nil {
		return &command.Response{
			Error: err,
			Data:  nil,
		}
	}

	return &command.Response{
		Error: nil,
		Data:  employees,
	}
}
