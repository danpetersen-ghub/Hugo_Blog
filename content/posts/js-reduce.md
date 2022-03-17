+++
date = 2022-03-17T09:00:00Z
description = "The reduce() method executes a user-supplied \"reducer\" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element"
title = "JS: Reduce Method"

+++
# .reduce()

Simply put 'sum' of an array, will work its way through an array, index by index, and add each value to a running total. At the end of the Array, the total is returned; Hooray! 🥳

In action:

    const sumArray = array.reduce(  
    ( previousValue, currentValue ) => previousValue + currentValue.age,  
    0);
    console.log(sumArray); //Output 290

The important thing here is: 

    currentValue.age

It can do a lot more but ill investigate this in the future. 

Array referenced above:

    const array = [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue",
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        age: 40,
        eyeColor: "green",
      },
      {
        id: 3,
        firstName: "Dan",
        lastName: "Petersen",
        age: 200,
        eyeColor: "brown",
      },
    ];
    

**Resources:**

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce")