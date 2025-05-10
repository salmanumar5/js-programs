function isPangram(sent){
    const set = new Set();

    for( let char of sent){
        if( char >= "a" && char <= "z"){
            set.add(char)
        }
    }

    return set.size === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true