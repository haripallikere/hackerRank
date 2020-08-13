function birthdayCakeCandles(ar,arCount) {
    let count = 1;
    let sortedArray = ar.sort((a,b)=>a-b).reverse();
    
    for ( let i = 0; i < arCount -1; i++ ) {
        if ( sortedArray[i] === sortedArray[i+1] ) {
            count += 1
        }      
    } 
    return count
}

birthdayCakeCandles([1,1,1,1,1,1,1,])

// Find the maximum value in the array
// Traverse through the array
    // count if the element is equal to the max value
// return count
