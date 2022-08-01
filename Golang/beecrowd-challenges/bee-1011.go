package main

import (
	"fmt"
	"math"
)

func main(){
	pi := 3.14159
	var r float64; fmt.Scanln(&r)

	volume := (4.0/3.0) * pi * math.Pow(r, 3) 

	fmt.Printf("VOLUME = %.3f\n", volume)
}