package main

import (
	"fmt"
)

func main() {
	var a int
	fmt.Scan(&a)
	var b int
	fmt.Scan(&b)
	var c int
	fmt.Scan(&c)

	if a > b && a > c {
		fmt.Printf("%d eh o maior\n", a)
	} else if b > c {
		fmt.Printf("%d eh o maior\n", b)
	} else {
		fmt.Printf("%d eh o maior\n", c)
	}
}
