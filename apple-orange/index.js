//  count number of fruits fall within sams house ?

    // parameters : 
    // s: integer, starting point of Sam's house location.
    // t: integer, ending location of Sam's house location.
    // a: integer, location of the Apple tree.
    // b: integer, location of the Orange tree.
    // apples: integer array, distances at which each apple falls from the tree.
    // oranges: integer array, distances at which each orange falls from the tree.

    //return:
    // no of apples and orange within sams house : apple.length orange.length

// Test cases:

    // print(countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6]) === 1 1)

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let apple = [];
    let orange = [];
    apple = apples.map(v => a+v );
    orange = oranges.map(v => b+v);
    apple = apple.filter(v => {
       if (v >= s && v <= t) {
           return true
       } else {
           return false 
       }
   });
   orange = orange.filter(v => {
       if (v >= s && v <= t) {
           return true
       } else {
           return false 
       }
   });

   console.log(apple.length)
   console.log(orange.length)
}

// learning
    // map method: which returns new array without manipulating orginal array 
    // filter method: return truthy values with respect to condition
