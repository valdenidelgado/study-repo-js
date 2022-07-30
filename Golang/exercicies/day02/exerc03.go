package main

import "fmt"

func main() {
	year := 1996
	for year < 2022 {
		fmt.Println(year)
		year++
	}

	year2 := 1996
	for {
		if year2 > 2022 {
			break
		} else {
			fmt.Println(year2)
			year2++
		}
	}
}