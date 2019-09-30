package main

import (
	"net/http"
	"review/command"

	"github.com/labstack/echo"
)

// DeleteReview --
type DeleteReview struct {
}

// Init --
func (dr *DeleteReview) Init() *command.Config {
	return &command.Config{
		Name:   "Delete Review",
		Method: http.MethodDelete,
		Path:   "/:id",
	}
}

// Execute --
func (dr *DeleteReview) Execute(c echo.Context) *command.Response {
	id := c.Param("id")

	err := Db.DeleteReview(id)

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
