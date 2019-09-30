package configuration

import (
	"log"
	"sync"

	"github.com/BurntSushi/toml"
)

// ServiceConfiguration --
type ServiceConfiguration struct {
	Service  service
	HTTP     http
	Database database
}

type service struct {
	name string
}

type http struct {
	Port string
}

type database struct {
	Username string
	Password string
	Host     string
	Port     string
	Dbname   string
}

var instance *ServiceConfiguration
var once sync.Once

// GetServiceConfiguration --
func GetServiceConfiguration() *ServiceConfiguration {
	once.Do(func() {
		var conf ServiceConfiguration
		if _, err := toml.DecodeFile("./config.toml", &conf); err != nil {
			log.Fatal(err)
		}

		instance = &conf
	})

	return instance
}