function stringConstruction(s) {
    let arr = s.split('');
 let em = [];
 arr.forEach(el => {
   if (!em.includes(el)) {
     em.push(el)
   }
 });
 return(em.length)

}

stringConstruction('abcd')