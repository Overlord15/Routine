// Swap two number without using third variable
let num1 = 10;
let num2 = 20;
num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;
console.log("Now first number : " + num1);
console.log("Now second number : " + num2);

// Swap two number using third variable
let num3 = 25;
let num4 = 35;
let temp;
temp = num3;
num3 = num4;
num4 = temp;
console.log(`The value of first after swapping : ${num3}`);
console.log(`The value of second after swapping : ${num4}`);

// Largest among all
const num5 = 10;
const num6 = 20;
const num7 = 30;
const largest = Math.max(num5, num6, num7);
console.log("The largest number is : " + largest);

// Simple calculator
const number1 = 50;
const number2 = 20;
const operator = prompt("Enter operator ( either +, -, * or / ): ");
let result;
switch (operator) {
    case "+":
        result = number1 + number2;
        break;
    case "-":
        result = number1 - number2;
        break;
    case "*":
        result = number1 * number2;
        break;
    case "/":
        result = number1 / number2;
        break;
    default:
        console.log("Invalid operator!");
        break;
}
if (result !== undefined) {
    console.log(`${number1} ${operator} ${number2} = ${result}`);
}

// Prime 
let number = 17;
let isPrime = true;

if (number === 1) {
    isPrime = false;
} else if (number === 2) {
    isPrime = true;
} else if (number % 2 === 0) {
    isPrime = false;
} else {
    for (let i = 3; i <= number; i += 2) {
        if (i > number / 2) {
            break;
        }
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log(number + ' is prime');
} else {
    console.log(number + ' is not prime');
}

// Odd even
let num = 17;

if (number % 2 === 0) {
    console.log(number + ' is even');
} else {
    console.log(number + ' is odd');
}
