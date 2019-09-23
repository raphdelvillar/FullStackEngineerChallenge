package main

import (
	"employee/command"
	"employee/domain"
	"employee/enum"

	"github.com/labstack/echo"
)

// UpdateEmployee --
type UpdateEmployee struct {
	Request UpdateEmployeeRequest
}

// UpdateEmployeeRequest --
type UpdateEmployeeRequest struct {
	Employee domain.Employee
}

// Init --
func (ue *UpdateEmployee) Init() *command.Config {
	return &command.Config{
		Name:   "Update Employee",
		Method: enum.PATCH,
		Path:   "/:id",
	}
}

// Execute --
func (ue *UpdateEmployee) Execute(c echo.Context) *command.Response {
	id := c.Param("id")

	if err := c.Bind(&ue.Request); err != nil {
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
