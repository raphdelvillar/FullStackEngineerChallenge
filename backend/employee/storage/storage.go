package storage

import (
	"employee/domain"
	"employee/configuration"
)

var (
	serviceConfiguration = configuration.GetServiceConfiguration()
)

// Storage --
type Storage interface {
	Init()

	ListEmployees() ([]domain.Employee, error)
	FindEmployee(id string) (domain.Employee, error)
	CreateEmployee(employee domain.Employee) (domain.Employee, error)
	UpdateEmployee(id string, employee domain.Employee) (domain.Employee, error)
	DeleteEmployee(id string) error
}
