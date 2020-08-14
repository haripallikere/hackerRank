
// Count of the same adjacent characters in a string 
  // Parameters - valid string, inputString(str)
  // Return - count of same adjacent character, adjacentCount(int)

//test cases
//   print(alternatingCharacters('abcd') === 0);
//   print(alternatingCharacters('aabbcc') === 3);
//   print(alternatingCharacters('adefccbbaabb') === 4);
 

function alternatingCharacters(inputString) {
    let a  = inputString.split('');
    let adjacentCount = 0;
    for (let i = 0; i< a.length; i++) {
    if (a[i] === a[i+1]) {
            adjacentCount += 1
        } 
    }
   return adjacentCount;
}

// learning
    // string split method
    // for-loop and index