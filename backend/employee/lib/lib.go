package lib

import (
	"time"
)

// IsStringInArray --
func IsStringInArray(collections []string, value string) bool {
	for _, collection := range collections {
		if value == collection {
			return true
		}
	}
	return false
}

// ConvertUnixToTime --
func ConvertUnixToTime(unixTimeStamp int64) time.Time {
	return time.Unix(unixTimeStamp, 0)
}
