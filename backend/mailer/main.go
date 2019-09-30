package main

import (
	"mailer/command"
	"mailer/configuration"
	"mailer/service"
)

var (
	serviceConfiguration = configuration.GetServiceConfiguration()
)

func main() {
	svc := service.Handler{
		Type: service.ECHO,
		Commands: []command.Command{
			&SendEmail{},
		},
	}

	svc.Run()
}
