# JavaScript Study

## Fundamentals

<details>
  <summary>What are the 2 main data types in JavaScript?</summary>
  Objects & Primitives
</details>

<details>
  <summary>Name each of the data types in JavaScript(Use an acronym to help remember)</summary>
  SNOBBUSN. Strings, Numbers, Objects, Booleans, BigInt Undefined, Symbols & Null
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
</details>