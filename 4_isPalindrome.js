function isPalindrom(str){
    const reverse = str.split('').reverse().join('');

    if( str === reverse) return true;

    return false;
}

console.log(isPalindrom("hello"))