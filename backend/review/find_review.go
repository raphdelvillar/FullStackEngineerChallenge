package main

import (
	"net/http"
	"review/command"

	"github.com/labstack/echo"
)

// FindReview --
type FindReview struct {
}

// Init --
func (fr *FindReview) Init() *command.Config {
	return &command.Config{
		Name:   "Find Review",
		Method: http.MethodGet,
		Path:   "/:id",
	}
}

// Execute --
func (fr *FindReview) Execute(c echo.Context) *command.Response {
	id := c.Param("id")

	review, err := Db.FindReview(id)

	if err != nil {
		return &command.Response{
			Error: err,
			Data:  nil,
		}
	}

	return &command.Response{
		Error: nil,
		Data:  review,
	}
}
