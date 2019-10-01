package domain

import "authorization/enum"

// Authorization --
type Authorization struct {
	ID          int64  `json:"id"`
	EmployeeID  int64  `json:"employee_id"`
	DisplayName string `json:"display_name"`
	Username    string `json:"username"`
	Password    string `json:"password"`
}

// Token --
type Token struct {
	UserID      int64     `json:"user_id"`
	EmployeeID  int64     `json:"employee_id"`
	DisplayName string    `json:"display_name"`
	Username    string    `json:"username"`
	Role        enum.Role `json:"role"`
	Expiry      int64     `json:"expiry"`
}
