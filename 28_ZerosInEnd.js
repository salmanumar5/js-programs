function moveZeroes(arr){
    const nonZeros = arr.filter(num => num !== 0);
    const zeros = new Array(arr.length - nonZeros.length).fill(0);
    return nonZeros.concat(zeros);
}

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
