/*
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  Variables and Operations Lab
  FE JS1 Lab
*/

/** Key Terms:
 *  JavaScript
 *  GUI (Graphic User Interface)
 *  CLI (Command Line Interface)
 *  Variable
 *  Data Types:
 *   - String
 *   - Number
 *   - Boolean
 *   - Array
 *   - Undefined
 *   - Object
 *   - BigInt
 *   - Null
 *   - Symbol
 *  Method
 *  Git
 *  Source Control
 *  Operators
 *  console.log()
 * 
*/

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so. 
// Read the comments and add your code where it is specified for each question. 
/* ----------------------------------------------------- */

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 1. Creating & 'console.log()'ing variables \n`);

/**
 * Instruction: Create a variable for each step, then print that variable 
 *              to the console in the correct section.
 *
 * Step 1: Create a variable to hold the quantity of available seats left on a flight.
 * Step 2: Create a variable to hold the cost of groceries at checkout
 * Step 3: Create a variable to hold a person's middle initial
 * Step 4: Is it Hot Outside?
 *         Create a variable to hold a boolean, true if it's hot outside, false if it's not hot outside.
 * Step 5: Create a variable to hold a customer's first name.
 * Step 6: Create a variable to hold a street address.
 * ↓ YOUR CODE HERE ↓ */

console.log("Step 1:  Number of Seats on a Plane");
var availableFlightSeats = 23;
console.log(availableFlightSeats + " seats left on this flight");

console.log("Step 2:  Cost of Groceries");
var costOfGroceries = 231.75;
console.log("The cost of groceries this week is $" + costOfGroceries);

console.log("Step 3:  Middle Initial");
var middleInitial = "J";
console.log("The user's middle initial is " + middleInitial);


console.log("Step 4:  Is it Hot Outside?");
var isHotOutside = false;
console.log("It is hot outside? " + isHotOutside);

console.log("Step 5:  First Name");
var userFirstName = "Vina";
console.log("Welcome back, " + userFirstName);


console.log("Step 6:  Street Address");
var orderAddress = "123 Sample Street, ST 12345";
console.log("Your order is being shipped to " + orderAddress);


/*-------------------------------------------------------*/

console.log(`--------------------------
Question 2. Creating & 'console.log()'ing variables \n`);
 

/** 
 * Instruction: Use the variables we just created to solve the problems below.
 *              Print your answers to the console.
 * 
 *
 * */

    console.log('Remove Plane Seats:')
//	A customer booked 2 plane seats. Remove 2 seats from the available seats variable
//  ↓ YOUR CODE HERE ↓
    console.log ((availableFlightSeats - 2) + " seats left on this flight");

    console.log('Buy a Candy Bar:')
//	Impulse candy bar purchase! Add 2.15 to the grocery total
//  ↓ YOUR CODE HERE ↓
    console.log("The cost of groceries this week is $" + (costOfGroceries + 2.15));

    console.log('Fix a Birth Certificate:')
//	A birth certificate was printed incorrectly, change the middle initial to something else
//  ↓ YOUR CODE HERE ↓
    middleInitial = "C"
    console.log("The user's updated middle initial is " + middleInitial);


    console.log('Changing Seasons:')
//	The season has changed, update the hot outside variable	to be opposite of what it was
//  ↓ YOUR CODE HERE ↓
    isHotOutside = !isHotOutside;    
    console.log("The weather changed, it's no longer hot outside: " + isHotOutside);

    console.log('Full Name:')
//	Create a new variable called full name using the customer's
//  first name, the middle initial, and a last name of your choice
//  ↓ YOUR CODE HERE ↓
    var fullName = userFirstName + middleInitial + "Rodgers";
    console.log("The customer's full name is " + fullName);

    console.log('Introduce a Customer:')
//	Print a line to the console that introduces the customer 
//	including the name, and saying that they live at the address variable
//  ↓ YOUR CODE HERE ↓
    console.log("Introducing " + fullName + " who lives at " + orderAddress);

// OPEN CLASS INTRO test
// You have been given two variables, num1 and num2, each with predefined values as test cases. Your task is to calculate the sum of these variables and display the result using the console.log()
//  ↓ YOUR CODE HERE ↓
var num1 = 10;
var num2 = 2;
console.log("The sum of " + num1 + " and " + num2 + " is " + (num1 + num2));
console.log(num1 + num2);

var x = 5;
var y = 6;
x = 3 + y;
var z = x + y;
y = 5 + 2*x;
x = y;
console.log(z);

var x = 35;
var y = "20";
var z = x + y;
console.log(z);

var x = 25;
var y = 3;
var z = "Z = " + (x*2);
console.log(z);

var num1 = 3;
var num2 = 2;
var x = num1 * 2 + num2 * 3;
console.log(x);

    console.log('-----------Finished------------')