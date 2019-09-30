package domain

import "authorization/enum"

// Authorization --
type Authorization struct {
	ID          int    `json:"id"`
	EmployeeID  int    `json:"employee_id"`
	DisplayName string `json:"display_name"`
	Username    string `json:"username"`
	Password    string `json:"password"`
}

// Token --
type Token struct {
	UserID      int       `json:"user_id"`
	EmployeeID  int       `json:"employee_id"`
	DisplayName string    `json:"display_name"`
	Username    string    `json:"username"`
	Role        enum.Role `json:"role"`
	Expiry      int64     `json:"expiry"`
}
