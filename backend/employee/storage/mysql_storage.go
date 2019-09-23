package storage

import (
	"database/sql"
	"employee/domain"
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
	username := "root"
	password := ""
	host := "localhost"
	port := "3306"
	database := "employee"

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

	defer db.Close()
}

func (s *mysqlStorage) ListEmployees() ([]domain.Employee, error) {
	var employees []domain.Employee

	s.Init()
	results, err := s.Db.Query(fmt.Sprintf("SELECT * FROM %s", employeeTable))

	if err != nil {
		return nil, err
	}

	for results.Next() {
		var employee domain.Employee
		err = results.Scan(&employee)
		if err != nil {
			return nil, err
		}

		employees = append(employees, employee)
	}

	return employees, nil
}

func (s *mysqlStorage) FindEmployee(id string) (domain.Employee, error) {
	var employee domain.Employee

	s.Init()
	err := s.Db.QueryRow(fmt.Sprintf("SELECT * FROM %s WHERE id = ?", employeeTable), id).Scan(&employee)

	if err != nil {
		return domain.Employee{}, err
	}

	return employee, nil
}
