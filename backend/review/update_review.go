package main

import (
	"net/http"
	"review/command"
	"review/domain"

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
		Method: http.MethodPatch,
		Path:   "/:id",
	}
}

// Execute --
func (ur *UpdateReview) Execute(c echo.Context) *command.Response {
	id := c.Param("id")

	if err := c.Bind(&ur.Request); err != nil {
		return &command.Response{
			Error: err,
			Data:  nil,
		}
	}

	review, err := Db.UpdateReview(id, ur.Request.Review)

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
