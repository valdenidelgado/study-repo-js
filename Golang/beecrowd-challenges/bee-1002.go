package main

import "fmt"

func main(){
	n := 3.14159

	var r float64; fmt.Scanln(&r)

	fmt.Printf("A=%.04f\n", n * r * r)
}