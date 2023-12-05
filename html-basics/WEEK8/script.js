function inputEven(number) {
    return number % 2 === 0;
}

function printNumbers(num1, num2) {
    for (let i = num1; i <= num2; i++) {
        console.log(i);
    }
}

function sumInBetween(n1, n2) {
    let sum = 0;
    for (let i = n1; i <= n2; i++) {
        sum += i;
    }
    return sum;
}