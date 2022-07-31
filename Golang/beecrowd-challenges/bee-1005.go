package main

import "fmt"

func main(){
	var a float64; fmt.Scanln(&a)
	var b float64; fmt.Scanln(&b)

	media := (a * 3.5 + b * 7.5) /  11
	fmt.Printf("MEDIA = %.5f\n", media)
}