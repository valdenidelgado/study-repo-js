function getSecondLargest(nums) {
    // Complete the function

    let max = Math.max(...nums)
    let secondMax = Math.max(...nums.filter(num => num != max))
    return secondMax
}


console.log(getSecondLargest([1, 2, 3, 4, 5, 5]))