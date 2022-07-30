package main

import "fmt"

func main() {

	// arr := [5]int{1, 2, 3, 4, 5}		

	// for _, v := range arr {
	// 	fmt.Println(v)
	// }

	// fmt.Printf("%T\n", arr)

	// arr := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	
	// for _, v := range arr {
	// 	fmt.Println(v)
	// }

	// fmt.Printf("%T\n", arr)

	// fmt.Println(arr[:3])
	// fmt.Println(arr[4:])
	// fmt.Println(arr[1:7])
	// fmt.Println(arr[2:9])
	// fmt.Println(arr[2:len(arr) - 1])

	arr := []int{42, 43, 44, 45, 46, 47, 48, 49, 50, 51}

	arr = append(arr, 52)

	arr = append(arr, 53, 54, 55)

	fmt.Println(arr)

	y := []int{56, 57, 58, 59, 60}

	arr = append(arr, y...)

	fmt.Println(arr)
}