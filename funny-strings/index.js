function funnyString(s) {
    // convert string to array
    let sa = s.split('');
    let o = [];
    let r = [];


    for (let i = sa.length -1 ; i > 0 ; i--) {
        r.push(s.charCodeAt(i)-s.charCodeAt(i-1))

    }
    for ( let i = 0; i < sa.length -1 ; i++) {
        o.push(s.charCodeAt(i+1)-s.charCodeAt(i))
    }

   if ( JSON.stringify(r) === JSON.stringify(o)) {
       return('Funny')
   } else {
       return("Not Funny")
   }

}