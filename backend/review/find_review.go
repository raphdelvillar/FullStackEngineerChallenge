package main

import (
	"review/command"
	"review/enum"

	"github.com/labstack/echo"
)

// FindReview --
type FindReview struct {
}

// Init --
func (fr *FindReview) Init() *command.Config {
	return &command.Config{
		Name:   "Find Review",
		Method: enum.GET,
		Path:   "/:id",
	}
}

// Execute --
func (fr *FindReview) Execute(c echo.Context) *command.Response {
	id := c.Param("id")

	return &command.Response{
		Error: nil,
		Data:  nil,
	}
}