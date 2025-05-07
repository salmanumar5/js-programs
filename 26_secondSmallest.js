function secondSmallest(arr){
    const unique = [...new Set(arr)].sort((a, b) => a - b);
    return unique[1] !== undefined ? unique[1] : "Not engough elements"
}

console.log(secondSmallest([5, 3, 1, 4, 2]));