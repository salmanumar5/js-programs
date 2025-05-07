function findDuplicates(arr){
    let seen = new Set();
    let duplicates = new Set();

    for( let el of arr){
        if( seen.has(el)){
            duplicates.add(el)
        } else {
            seen.add(el)
        }
    }

    return [...duplicates]
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1])); // [2, 1]
