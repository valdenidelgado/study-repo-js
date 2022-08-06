package main

import "fmt"

func main() {
	lt := 12
	var tg float32
	fmt.Scanln(&tg)
	var vm float32
	fmt.Scanln(&vm)

	calc := tg * vm / float32(lt)

	fmt.Printf("%.3f\n", calc)
}
