function reverse(str){
    return str.split('').reverse().join('');
}

console.log(reverse("hello"))

//Explanation: split('') → array of characters, reverse() → reverses it, join('') → back to string.