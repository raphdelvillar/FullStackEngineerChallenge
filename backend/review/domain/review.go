package domain

import "review/enum"

// Review --
type Review struct {
	ID           int             `json:"id"`
	EmployeeID   int             `json:"employee_id"`
	ReviewedByID int             `json:"reviewed_by_id"`
	Type         enum.ReviewType `json:"type"`
	Performances []Performance   `json:"performances"`
	Competencies []Competency    `json:"competencies"`
	Rating       float32         `json:"rating"`
	Comment      string          `json:"comment"`
}

// Performance --
type Performance struct {
	ID          int     `json:"id"`
	ReviewID    int     `json:"review_id"`
	Title       string  `json:"title"`
	Description string  `json:"description"`
	Rating      float32 `json:"rating"`
}

// Competency --
type Competency struct {
	ID          int     `json:"id"`
	ReviewID    int     `json:"review_id"`
	Title       string  `json:"title"`
	Description string  `json:"description"`
	Rating      float32 `json:"rating"`
}
