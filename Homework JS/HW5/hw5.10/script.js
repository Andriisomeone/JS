function getMinNumber(numbers) {
    let min = numbers[0];

    for (const number of numbers) {
        if (number < min) {
            min = number;
        }
    }

    return min;
}

const result = getMinNumber([10, 5, 8, 2, 15]);
console.log(result);