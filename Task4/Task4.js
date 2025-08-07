// // Task 1: Functions and Callback 

// // 1. Multiply Function
// function Multiply(a , b ) { 
//     return a*b ; 
// }
// // 2. Calculate Function
// function calculate(a , b , operation){
//     return operation(a, b);
// }


// var FirstNumber = prompt("Enter the first number: ");
// var SecondNumber = prompt("Enter the second number: ");

// console.log("The product is : " + Multiply(FirstNumber , SecondNumber));
// console.log("The product using calculate function is : " + calculate(FirstNumber, SecondNumber, Multiply));
// // 3
// function displayResult(result) {
//     console.log("The result is: " + result);
// }
// // 4 
// var result = calculate(FirstNumber, SecondNumber, Multiply);
// displayResult(result);
// -------------------------------------------------------------------

// Task 2: Working with setTimeout and setInterval

// 1. setTimeout Example
function greetUser() {
    setTimeout(function() {
        console.log("Hello, User!");
    }, 3000);
}
greetUser();

// 2. setInterval Example
function countdown() {
    var count = 10;
    var interval = setInterval(function() {
        console.log(count);
        count--;
        if (count === 0) {
            console.log("Time's up!");
            clearInterval(interval);
        }
    }, 1000);

    // 3. Clear setInterval after 5 seconds
    setTimeout(function() {
        clearInterval(interval);
        console.log("Countdown stopped after 5 seconds.");
    }, 5000);
}
countdown();

// 4. Clear setTimeout Example
var timeout = setTimeout(function() {
    console.log("This will be cleared!");
}, 5000);

clearTimeout(timeout); 
