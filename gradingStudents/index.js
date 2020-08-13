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