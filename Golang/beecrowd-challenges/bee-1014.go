package main

import "fmt"

func main() {
	var km uint32
	fmt.Scan(&km)
	var litro float64
	fmt.Scan(&litro)

	media := float64(km) / litro
	fmt.Printf("%.3f km/l\n", media)
}
