package main

import "fmt"

func main(){
	var codeProduct int; fmt.Scan(&codeProduct)
	var unitProduct int; fmt.Scan(&unitProduct)
	var priceProduct float64; fmt.Scanln(&priceProduct)

	var secondCodeProduct int; fmt.Scan(&secondCodeProduct)
	var secondUnitProduct int; fmt.Scan(&secondUnitProduct)
	var secondPriceProduct float64; fmt.Scan(&secondPriceProduct)

	totalPrice := float64(unitProduct) * priceProduct + float64(secondUnitProduct) * secondPriceProduct

	fmt.Printf("VALOR A PAGAR: R$ %.2f\n", totalPrice)
}