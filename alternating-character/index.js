function alternatingCharacters(s) {
    let a  = s.split('');
    let count = 0;
    for (let i = 0; i< a.length; i++) {
        if (a[i] === a[i+1]) {
            count += 1
        } 
    }
    return count;
}