package storage

import (
	"authorization/configuration"
	"authorization/domain"
)

var (
	serviceConfiguration = configuration.GetServiceConfiguration()
)

// Storage --
type Storage interface {
	Init()

	IsAuthorized(username string) (domain.Authorization, error)
}
