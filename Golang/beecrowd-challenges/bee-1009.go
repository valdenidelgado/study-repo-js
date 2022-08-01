package main

import "fmt"

func main(){
	var name string; fmt.Scanln(&name)
	var salary float32; fmt.Scanln(&salary)
	var totalSelling float32; fmt.Scanln(&totalSelling)

	totalSalary := salary + (15 * totalSelling / 100)

	fmt.Printf("TOTAL = R$ %.2f\n", totalSalary)
}