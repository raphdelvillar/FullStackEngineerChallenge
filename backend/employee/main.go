package main

import (
	"employee/command"
	"employee/service"
	"employee/storage"
)

var (
	Db = storage.NewMysqlStorage()
)

func main() {
	svc := service.Handler{
		Type: service.ECHO,
		Commands: []command.Command{
			&ListEmployee{},
			&FindEmployee{},
			&CreateEmployee{},
			&UpdateEmployee{},
		},
	}

	svc.Run()
}
