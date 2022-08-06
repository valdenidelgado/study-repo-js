package main

import (
	"fmt"
	"math"
)

func main() {
	var x float64
	fmt.Scan(&x)
	var y float64
	fmt.Scan(&y)
	var x2 float64
	fmt.Scan(&x2)
	var y2 float64
	fmt.Scan(&y2)

	calc := math.Sqrt(math.Pow(x2-x, 2) + math.Pow(y2-y, 2))

	fmt.Printf("%.4f", calc)
}
