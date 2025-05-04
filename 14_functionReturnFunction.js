function greet(name){
    return function(message){
        return `${message}, ${name}`
    }
}

const greetUmar = greet("Umar");
console.log(greetUmar("Good Morning"))