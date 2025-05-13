function square(num) {
    return num * num;
}

function double(num) {
    return num * 2;
}

function addFive(num) {
    return num + 5;
}

function newFunction(num) {
    return addFive(double(square(num)));
}

const result = newFunction(3);
console.log(result); 