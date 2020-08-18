// Sam is a professor at the university and likes to round each student's  according to these rules:
// If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
// If the value of  is less than , no rounding occurs as the result will still be a failing grade.

//Paramters : grades,array of int
// Return : newGrades.array of int

// Test Case : 
    print(gradingStudents([73,67,38,33]) === [75,67,40,33])

function gradingStudents(grades) {
    let newGrade = []
    for (let i = 0; i< grades.length; i++) {
        if ( (grades[i] % 5) < 3 && grades[i] >= 38) {
            newGrade.push(grades[i])
        } else if ( (grades[i] % 5) >= 3 && grades[i] >= 38) {
            newGrade.push(grades[i] + 2)
        } else {
            newGrade.push(grades[i])
        }
    }
    console.log(newGrade);
}

gradingStudents([73,67,38,33])

// learning :
    // for - loop 
    // push method