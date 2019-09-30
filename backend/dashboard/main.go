package main

import (
	"dashboard/command"
	"dashboard/service"
	"dashboard/storage"
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
