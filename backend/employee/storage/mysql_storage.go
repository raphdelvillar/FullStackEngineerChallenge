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

func (s *mysqlStorage) ListEmployees() ([]domain.Employee, error) {
	var employees []domain.Employee

	s.Init()
	results, err := s.Db.Query(fmt.Sprintf("SELECT * FROM %s", employeeTable))

	if err != nil {
		return nil, err
	}

	defer results.Close()

	for results.Next() {
		var employee domain.Employee
		err = results.Scan(&employee.ID, &employee.FullName, &employee.Designation, &employee.Email, &employee.Gender, &employee.JoinDate)
		if err != nil {
			return nil, err
		}

		employees = append(employees, employee)
	}

	s.Db.Close()

	return employees, nil
}

func (s *mysqlStorage) FindEmployee(id string) (domain.Employee, error) {
	var employee domain.Employee

	s.Init()
	err := s.Db.QueryRow(fmt.Sprintf("SELECT * FROM %s WHERE id = ?", employeeTable), id).Scan(&employee)

	if err != nil {
		return domain.Employee{}, err
	}

	s.Db.Close()

	return employee, nil
}

func (s *mysqlStorage) CreateEmployee(employee domain.Employee) (domain.Employee, error) {
	s.Init()
	insertQuery, err := s.Db.Prepare(fmt.Sprintf("INSERT INTO %s(full_name, designation, gender, join_date, email) VALUES (?, ?, ?, ?, ?)", employeeTable))

	if err != nil {
		return domain.Employee{}, err
	}

	insertQuery.Exec(employee.FullName, employee.Designation, employee.Gender, employee.JoinDate, employee.Email)

	s.Db.Close()

	return employee, nil
}

func (s *mysqlStorage) UpdateEmployee(id string, employee domain.Employee) (domain.Employee, error) {
	s.Init()
	updateQuery, err := s.Db.Prepare(fmt.Sprintf("UPDATE %s SET full_name = ?, designation = ?, gender = ?, join_date = ?, email = ?", employeeTable))

	if err != nil {
		return domain.Employee{}, err
	}

	updateQuery.Exec(employee.FullName, employee.Designation, employee.Gender, employee.JoinDate, employee.Email)

	s.Db.Close()

	return employee, nil
}

func (s *mysqlStorage) DeleteEmployee(id string) error {
	s.Init()
	deleteQuery, err := s.Db.Prepare(fmt.Sprintf("DELETE FROM %s WHERE id=?", employeeTable))

	if err != nil {
		return err
	}

	deleteQuery.Exec(id)

	s.Db.Close()

	return nil
}
