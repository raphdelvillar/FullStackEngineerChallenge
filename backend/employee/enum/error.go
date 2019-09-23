package enum

import "errors"

// ErrorType --
type ErrorType error

var (
	NOTFOUND ErrorType = errors.New("not Found")
)
