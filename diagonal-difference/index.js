// DIfference of sum of right and left diagonal

// Paramaters : Array of array of integers, matrix(array of int);
// Return: result(int);

//Test cases:
    print(diagonalDifference([[ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ]]) === 15)

function diagonalDifference(matrix) {
    // Write your code here
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let i=0; i< matrix.length; i++) {
        primaryDiagonal += matrix[i][i];
        secondaryDiagonal += matrix[i][arr.length - i - 1]
    }
    let result = primaryDiagonal - secondaryDiagonal

    return Math.abs(result)
}

// learning :
    // for loop
    // interating through digonal 
    // Math.abs function for modulus