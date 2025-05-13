const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumNumbers(numbers) {
    return numbers.reduce((acc, num) => {
        if (num % 2 === 0) {
            return acc + num;
        }
        return acc;
    }, 0);
}

const result = sumNumbers(numbers);
console.log(result);