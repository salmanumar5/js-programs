function secondLargest(arr){
    const unique = [...new Set(arr)].sort((a, b) => b - a);
    return unique[1] !== undefined ? unique[1] : "Not Enough Elements" 
}

console.log(secondLargest([10, 5, 10, 8, 7]));