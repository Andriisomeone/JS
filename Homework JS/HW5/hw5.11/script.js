function sum(arr) {
    let result = 0;

    for (const num of arr) {
        result += num;
    }

    return result;
}

console.log(sum([1, 2, 10]));