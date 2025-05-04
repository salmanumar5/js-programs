function areAnagram(str1 , str2){
    return str1.split('').sort().join('') === str2.split('').sort().join('')
}

console.log(areAnagram("listen", "silent")); // true
console.log(areAnagram("hello", "world"));   // false