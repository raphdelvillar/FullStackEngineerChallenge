package main

import (
	"employee/command"
	"net/http"

	"github.com/labstack/echo"
)

// DeleteEmployee --
type DeleteEmployee struct {
}

// Init --
func (de *DeleteEmployee) Init() *command.Config {
	return &command.Config{
		Name:   "Delete Employee",
		Method: http.MethodDelete,
		Path:   "/:id",
	}
}

// Execute --
func (de *DeleteEmployee) Execute(c echo.Context) *command.Response {
	id := c.Param("id")

	err := Db.DeleteEmployee(id)

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
