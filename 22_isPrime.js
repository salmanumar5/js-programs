function isPrime(n){
    if(n <= 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i++){
        if ( n % 1 === 0) return false
    }

    return true;
}

function check(n){
    return Math.sqrt(n);
}

console.log(check(10));  // true
console.log(isPrime(10)); // false