// sum of all the integers in the array 

    // parameters :
    // arrayOfIntegres : a valid array of integers 

    //return :
    // sum of all the intergers : sum 

// test cases: 
    // print(aVeryBigSum([1,2,3,4,5,6]) === 21)


function aVeryBigSum(arrayOfIntegres) {
    let sum = 0
    for (const int of arrayOfIntegres) {
        sum += int
    }
    return sum
}

// learning 
    // interating an array using for of loop 