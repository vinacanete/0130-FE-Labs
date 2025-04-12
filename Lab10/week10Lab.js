/* 
   Copyright (c) 2023 Promineo Tech
   Author:  Promineo Tech Academic Team
   Subject:  JavaScript and DOM Manipulation 
   FE Lab Week 10
*/

/* ----------------------------------------------------- */
// Key Term List:
// DOM (Document Object Model)
// Element/node
// CSS Selector (class/id/node)
// Event Listener
//.createElement
//.getElementBy___
//.querySelector
//.append
//.prepend
// element.style.____ = ''
// .innerHTML = 'Hello World'
//

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/*------------------------ Creating a website with only JS ------------------------*/
console.log(`-------------------------- 
Part 1: Create a form with only JavaScript`)

/** 
 *
 * Step 1: Uncomment out the 'console.log(myForm)' at the bottom of the section.
 * Step 2: Using let, make a new variable called 'myForm'.
 * Step 3: Set it to be equal to document.createElement('form') // check the result in the console.
 * Step 4: Repeat steps 2 and 3, but with: myLabel, myInput . This input will be used to enter a name.
 * Step 5: Set the .innerHTML of myLabel to be equal to 'Name'
 * Step 6: Append myLabel to myForm, then append myInput to myForm
 * Step 7: Append myForm to document.body
           You should now have a label and a input on your website.
           Do the same steps, appending a label/input for Email, and a submit button to your form.
 * ↓ YOUR CODE HERE ↓ */

// create form
let myForm = document.createElement('form')
document.body.append(myForm)

// form field: name
let myNameLabel = document.createElement('label')
let myNameInput = document.createElement('input')
myNameLabel.innerHTML = 'Name'

myForm.append(myNameLabel)
myForm.append(myNameInput)

// form field: email
let myEmailLabel = document.createElement('label')
let myEmailInput = document.createElement('input')
myEmailLabel.innerHTML = 'Email'

myForm.append(myEmailLabel)
myForm.append(myEmailInput)

// Submit button
mySubmitButton = document.createElement('button')
mySubmitButton.innerHTML = 'Submit'


// add inputs to form (extra step)
myForm.append(mySubmitButton)
mySubmitButton.addEventListener('click', (event) => {
   event.preventDefault()
   const nameValue = myNameInput.value
   const emailValue = myEmailInput.value
   const newRow = document.createElement('tr')
   const newNameCell = document.createElement('td')
   const newEmailCell = document.createElement('td')
   newNameCell.innerHTML = nameValue
   newEmailCell.innerHTML = emailValue
   newRow.append(newNameCell)
   newRow.append(newEmailCell)
   myTable.append(newRow)

   newNameCell.style.border = '1px solid black'
   newNameCell.style.borderCollapse = 'collapse'
   newEmailCell.style.border = '1px solid black'
   newEmailCell.style.borderCollapse = 'collapse'
   myNameInput.value = ''
   myEmailInput.value = ''
})

// log the form to the console
console.log(myForm)

//Question: Besides changing the innerHTML, what other HTML things can we change using JavaScript?
//Answer: class, id, style, attributes, values, properties, etc.

/*------------------------ Styling a form with only JavaScript------------------------*/
console.log(`-------------------------- 
Part 2: Styling our form with only JavaScript`)

/**
 *  Hint: element.style.cssProperty = ''
 *
 *  Step 1: Change the background color of your form to your favorite color.
 *         (you can use an accepted string, hex (ex: #DBF9FC) or rgb, (ex: rgb(255,122,89)))
 *  Step 2: Change the font color so it's readable over your background color
 *  Step 3: Give your form a display of flex, a flex-direction of column, and a max-width of 250px
 *
 * ↓ YOUR CODE HERE ↓ */
myForm.style.backgroundColor = 'rgb(210, 35, 131)'
myForm.style.color = 'white'
myForm.style.display = 'flex'
myForm.style.flexDirection = 'column'
myForm.style.maxWidth = '250px'
myForm.style.padding = '10px'

//Question: Do you prefer styling with JavaScript or CSS?
//Answer: I like to use CSS for styling

/*------------------------ Creating a table with only JavaScript ------------------------*/
console.log(`-------------------------- 
Part 3: Creating a table with only JavaScript`)

/*
 * Note: Most of these steps are similar to Part 1.

 * Step 1: Uncomment out the console.log(myTable) below.       
 * Step 2: Create 4 new table elements: <table>, <tr>, <td>, <td>. Store them in variables using let
 * Step 3: One of your TD elements innerHTML should be 'Name', the other should be 'Email'.
 * Step 4: Append them in the same way that we create a table with HTML.
 * Step 5: Append the finished <table> to your <body>. It should now be on your website. 
          As an added challenge, try to create a complete table with 2 rows, name/email and append it to the body.

 * Final Step: Style your table using JavaScript starting with a border. You may need to target more element/nodes than we did with myTable.
 * ↓ YOUR CODE HERE ↓ */

let myTable = document.createElement('table')
let myRow = document.createElement('tr')
let myNameCell = document.createElement('td')
let myEmailCell = document.createElement('td')

myNameCell.innerHTML = 'Name'
myEmailCell.innerHTML = 'Email'

console.log(myEmailCell)

myTable.append(myRow)
myRow.append(myNameCell)
myRow.append(myEmailCell)

let myRow2 = document.createElement('tr')
let myNameCell2 = document.createElement('td')
let myEmailCell2 = document.createElement('td')
myNameCell2.innerHTML = 'John Doe'
myEmailCell2.innerHTML = 'john@doe.com'

myTable.append(myRow2)
myRow2.append(myNameCell2)
myRow2.append(myEmailCell2)

document.body.append(myTable)

myTable.style.width = '50%'
myTable.style.border = '1px solid black'
myTable.style.borderCollapse = 'collapse'
myRow.style.border = '1px solid black'
myRow.style.borderCollapse = 'collapse'
myNameCell.style.border = '1px solid black'
myNameCell.style.borderCollapse = 'collapse'
myEmailCell.style.border = '1px solid black'
myEmailCell.style.borderCollapse = 'collapse'
myNameCell2.style.border = '1px solid black'
myNameCell2.style.borderCollapse = 'collapse'
myEmailCell2.style.border = '1px solid black'
myEmailCell2.style.borderCollapse = 'collapse'


console.log(myTable)

//Question: While this is clearly a more round-about way of making a table, how can using JavaScript in this way
//          more beneficial than HTML?
//Answer: make dynamic tables, create tables based on user input

/*------------------------ Changing our body background on click ------------------------*/
console.log(`-------------------------- 
Part 4: Changing our background on click`)
/**
 * Documentation: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
 *
 * Step 1: In our HTML, uncomment out the <button> element.
 * Step 2: Read through the documentation up through the first block of code.
 *         We're going to use rgb (ex: rgb(0,125,255) ) to change the color of our body's background when we click the button
 * Step 3: Create a variable called myButton that uses getElementById() to target the button in step 1.
 * Step 4: Use the 'addEventListener' method on myButton.
 *         addEventListener is a method takes in two arguments: an event listener type, and a function.
 * Step 5: For the first argument, add 'click'. For the second argument, add a function body... (ex: function (){})
 * Step 6: Inside of the function body, change the backgroundColor of our body element.
 *         Let's use rgb(0,125,255) to change the color, and Math.random() to change the values inside rgb().
 * Step 7: Click the button in your index.html and see the background change!
 *
 * ↓ YOUR CODE HERE ↓ */
const myButton = document.getElementById('myButton').addEventListener('click', () => {
   document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
})


//Question: What other event listeners are there?
//             Try them out by replacing 'click' in your function above! [tried mouseover and mousemove]
//Answer: mouseup, mousedown, mouseover, mousemove, mouseleave, keydown, keyup, focus, blur, change, input

console.log(`-----------Finished------------`)

/**
 * Extra Project Ideas:
 *
 * 1: Create a button that changes the innerHTML of a div back and forth from 'Hello' to 'World'
 * 2: Create an image that disappears when you hover over it, and reappears when you hover off.
 * 3: When you click your form button, get the input values of your name/email input,
 *    and append a new <tr> containing those values to your tBody element.
 *    Look into event.preventDefault(). Buttons inside of forms have a default setting to refresh the page.
 */

const changeButton = document.createElement('button')
changeButton.innerHTML = 'Change Text'
document.body.append(changeButton)
const myDiv = document.createElement('div')
myDiv.innerHTML = 'Hello'
document.body.append(myDiv)
changeButton.addEventListener('click', () => {
   myDiv.innerHTML = myDiv.innerHTML === 'Hello' ? 'World' : 'Hello'
})


const myImage = document.createElement('img')
myImage.src = 'https://i.pinimg.com/originals/3d/06/8a/3d068af010ecf2aefdc728afde29967c.gif'
myImage.style.width = '150px'
myImage.style.height = '150px'
document.body.append(myImage)
myImage.addEventListener('mousedown', () => {
   myImage.style.display = 'none'
})