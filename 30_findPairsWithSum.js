function findPairsWithSum(arr, k){
     const seen = new Set();
     const pairs = new Set();

     for( let num of arr){
        const compliment = k - num;

        if(seen.has(compliment)){
            const sortedPair = [num, compliment].sort((a,b) => a - b).toString();
            pairs.add(sortedPair);
        } else {
            seen.add(num)
        }
     }

     return Array.from(pairs).map(pair => pair.split(",").map(Number))
}

console.log(findPairsWithSum([1, 2, 3, 4, 5, 6], 7));
