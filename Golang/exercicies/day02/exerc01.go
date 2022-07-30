package main

import ("fmt")

func main(){

	for count := 0; count < 10; {
		fmt.Println(count)
		count++
	}

	// for basico padrao
	for i := 0; i < 10; i++ {
		fmt.Println(i)
	}

	// while do go
	count := 0
	for count < 10 {
		fmt.Println(count)
		count++
	}

	// for loop infinito
	for {
		fmt.Println("loop infinito")
		break // para o loop infinito
	}

	// for com o continue, ele pula os numeros pares
	for i := 0; i < 10; i++ {
		if i % 2 == 0 {
			continue // pula para o proximo loop
		}
		fmt.Println(i)
	}
}