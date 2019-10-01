package main

import (
	"fmt"
	"mailer/command"
	"mailer/configuration"
	"net/http"

	"github.com/labstack/echo"
)

var (
	serviceConfiguration = configuration.GetServiceConfiguration()
)

func main() {
	e := echo.New()
	addHandler(e, &SendEmail{})
	e.Logger.Fatal(e.Start(fmt.Sprintf(":%s", serviceConfiguration.HTTP.Port)))
}

func addHandler(e *echo.Echo, command command.Command) {
	config := command.Init()
	e.Add(config.Method, config.Path, func(c echo.Context) error {
		cr := command.Execute(c)

		if cr.Error != nil {
			return c.JSON(http.StatusInternalServerError, map[string]interface{}{
				"Error": cr.Error.Error(),
				"Data":  nil,
			})
		}

		return c.JSON(http.StatusOK, cr)
	}).Name = config.Name
}
