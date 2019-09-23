package storage

import (
	"database/sql"
	"fmt"
	"review/domain"

	_ "github.com/go-sql-driver/mysql"
)

const (
	reviewTable = "reviews"
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
	database := "paypay"

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

func (s *mysqlStorage) ListReviews() ([]domain.Review, error) {
	var reviews []domain.Review

	s.Init()
	results, err := s.Db.Query(fmt.Sprintf("SELECT * FROM %s", reviewTable))

	if err != nil {
		return nil, err
	}

	for results.Next() {
		var review domain.Review
		err = results.Scan(&review)
		if err != nil {
			return nil, err
		}

		reviews = append(reviews, review)
	}

	return reviews, nil
}

func (s *mysqlStorage) FindReview(id string) (domain.Review, error) {
	var review domain.Review

	s.Init()
	err := s.Db.QueryRow(fmt.Sprintf("SELECT * FROM %s WHERE id = ?", reviewTable), id).Scan(&review)

	if err != nil {
		return domain.Review{}, err
	}

	return review, nil
}

func (s *mysqlStorage) CreateReview(review domain.Review) (domain.Review, error) {
	s.Init()
	insertQuery, err := s.Db.Prepare(fmt.Sprintf("INSERT INTO %s(employee_id, rating, comment) VALUES (?, ?, ?)", reviewTable))

	if err != nil {
		return domain.Review{}, err
	}

	insertQuery.Exec(review.EmployeeID, review.Rating, review.Comment)

	return review, nil
}

func (s *mysqlStorage) UpdateReview(id string, review domain.Review) (domain.Review, error) {
	s.Init()
	updateQuery, err := s.Db.Prepare(fmt.Sprintf("UPDATE %s SET employee_id = ?, rating = ?, comment = ?", reviewTable))

	if err != nil {
		return domain.Review{}, err
	}

	updateQuery.Exec(review.EmployeeID, review.Rating, review.Comment)

	return review, nil
}

func (s *mysqlStorage) DeleteReview(id string) error {
	s.Init()
	deleteQuery, err := s.Db.Prepare(fmt.Sprintf("DELETE FROM %s WHERE id=?", reviewTable))

	if err != nil {
		return err
	}

	deleteQuery.Exec(id)

	return nil
}
