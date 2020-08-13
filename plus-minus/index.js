function plusMinus(arr) {
    let positiveValue = 0;
    let negativeValue = 0;
    let zeroValue = 0;
    let size = arr.length;
    for (let i = 0; i < size; i++) {
        if (arr[i] > 0) {
            positiveValue += 1
        }
        else if (arr[i] < 0) {
            negativeValue += 1
        } 
        else {
            zeroValue += 1
        }
    }
    console.log(positiveValue/size.toFixed(6))
    console.log(negativeValue/size.toFixed(6))
    console.log(zeroValue/size.toFixed(6))

}