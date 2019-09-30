package service

import (
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
		case http.MethodGet:
			e.GET(initConfig.Path, func(c echo.Context) error {
				cr := command.Execute(c)
				return c.JSON(http.StatusOK, cr)
			})
			break
		case http.MethodPost:
			e.POST(initConfig.Path, func(c echo.Context) error {
				cr := command.Execute(c)
				return c.JSON(http.StatusOK, cr)
			})
		case http.MethodPatch:
			e.PATCH(initConfig.Path, func(c echo.Context) error {
				cr := command.Execute(c)
				return c.JSON(http.StatusOK, cr)
			})
		case http.MethodDelete:
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
