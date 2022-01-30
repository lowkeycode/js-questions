# JavaScript Study

## Fundamentals

<details>
  <summary>What are the 2 main data types in JavaScript?</summary>
  Objects & Primitives
</details>

<details>
  <summary>Name each of the data types in JavaScript(Use an acronym to help remember)</summary>
  SNOBBUSN. Strings, Numbers, Objects, Booleans, BigInt, Undefined, Symbols & Null
  <img src="https://pbs.twimg.com/media/EgM91XuUYAAaIsY?format=jpg&name=900x900" />
</details>

<details>
  <summary>What is the main difference between let and const?</summary>
  let is used for variables that will be reassigned to another value later.
  const is used for variables that will not change
</details>

<details>
  <summary>What is the difference between type conversion and type coercion?</summary>
  Conversion is when WE manually & explicitly convert from one type to another.
  Coercion is when JavaScript automatically does it implicitly behind the scenes for us.
</details>

- Create separate variables for a car called 'year', 'make', 'model', 'doors', 'color' according to your favorite car and assign values to them. Additionally declare an 'isClassic' variable and don't assign it any value. Determine which variables may or may not change and declare them accordingly. Console log your varaibles.

- To get the age of anything take the current year and subtract the year the item was created. Write a function that takes in the year of your car and assign a true or false value to the isClassic variable if your car is over 20 years old. Console log isClassic.

- Your car got a paint job. Reassign it's color to a new one.

- Write a function that takes in all of your car variables as arguments and console logs a string describing your car. Use template literals for your string. Use a ternary operator to say either 'it is a classic' or 'it is not a classic'
Ex.) My favorite car is a black 1969 Ford Mustang 2 door and it is a classic.

<details>
  <summary>What is the difference between the == and the === comparison operators?</summary>
  == is equal to value. Ex.) 1 == '1' is true because JavaScript has type coercion and will try to help out in some instances
  === is exactly equal to (value and type) Ex.) 1 === '1' is false
  It is best practice to mainly use the === operator to avoid bugs
</details>


<details>
  <summary>What is the difference between how function declarations and how function expressions are written?</summary>
  Function declarations are written with the function keyword

  ```js
  function calcAgeDeclaration(birthYear, currentYear) {
  return currentYear - birthYear;
}
  ```
  
  Function expressions are anonymous functions stored in a variable

```js
const calAgeExpression = function (birthYear, currentYear) {
  return currentYear - birthYear;
};
```

REMEMBER FUNCTION ARE JUST VALUES AT THE END OF THE DAY AND CAN BE STORED IN VARIABLES AND EVEN PASSED TO OTHER FUNCTION AS ARGUMENTS
</details>

<details>
  <summary>What are the characteristics of an arrow function compared to regular functions?</summary>
  - All values have implicit returns with one liners.

  ```js
  const calcAgeArrow = birthYear => 2037 - birthYear;
  // Single params do not require parentheses
  ```

  - Multi-param functions need to use the parentheses

  ```js
  const calcAgeArrow = (birthYear, currentYear) => currentYear - birthYear;
  ```

  - Multi-line arrow functions need the curly brackets and an explicit return;

  ```js
  const yearsUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
  };
  ```

  Arrow functions do not get a this keyword
</details>

- Write a function DECLARATION that takes a persons age and that countries legal drinking age and returns true or false if that person is of legal drinking age.

- The average age in Canada is 40. Write a function EXPRESSION that takes a persons age and returns 'above average age' or 'below average age' based on the persons age.

- Write an arrow function that takes two numbers and returns the sum. Write it as one line.

- Write a multi-line arrow function that takes two numbers and multiplies them, then returns a string with template literals. Ex.) 5 times 5 is 25.

- Write a function that takes in a length and a width to calculate the area of a rectangle. Store the called function into a variable.

- Write a function that takes in the variable that holds the result from the previous function as well as a height to calculate the volume of a rectangular prism.

<details>
  <summary>How does the modulo operator work?</summary>
  It returns the remainder after the division of 2 numbers.

  Useful in some simple cases for:
  - Determining if a number is even or odd 
  ```js
  6 % 2 // 0 -> Even
  7 % 2 // 1 -> Odd
  8 % 2 // 0 -> Even 
  12 % 2 // 0 -> Even
  13 % 2 // 1 -> Odd
  // Anything that returns 0 is even with a % 2
  ```
  
  - Determining if a number is a multiple of another number ("Fizz buzz")

  ```js
  for(let i = 1; i <= 15; i++) {
    if(i % 5 ===0 && i % 3 === 0) {
      console.log(`${i}: fizz buzz`)
    } else if(i % 5 === 0) {
      console.log(`${i}: buzz`)
    } else if(i % 3 === 0) {
      console.log(`${i}: fizz`)
    } else {
      console.log(i)
    }
  }
  ```
</details>

<details>
  <summary>What is the difference between a statement and an expression?</summary>

  An easy way to remember is Expression --> E --> Evaluates to something. Expressions evaluate and resolve to a value. Ex.) A function call is an expression because it evaluates to something - isOfLegalAge(); Statements are instructions. Ex.) if, while and for are all statements. 
</details>

<details>
  <summary>What is the difference between parameters and arguments?</summary>
  An easy way to remember is Parameter --> P --> Placeholder. Parameters are place holders for values that the function will accept when you are DEFINING it. Arguments are the values the function takes in when being CALLED.
</details>

- Create a function that takes in a weekday. If the weekday is Monday console log "Mondays can fuck off and all!". If the week day is Wednesday console log "Ooooo hump day ;)". If the weekday is Friday console log "Mandatory eat a poutine day". Inside the function perform the above 4 different ways. Use 3 single, separate if statements. Use chained if and if else statements. Use a switch statement. Use a ternary (only for monday & friday).

<details>
  <summary>What are the falsy values in JavaScript? What are the truthy values?</summary>
  Falsy:
  - false (The keyword false)
  - 0 (The Number zero)
  - -0 (The number negative zero)
  - 0n (The BigInt zero)
  - "", '', `` (An empty String)
  - null (null - the absence of any value)
  - undefined (undefined the primitive value)
  - NaN (not a number)

  Truthy: 
  - EVERYTHING ELSE
</details>


## Features of JavaScript as a Language

<details>
  <summary>What is Garbage Collection in JavaScript?</summary>
  Some programming languages have automatic memory management. When you define variables, functions, objects, classes etc. pieces of memory are set aside to store them. There is finite memory. In other languages the programmer has to manually manage the memory and clean up after themselves when variables etc. are no longer being used. Javascript has a garbage collector that automatically monitors and reclaims pieces of memory that are no longer needed for us so we don't (rarely) need to worry about it.
</details>

<details>
  <summary>What is Just In Time (JIT) in JavaScript</summary>
  A bit computer sciencey but here we go...

  Compilation: In compiled languages code is COMPILED converted into machine code and stored in a portable file for example a .exe file. The file can be EXECUTED way AFTER compilation at any point in time when the program needs to run. Think programs on your laptop.

  Interpretation: In interpreted languages code is run through LINE BY LINE by the interpreter and executed one line after the other.

  JavaScript used to be interpreted but is now Just In Time compiled as interpreted languages lack performance because of the line by line nature.

  Just In Time (JIT): The code is compiled THEN EXECUTED IMMEDIATELY with no portable file like a compiled language. In JavaScript the initial compiled code is compiled quickly so the program can start running, and in the background the code is being automatically optimized again and again to run faster each time.
</details>


<details>
  <summary>What does it mean that JavaScript is Multi-Paradigm?</summary>
  It supports both Functional and Object Oriented programming, which are different styles or approaches to writing code. Functional programming relies heavily on the use of functions that create modular programs. Object Oriented programming relies on classes and inheritance. Research the differences between the two if you would like as it can be a large subject to cover.
</details>

<details>
  <summary>What does it mean that JavaScript is Prototype Based?</summary>
  JavaScript has inheritance. A child class (object) can inherit methods and properties from a parent class (object) through what is called the prototype chain. 
</details>


<details>
  <summary>What does it mean that JavaScript is single threaded?</summary>
  It only has one call stack (or thread) where the code is executed.
</details>

<details>
  <summary>What does it mean that JavaScript has First Class Functions?</summary>
  A first class function is just a QUALITY of functions in JavaScript. It means that simply that function are values. The can be passed around and stored as values.

  To build on this...
  Again because they are just values that means the can be passed around. So because we have functions that are just values, that means we can pass them to or even return them from a function. A function that either takes in a function as an argument or returns a function is called a Higher Order Functions. I swear they use fancy names for shit in programming to gate keep and smell their own farts.
</details>

<details>
  <summary>What does it mean that JavaScript is Dynamically Typed?</summary>
  Some languages require you to explicitly define the data type that will be used in a variable. This can lead to less buggy code. JavaScript is dynamically typed and we don't need to define the data type. There are more in depth computer science differences between type checking at compile vs runtime. Research if you want.

Static Typed
  ```java
  int num;
  // Programmer defines data type that will be stored
  num = 5;
  ```

Dynamically typed
```js
const num = 5;
// No data type definition, JavaScript figues out udner the hood what it is
console.log(typeof num); //Number
```
</details>

<details>
  <summary>How is JavaScript Non-blocking?</summary>
  Concurrency: Multiple computations happening at the same time.
  JavaScript is single threaded (only one call stack). It needs a way to perform multiple things at the same time. JavaScript has access to Web APIs from browsers. These are things like the fetch() function, setTimeout(), the DOM and more. In the Web API environment is where asynchronous code or tasks run so they don't block JavaScripts call stack with tasks that may take some time, and allows other code to continue running. When the async task finishes running in the Web API environment it is put in a queue (a lineup or a todo list for the call stack) called the CALLBACK QUEUE. As the other code in the call stack is running the EVENT LOOP checks constantly to see if any asynchronous task has arrived in the callback queue. If the event loop sees a finished task it grabs it and puts the async task back in the call stack to be executed.

  [This tool](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D) provides a nice visualization of how the call stack interacts with the Web APIs, callback queue and event loop.
</details>

<details>
  <summary>What does it mean that JavaScript is a high-level language?</summary>
  Abstraction: A simplified version of something, or reducing complexity by removing unnecessary information.
  JavaScript is written in a way that the code we write is largely abstracted away from machine code, or code the computer understands. It is more human readable. Lower level languages are harder for people to read, but easier (and usually thus faster) for computers to read.


Ex.) Very low level code in an Assembly language
  ```
  _fib:
        movl $1, %eax
        xorl %ebx, %ebx
.fib_loop:
        cmpl $1, %edi
        jbe .fib_done
        movl %eax, %ecx
        addl %ebx, %eax
        movl %ecx, %ebx
        subl $1, %edi
        jmp .fib_loop
.fib_done:
        ret
  ```
</details>

## Objects & Arrays

```js
const hotel = {
  name: 'The Sheraton',
  hotelLocation: '1000 Burrard St Vancouver, BC',
  rooms: 1500,
  roomTypes: ['Single', 'Double', 'Suite', 'Themed'],
  roomService: true,
  starterMenu: ['Poutine', 'Salad', 'Chicken Fingers', 'Pot Stickers'],
  mainMenu: ['Roast Duck', 'Beef Wellington', 'Seared Salmon', 'Canadian Pizza'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
}
```
The above object contains a few varied key value pairs, including a method to order a starter and main menu item based on the index of that item in it's array.

<details>
  <summary>What brackets are used with array destructuring?</summary>
  Square brackets '[]'.
  The destructured variable names can be whatever we want
</details>

<details>
  <summary>What brackets are used for object destructuring?</summary>
  Curly brackets '{}'
  The destructured variable names must match what they are called inside the object
</details>


- Access the hotels name using dot notation.

- Access the hotels location using square notation

- Destructure the first 2 items in the main menu array

- Destructure only the first and third items in the main menu array

- The order function returns an array. Call it and destructure the returned array into a myStarter and myMain variable.

- Destructure the hotel name, hotelLocation and openingHours from the hotel object


<details>
  <summary>What is the spread operator and how does it work?</summary>
  It makes a COPY of the original array and SPREADS all the items from that array into a new one.
  Also helpful for joining two arrays or adding item to an existing one.

  ```js
    const array1 = [1, 2, 3]
    const newArray = [...array1];

    newArray.pop();
    console.log(newArray);
    console.log(array1);
    // Doesn't mutate/change original array because the spread made a copy


    const joinedArray = [...array1, ...newArray, "Meatball Sandwich"];
    console.log(joinedArray);
  ```
</details>


- Spread the starterMenu into a newStarterMenu variable and add a new starter item to the menu. Console log the new start menu.

<details>
  <summary>What is the difference between stored by reference and stored by value?</summary>
  There are 2 main data types in JavaScript. Objects and Primitives. Because Objects (In JavaScript arrays, functions and other data structures are considered objects) can grow to a very large size they are stored in memory at a different location than primitives. 

  The main takeaway is that because of how they are stored in memory, when working with objects (Arrays, functions etc.) you need to be careful not to alter the original.

  ```js
    const me = {
      name: "Cam",
      age: 30,
    };

    const friend = me;

    friend.age = 29;

    console.log(friend);

    console.log(me);
    // This alters the original object
  ```

  When working with reference types, we need to be careful of this. So there are some built in methods, techniques to use to ensure we don't cause bugs because of this behavior. Some built in methods automatically return a copy of the array, object etc. (Think Array.map())


  ```js
    const array1 = [1,2,3];
    const array2 = array1;

    arr2[0] = 5;

    console.log(arr1);

  ```

  So from above we can also see the use case of how handy it can be to make a copy of an array using the spread operator.

  ```js
    const array3 = [4,5,6];

    const newArray = [...arr3];

    newArray[0] = 10;

    console.log(newArray);

    console.log(array3);
  ```
</details>


- Use a for in loop to loop over and log out all the keys from the hotel object

- Use the spread operator to join the starterMenu and the mainMenu into a fullMenu variable. Use a for of loop to loop over and log out all items in the fullMenu array.

<details>
  <summary>What are some characteristics/differences to keep in mind with how objects and arrays store data?</summary>
  Arrays
  - use when you need an ordered list (have an index)
  - use when you need to manipulate the data (many built in methods Ex.) map, filter, reduce, forEach etc.)

  Objects
  - Can easily access data with . and bracket [] notation
  - Can include functions in them to write your own methods
  - Can use the this keyword
  - Use especially when working with JSON
</details>


## Array Methods

[Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)

Don't try to remember the syntax of each method, that will come with time or a google search. Remembering WHAT METHODS are available and WHAT THEY DO is much more helpful because it gives you a better sense of tools you have in your tool belt to accomplish a certain outcome. Ex.) "Oh I think I remember a method that could take a piece out of the middle of an array..." Googles "remove items from an array javascript" and the MDN Array.splice() link shows up.

Because there are many helpful array methods, it is common to convert other data types (Ex.) strings) to arrays, do some work, then turn them back into the desired data type when you are finished.

Get used to looking at MDN for documentation on different functions/methods. It is hard to read at first because there is a lot of information. You get used to it and will gain the ability to quickly skim for the information you need. It is a good skill to have.


```js
const arr = ["a", "b", "c", "d", "e"];
```

### Slice

- Use slice() to remove the last 3 items from the array and store them in a variable. Console log your new variable and the original array. Was the original changed/mutated?
- Use slice() to remove only c and d
- Use slice() to start from a negative position Ex.) arr.slice(-2). Console log the returned value. Console log arr.slice(-1)
- Use slice() to start from a position and go to a negative position. Ex.) arr.slice(1, -2)

### Splice

- Use splice() to remove the last 3 items from the array and store them in a variable. Console log your new variable and the original array. Was the original changed/mutated?


### Reverse

- Use reverse() on the array

### Join

- Use join(" - ") on the array

### ForEach

```js
  const transactions = [200, 450, -400, 3000, -650, -130, 70, 1300];
```

- Loop over the transactions with forEach and if the number is greater that 0 console log 'I made $ dollars' or if less console log 'I spent $ dollars'

- Many of the looping array methods have access to the index of that array. Add "Transaction #:" to each transaction
Ex.)
Transaction 1: I made $200
Transaction 2: I made $450
Transaction 3: I spent $400


### Map

- An interest rate is 1.1 . Loop over the array with map and calculate the interest on each transaction. Dont forget to return AND store the result in a variable when using map()

Note the difference between forEach & map. forEach goes does it work, changing the data, while map will make a copy return a new array with the changes not affecting the original.

### Filter

- Use filter() on the array to return all numbers greater than 0
- Did it mutate the original array?

### Reduce

- Use reduce to calculate the total balance after all transactions


Read through the other array methods on MDN and try the others out for yourself.

HANDY GUIDE

Need - MUTATE THE ORIGINAL:

Insert:
.push (end)
.unshift (start)

Delete:
.pop (end)
.shift (start)
.splice (any)

Others:
.reverse
.sort
.fill

Need - A NEW ARRAY:
- .map (copy with a loop & callback)
- .filter (using a condition)
- .slice (copy of a portion or original)
- .concat (joining arrays)
- .flat (flatten as deep as needed)
- .flatMap (flattens 1 level with callback)

Need - ARRAY INDEX:
- .indexOf (based on value)
- .findIndex (based on conditional)

Need - ARRAY ELEMENT
- .find (based on conditional)

Need - ARRAY INCLUDES
- .includes (based on value)
- .some (based on conditional)
- .every (based on conditional)

Need - A NEW STRING
- .join (based on separator)

Need - TRANSFORM A VALUE
- .reduce() (boil down to a single value of any type even a new array or object)

Need - TO LOOP AN ARRAY
- .forEach (based on callback/doesn't create a new array just loops over it)


## String Methods

A handy thing to do is to convert a String to an Array to get access to the Array methods. Strings however do come with many useful built in methods.
[String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods)

```js
const string = "1,2,3,4,5";

const stringArray = Array.from(string);
const spreadedArray = [...string];
const splitArray = string.split(',');

console.log(stringArray);
console.log(spreadedArray);
console.log(splitArray);
```

### Slice

- An airplane has middle seats that contain the letter B or E. Create a function that takes in a single seat number and slices the letter to check if the seat is a middle seat or not and console logs an appropriate message. Use the following seats. 11B, 23C, 3E.

### ToLowerCase/Trim

- Write a function that confirms two emails are equal when entered with incorrect casing and additional spaces. Email 1: "hello@gmail.com". Email 2: "   Hello@gmAil.Com". Use the toLowerCase() and trim() methods.

### Replace

- Write a function to convert a price in euros (288,97£) to USD. Use replace() to change the comma to a period and the pound sign to a dollar sign.

### Includes/StartsWith/EndsWith

- Write a function that takes in the following string "He spiked his hair green to support his iguana". Use includes() to see if it includes(), startsWith() or endsWith() words of your choice.

### Split

- Split the string from the previous question on all the spaces. 

### PadStart/PadEnd

- Create a function that takes in a string. padStar() five characters of your choice and padEnd() five characters of your choice.


### Repeat

- Call and console lof the result of calling repeat() on any string

### More String Questions...

- Write a function to take in a single  fullname string (first and last) Ex.) 'haNnah monTana'. Change the first letter of each name to be uppercase and all following letters lowerase. Ex.) 'haNnah monTana' --> 'Hannah Montana'

- Create a function that takes in a 16 digit credit card number as a string. Ex.) "4724025869694674". Slice() the beginning four digits and padStart() the beginning with an "X"  based on the length of numbers that were sliced off. Ex.) "4724025869694674" --> "XXXX025869694674"


## Math Methods

[Math Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math#static_methods)

### Min/Max

- Write a function that takes in an array of numbers. [1, 5, 7, 4, 31]. SPREAD the given array into the Math.min() & Math.max() methods and return the result.

### Trunc/Floor/Ceil/Round/ToFixed

- Given a positive & negative decimal number 5.95963 & -8.954878, store them each in a variable. Console log the result of running Math.trunc(), Math.floor(), Math.ceil() with the numbers as the arguments. Run .toFixed() on both the numbers. 

### Abs

- Given and positive and negative number 9 & -18 run Math.abs(). Handy for turning any number in to a positive
