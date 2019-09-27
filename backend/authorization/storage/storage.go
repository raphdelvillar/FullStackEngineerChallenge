package storage

import (
	"authorization/configuration"
)

var (
	serviceConfiguration = configuration.GetServiceConfiguration()
)

// Storage --
type Storage interface {
	Init()
}
