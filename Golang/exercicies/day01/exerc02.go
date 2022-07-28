package main

import ("fmt")

var x int
var y string
var z bool

func main() {
	fmt.Printf("%d, %T\n", x, x)
	fmt.Printf("%s, %T\n", y, y)
	fmt.Printf("%t, %T\n", z, z)
}