package main

import (
	"review/command"
	"review/domain"
	"review/enum"

	"github.com/labstack/echo"
)

// UpdateReview --
type UpdateReview struct {
	Request UpdateReviewRequest
}

// UpdateReviewRequest --
type UpdateReviewRequest struct {
	Review domain.Review
}

// Init --
func (ur *UpdateReview) Init() *command.Config {
	return &command.Config{
		Name:   "Update Review",
		Method: enum.PATCH,
		Path:   "/:id",
	}
}

// Execute --
func (ur *UpdateReview) Execute(c echo.Context) *command.Response {
	// id := c.Param("id")

	if err := c.Bind(&ur.Request); err != nil {
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
