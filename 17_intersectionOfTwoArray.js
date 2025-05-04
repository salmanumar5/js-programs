function arrayIntersection(a, b){
    const setB = new Set(b);
    return [...new Set(a)].filter(item => setB.has(item))
}

console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]
