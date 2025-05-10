function countConsonants(str){
    const vowels = 'aeiouAEIOU';
    let count = 0;
    
    for( let char of str){
        if( /[a-zA-z]/.test(char) && !vowels.includes(char)){
            count++;
        }
    }
    return count;
}

console.log(countConsonants("JavaScript is fun")); // 11
