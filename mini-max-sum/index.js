// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Parameters :
    // Array of integers,(arr) 
//  Return: print the respective minimum and maximum values as a single line of two space-separated long integers,(mini,max)

function miniMaxSum(arr) {
   const ascendingOrder = arr.sort()
   let mini = 0;
   let max = 0;
    for (let i =0; i < ascendingOrder.length -1; i++) {
        mini += ascendingOrder[i]
    }
    for (let i=0; i< ascendingOrder.length-1; i++) {
        max += ascendingOrder[i+1]
        console.log(max)
    }

    console.log([mini,max])

}

miniMaxSum([1,2,3,4,5])
