// count number of candles which are highest in an array 

//Parameters : Array of intergers,(arOfIntegers,arCount);
//Return : count number of highest(integer) in array , count(int)

// Test cases:
// 
    // print(birthdayCakeCandles([1,2,4,4]) === 2); 
    // print(birthdayCakeCandles([5,1,2,3,4,6,6,6]) === 3); 

function birthdayCakeCandles(arOfIntegers,arCount) {
    let count = 1;
    let sortedArray = arOfIntegers.sort((a,b)=>a-b).reverse();
    
    for ( let i = 0; i < arCount -1; i++ ) {
        if ( sortedArray[i] === sortedArray[i+1] ) {
            count += 1
        }      
    } 
    return count
}

birthdayCakeCandles([1,1,1,1,1,1,1,])

// learning :
//   sort method
//   reverse method

