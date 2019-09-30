package main

import (
	"net/http"
	"review/command"

	"github.com/labstack/echo"
)

// ListReview --
type ListReview struct {
}

// Init --
func (lr *ListReview) Init() *command.Config {
	return &command.Config{
		Name:   "List Review",
		Method: http.MethodGet,
		Path:   "/",
	}
}

// Execute --
func (lr *ListReview) Execute(c echo.Context) *command.Response {
	reviews, err := Db.ListReviews()

	if err != nil {
		return &command.Response{
			Error: err,
			Data:  nil,
		}
	}

	return &command.Response{
		Error: nil,
		Data:  reviews,
	}
}
