package main

import (
	"dashboard/command"
	"net/http"

	"github.com/labstack/echo"
)

// MaleVsFemale --
type MaleVsFemale struct {
}

// Init --
func (mf *MaleVsFemale) Init() *command.Config {
	return &command.Config{
		Name:   "Get Male vs Female",
		Method: http.MethodGet,
		Path:   "/male-vs-female",
	}
}

// Execute --
func (mf *MaleVsFemale) Execute(c echo.Context) *command.Response {
	data, err := Db.GetMaleVsFemale()

	if err != nil {
		return &command.Response{
			Error: err,
			Data:  nil,
		}
	}

	return &command.Response{
		Error: nil,
		Data:  data,
	}
}
