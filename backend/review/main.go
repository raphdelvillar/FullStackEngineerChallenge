package main

import (
	"fmt"
	"net/http"
	"review/command"
	"review/configuration"
	"review/storage"

	"github.com/labstack/echo"
)

var (
	// Db --
	Db                   = storage.NewMysqlStorage()
	serviceConfiguration = configuration.GetServiceConfiguration()
)

func main() {
	e := echo.New()
	addHandler(e, &ListReview{})
	addHandler(e, &FindReview{})
	addHandler(e, &CreateReview{})
	addHandler(e, &UpdateReview{})
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
