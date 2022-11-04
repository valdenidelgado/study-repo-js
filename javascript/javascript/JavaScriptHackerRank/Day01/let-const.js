function main(r) {

    const PI = Math.PI

    // Print the area of the circle:
    let areaCircle = PI * Math.pow(r, 2)
    console.log(areaCircle)
    // Print the perimeter of the circle:
    let perimeter = 2 * PI * r
    console.log(perimeter)
}

main(2.6)