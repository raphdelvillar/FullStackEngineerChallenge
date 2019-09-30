package domain

// ChangePassword --
type ChangePassword struct {
	UserID   int    `json:"user_id"`
	Password string `json:"password"`
}
