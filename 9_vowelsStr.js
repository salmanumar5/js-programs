function vowels(str){
    const vowels = "aeiouAEIOU";
    let count = 0;
    for ( let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }

    return count;
}

console.log(vowels("Hello World"))