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

	employee, err := Db.FindEmployee(id)

	if err != nil {
		return &command.Response{
			Error: err,
			Data:  nil,
		}
	}

	return &command.Response{
		Error: nil,
		Data:  employee,
	}
}
