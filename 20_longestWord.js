function findLongestWord(sent){
    const words = sent.split(' ');
    let longest = "";

    for(let word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }

    return longest
}

console.log(findLongestWord("Sharpening JavaScript skills daily")); // "Sharpening"
