package main

import "fmt"

func main(){
	var employeeNumber int; fmt.Scanln(&employeeNumber)
	var hours int; fmt.Scanln(&hours)
	var salaryPerHour float32; fmt.Scanln(&salaryPerHour)

	salary := float32(hours) * salaryPerHour

	fmt.Println("NUMBER =", employeeNumber)
	fmt.Printf("SALARY = U$ %.2f\n", salary)
}