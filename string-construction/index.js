// count unique characters in a string 

//parameters :
  // stringConstruction,(s)

//Return :
  // count of unique char, (uniqueChar.length)

// test cases:
  // print(stringConstruction('abab') === 2);
  // print(stringConstruction('abcd') === 4)

function stringConstruction(s) {
    let arr = s.split('');
 let uniqueChar = [];
 arr.forEach(el => {
   if (!uniqueChar.includes(el)) {
     uniqueChar.push(el)
   }
 });
 return(uniqueChar.length)

}

stringConstruction('abcd')

learning:
  // forEach method
  // includes method 