package main

import (
	"employee/command"
	"employee/domain"
	"net/http"

	"github.com/labstack/echo"
)

// CreateEmployee --
type CreateEmployee struct {
	Request CreateEmployeeRequest
}

// CreateEmployeeRequest --
type CreateEmployeeRequest struct {
	Employee domain.Employee
}

// Init --
func (ce *CreateEmployee) Init() *command.Config {
	return &command.Config{
		Name:   "Create Employee",
		Method: http.MethodPost,
		Path:   "/",
	}
}

// Execute --
func (ce *CreateEmployee) Execute(c echo.Context) *command.Response {
	if err := c.Bind(&ce.Request); err != nil {
		return &command.Response{
			Error: err,
			Data:  nil,
		}
	}

	employee, err := Db.CreateEmployee(ce.Request.Employee)

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
