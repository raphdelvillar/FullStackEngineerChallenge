package domain

// Employee --
type Employee struct {
	ID          int    `json:"id"`
	FullName    string `json:"full_name"`
	Designation string `json:"designation"`
	Email       string `json:"email"`
	Gender      string `json:"gender"`
	JoinDate    int64  `json:"join_date"`
}
