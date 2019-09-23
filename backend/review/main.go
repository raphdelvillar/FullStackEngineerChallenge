package main

import (
	"review/command"
	"review/service"
)

func main() {
	le := &Listreview{}

	svc := service.Handler{
		Type: service.ECHO,
		Commands: []command.Command{
			le,
		},
	}

	svc.Run()
}
