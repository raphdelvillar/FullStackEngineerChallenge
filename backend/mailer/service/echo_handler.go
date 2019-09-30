package service

import (
	"mailer/enum"
	"fmt"
	"log"
	"net/http"

	"github.com/labstack/echo"
)

// ECHO --
func (h *Handler) ECHO() {
	e := echo.New()
	for _, command := range h.Commands {
		initConfig := command.Init()
		switch initConfig.Method {
		case enum.GET:
			e.GET(initConfig.Path, func(c echo.Context) error {
				cr := command.Execute(c)
				return c.JSON(http.StatusOK, cr)
			})
			break
		case enum.POST:
			e.POST(initConfig.Path, func(c echo.Context) error {
				cr := command.Execute(c)
				return c.JSON(http.StatusOK, cr)
			})
		case enum.PATCH:
			e.PATCH(initConfig.Path, func(c echo.Context) error {
				cr := command.Execute(c)
				return c.JSON(http.StatusOK, cr)
			})
		case enum.DELETE:
			e.DELETE(initConfig.Path, func(c echo.Context) error {
				cr := command.Execute(c)
				return c.JSON(http.StatusOK, cr)
			})
		default:
			log.Fatal(fmt.Sprintf("%s - this http method is not implemented!", initConfig.Method))
			break
		}

	}
	e.Logger.Fatal(e.Start(fmt.Sprintf(":%s", serviceConfiguration.HTTP.Port)))
}
