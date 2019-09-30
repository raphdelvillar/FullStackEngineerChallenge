package configuration

import (
	"log"
	"sync"

	"github.com/BurntSushi/toml"
)

// ServiceConfiguration --
type ServiceConfiguration struct {
	Service service
	HTTP    http
	Email   email
}

type service struct {
	name string
}

type http struct {
	Port string
}

type email struct {
	Sender   string
	Password string
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
