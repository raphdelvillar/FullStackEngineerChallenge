package main

import (
	"employee/command"
	"employee/domain"
	"net/http"

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
		Method: http.MethodPatch,
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

	employee, err := Db.UpdateEmployee(id, ue.Request.Employee)

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
