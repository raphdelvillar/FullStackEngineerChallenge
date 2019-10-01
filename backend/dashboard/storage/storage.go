package storage

import (
	"dashboard/configuration"
	"dashboard/domain"
)

var (
	serviceConfiguration = configuration.GetServiceConfiguration()
)

// Storage --
type Storage interface {
	Init()

	GetMaleVsFemale() (domain.MaleVsFemale, error)
}
