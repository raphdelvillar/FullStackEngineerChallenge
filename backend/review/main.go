package main

import (
	"review/command"
	"review/service"
	"review/storage"
)

var (
	Db = storage.NewMysqlStorage()
)

func main() {
	svc := service.Handler{
		Type: service.ECHO,
		Commands: []command.Command{
			&ListReview{},
			&FindReview{},
			&CreateReview{},
			&UpdateReview{},
		},
	}

	svc.Run()
}
