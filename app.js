//1.STRING MANIPULATION FUNCTIONS
//Reverse a string
let text = "Go My Code";
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString(text)); //output: edoC yM oG

//Count the number of characters  in a given string
function countCharacters(str) {
  return str.length;
}
console.log(countCharacters(text)); //output 10

//function that capitalizes the first letter of each word in a sentence.
function capitalizeFirstLetter(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

let text2 = "hello world";
console.log(capitalizeFirstLetter(text2)); //output: Hello World

2; //Array MANIPULATION FUNCTIONS
//Write functions to find the maximum and minimum values in an array of numbers.
function findMax(arr) {
  return Math.max(...arr);
}
function findMin(arr) {
  return Math.min(...arr);
}
let numbers = [3, 5, 7, 2, 8];
console.log(findMax(numbers)); //output: 8

console.log(findMin(numbers)); //output: 2

//Create a function that calculates the sum of all elements in an array.
function calculateSum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
let numbers2 = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers2)); //output: 15

//Implement a function that filters out elements from an array based on a given condition.
function filterArray(arr, condition) {
  return arr.filter(condition);
}
let numbers3 = [1, 2, 3, 4, 5];
let evenCondition = (num) => num % 2 === 0;
console.log(filterArray(numbers3, evenCondition)); //output: [2, 4]

//3. MATHEMATICAL FUNCTIONS
//Write a function that calculates the factorial of a number.
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  else return n * factorial(n - 1);
}
let number = 5; //output: 120
console.log(factorial(number));

//Create a function that checks if a number is prime.
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
let primeNumber = 7;
console.log(isPrime(primeNumber)); //output: true

//Implement a function that generates Fibonacci numbers up to a given limit.
function fibonacci(limit) {
  let fib = [0, 1];
  while (fib[fib.length - 1] + fib[fib.length - 2] <= limit) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fib;
}
let limit = 10;
console.log(fibonacci(limit)); //output: [0, 1, 1, 2, 3, 5, 8]
