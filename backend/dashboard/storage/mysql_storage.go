package storage

import (
	"dashboard/domain"
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

const (
	employeeTable = "employees"
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

func (s *mysqlStorage) GetMaleVsFemale() (domain.MaleVsFemale, error) {
	var maleVsFemale domain.MaleVsFemale

	s.Init()
	err := s.Db.QueryRow(fmt.Sprintf("SELECT sum(case when gender = 'Female' then 1 else 0 end) AS Female, sum(case when gender = 'Male' then 1 else 0 end) AS Male FROM %s", employeeTable)).Scan(&maleVsFemale.Female, &maleVsFemale.Male)

	if err != nil {
		return domain.MaleVsFemale{}, err
	}

	s.Db.Close()

	return maleVsFemale, nil
}
