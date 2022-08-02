package main

import "fmt"

func main() {
	pi := 3.14159
	var a float64
	fmt.Scan(&a)
	var b float64
	fmt.Scan(&b)
	var c float64
	fmt.Scan(&c)

	triangle := a * c / 2
	circle := pi * c * c
	trapezoid := (a + b) * c / 2
	quadrangle := b * b
	rectangle := a * b

	fmt.Printf("TRIANGULO: %.3f\nCIRCULO: %.3f\nTRAPEZIO: %.3f\nQUADRADO: %.3f\nRETANGULO: %.3f\n", triangle, circle, trapezoid, quadrangle, rectangle)
}
