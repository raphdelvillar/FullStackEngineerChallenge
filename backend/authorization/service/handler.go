package service

import (
	"fmt"
	"authorization/command"
	"authorization/configuration"
	"log"
)

var (
	serviceConfiguration = configuration.GetServiceConfiguration()
)

// Handler --
type Handler struct {
	Type     ServiceType
	Commands []command.Command
}

// Run --
func (h *Handler) Run() {
	switch h.Type {
	case ECHO:
		h.ECHO()
		break
	default:
		log.Fatal(fmt.Sprintf("%s - this handler type is not implemented", h.Type))
	}
}
