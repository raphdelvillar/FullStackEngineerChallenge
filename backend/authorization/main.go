package main

import (
	"authorization/command"
	"authorization/service"
	"authorization/storage"
)

var (
	// Db --
	Db = storage.NewMysqlStorage()
)

func main() {
	svc := service.Handler{
		Type:     service.ECHO,
		Commands: []command.Command{},
	}

	svc.Run()
}
