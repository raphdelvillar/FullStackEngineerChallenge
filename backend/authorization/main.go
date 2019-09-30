package main

import (
	"authorization/command"
	"authorization/configuration"
	"authorization/service"
	"authorization/storage"
)

var (
	// Db --
	Db                   = storage.NewMysqlStorage()
	serviceConfiguration = configuration.GetServiceConfiguration()
)

func main() {
	svc := service.Handler{
		Type:     service.ECHO,
		Commands: []command.Command{},
	}

	svc.Run()
}
