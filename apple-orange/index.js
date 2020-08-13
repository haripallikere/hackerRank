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