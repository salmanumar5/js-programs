function wordFrequency(str){
    const words = str.toLowerCase().split(/\W+/);
    const freq = {};

    for (let word of words){
        if(word) freq[word] = (freq[word] || 0) + 1;
    }

    return freq
}

console.log(wordFrequency("Hello hello world! Hello again."));