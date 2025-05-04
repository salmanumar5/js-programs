function captilize(sent){
    return sent.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

console.log(captilize("This is a hello world program"))