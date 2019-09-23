package storage

import "review/domain"

// Storage --
type Storage interface {
	Init()

	ListReviews() ([]domain.Review, error)
	FindReview(id string) (domain.Review, error)
	CreateReview(review domain.Review) (domain.Review, error)
	UpdateReview(id string, review domain.Review) (domain.Review, error)
	DeleteReview(id string) error
}
