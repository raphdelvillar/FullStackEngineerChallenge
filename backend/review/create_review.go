package main

import (
	"net/http"
	"review/command"
	"review/domain"

	"github.com/labstack/echo"
)

// CreateReview --
type CreateReview struct {
	Request CreateReviewRequest
}

// CreateReviewRequest --
type CreateReviewRequest struct {
	Review domain.Review
}

// Init --
func (cr *CreateReview) Init() *command.Config {
	return &command.Config{
		Name:   "Create Review",
		Method: http.MethodPost,
		Path:   "/",
	}
}

// Execute --
func (cr *CreateReview) Execute(c echo.Context) *command.Response {
	if err := c.Bind(&cr.Request); err != nil {
		return &command.Response{
			Error: err,
			Data:  nil,
		}
	}

	review, err := Db.CreateReview(cr.Request.Review)

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
