function factorialClosure(){
    function factorial(n){
        if( n <= 1) return 1;

        return n * factorial( n - 1);
    }

    return factorial
}

const fact = factorialClosure();
console.log(fact(5))