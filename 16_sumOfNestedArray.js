function sumOfArr(arr){
    let sum = 0;

    for (let el of arr){
        if(Array.isArray(el)){
            sum += sumOfArr(el)
        } else {
            sum += el;
        }
    }

    return sum;
}

console.log(sumOfArr([1, [2, 3], [4, [5]]]))