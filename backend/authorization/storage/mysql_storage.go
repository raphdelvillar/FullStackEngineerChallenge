package storage

import (
	"authorization/domain"
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

const (
	authorizationTable = "authorization"
)

// NewMysqlStorage --
func NewMysqlStorage() Storage {
	return &mysqlStorage{}
}

type mysqlStorage struct {
	Db *sql.DB
}

func (s *mysqlStorage) Init() {
	username := serviceConfiguration.Database.Username
	password := serviceConfiguration.Database.Password
	host := serviceConfiguration.Database.Host
	port := serviceConfiguration.Database.Port
	database := serviceConfiguration.Database.Dbname

	db, err := sql.Open("mysql",
		fmt.Sprintf("%s:%s@tcp(%s:%s)/%s",
			username,
			password,
			host,
			port,
			database,
		),
	)

	if err != nil {
		panic(err.Error())
	}

	s.Db = db

}

func (s *mysqlStorage) IsAuthorized(username string) (domain.Authorization, error) {
	var authorization domain.Authorization

	s.Init()
	err := s.Db.QueryRow(fmt.Sprintf("SELECT * FROM %s WHERE username = ?", authorizationTable), username).Scan(&authorization.ID, &authorization.EmployeeID, &authorization.DisplayName, &authorization.Username, &authorization.Password)

	if err != nil {
		return domain.Authorization{}, err
	}

	s.Db.Close()

	return authorization, nil
}
