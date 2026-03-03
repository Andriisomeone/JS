function stringToArray(str){
    if (str){
        const split = str.split('')
        return split;

    }
    return [''];
}
console.log(stringToArray("hjksdfjkslhkjsd"));