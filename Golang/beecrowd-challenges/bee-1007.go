package main

import "fmt"

func main(){
	var a int; fmt.Scanln(&a)
	var b int; fmt.Scanln(&b)
	var c int; fmt.Scanln(&c)
	var d int; fmt.Scanln(&d)

	difference := a * b - c * d
	fmt.Println("DIFERENCA =", difference)
}