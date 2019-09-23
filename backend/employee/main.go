package main

import (
	"employee/command"
	"employee/service"
)

func main() {
	le := &ListEmployee{}

	svc := service.Handler{
		Type: service.ECHO,
		Commands: []command.Command{
			le,
		},
	}

	svc.Run()
}
