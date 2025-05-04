function removeDuplicates(arr){
    return [...new Set(arr)]
}

console.log(removeDuplicates([2, 2, 1, 2, 3, 5, 1, 5, 3, 4, 8, 9, 4]))