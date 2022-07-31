package main

import "fmt"

func main(){
	var a float64; fmt.Scanln(&a)
	var b float64; fmt.Scanln(&b)
	var c float64; fmt.Scanln(&c)

	average := (a * 2.0 + b * 3.0 + c * 5.0) /  10
	fmt.Printf("MEDIA = %.1f\n", average)
}