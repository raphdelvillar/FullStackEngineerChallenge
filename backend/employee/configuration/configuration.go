package configuration

import (
	"sync"
)

var (
	port = "8001"
)

// ServiceConfiguration --
type ServiceConfiguration struct {
	Port string
}

var instance *ServiceConfiguration
var once sync.Once

// GetServiceConfiguration --
func GetServiceConfiguration() *ServiceConfiguration {
	once.Do(func() {
		instance = &ServiceConfiguration{
			Port: port,
		}
	})

	return instance
}
