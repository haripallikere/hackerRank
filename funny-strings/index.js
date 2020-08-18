// compare Absolute difference of ascii value of character of a string and its reverse 

// parameters : string(str);
// return : based of absolute difference if it contains same value then return ('funny') else ('not funny)

// test case: 
    // print(funnyString('acxz') === 'funny');
    // print(funnyString('bcxz') === 'not funny');

function funnyString(string) {
    // convert string to array
    let ArrOfString = string.split('');
    let o = [];
    let r = [];


    for (let i = ArrOfString.length -1 ; i > 0 ; i--) {
        r.push(string.charCodeAt(i)-string.charCodeAt(i-1))

    }
    for ( let i = 0; i < ArrOfString.length -1 ; i++) {
        o.push(string.charCodeAt(i+1)-string.charCodeAt(i))
    }

   if ( JSON.stringify(r) === JSON.stringify(o)) {
       return('Funny')
   } else {
       return("Not Funny")
   }
}

//learning :
    // charCodeAt 
    // JSON.stringify to convert array to string as comparing two arrays returns false due to reference