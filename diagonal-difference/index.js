function diagonalDifference(arr) {
    // Write your code here
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let i=0; i< arr.length; i++) {
        primaryDiagonal += arr[i][i];
        secondaryDiagonal += arr[i][arr.length - i - 1]
    }
    let result = primaryDiagonal - secondaryDiagonal

    return Math.abs(result)
}