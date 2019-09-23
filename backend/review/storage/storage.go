package storage

import "review/domain"

// Storage --
type Storage interface {
	Init()

	ListReviews() ([]domain.Review, error)
	FindReview(id string) (domain.Review, error)
}
