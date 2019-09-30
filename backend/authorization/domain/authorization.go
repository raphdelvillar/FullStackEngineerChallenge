package domain

// Authorization --
type Authorization struct {
	ID         int    `json:"id"`
	EmployeeID int    `json:"employee_id"`
	Username   string `json:"username"`
	Password   string `json:"password"`
}
