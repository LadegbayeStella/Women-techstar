function inputEven(number) {
    return number % 2 === 0;
}

inputEven(6);

function printNumbers(num1, num2) {
    for (let i = num1; i <= num2; i++) {
        console.log(i);
    }
}
printNumbers(3, 9);

function sumInBetween(n1, n2) {
    let sum = 0;
    for (let i = n1; i <= n2; i++) {
        sum += i;
    }
    return sum;
}

sumInBetween(6, 12);