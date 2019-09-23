package storage

import "employee/domain"

// Storage --
type Storage interface {
	Init()

	ListEmployees() ([]domain.Employee, error)
	FindEmployee(id string) (domain.Employee, error)
}
