+++
date = 2022-03-15T09:00:00Z
description = "The filter() method creates a new array with all elements that pass the test implemented by the provided function."
title = "JS: Filter"

+++
# .filter()

So I am kicking myself I haven't been using this earlier. It's actually rather simple yet very useful. 🤦‍♂️

So like other methods for arrays, we can use the call back function (the function we pass to another function) in a couple of ways:

    //ES5 syntax with function inline
    array.filter(
    	function(element) { //some set a rule here }
    );
    
    //ES6 Arrow function. again inline
    array.filter(
    	(record) => record.age > 10
     );
    
    //as a call back function
    function myRule(element) { 
    	//some set a rule here 
    }
    array.filter(myRule);

So to see it in action we will use the same object we have used for the [.find() post](https://blog.dandevelopment.uk/posts/js.find-method/).

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

Again, this is a simple Array of objects. Something like you'd see in a standard user table.

    const filteredArray = array.filter((record) => record.age > 45);
    console.log(filteredArray.length); //output: 2

Great! we can see a new Array has been created but is only 2 items in the array.  👏

You can use destructuring again:

    const filteredArray2 = array.filter(({ age }) => age > 45);
    console.log(filteredArray2.length); //output: 2

So as I continue with NodeJS and MySQL & APIs, these types of data manipulation methods will be very useful! 👌

**Resources:**

* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter")
* [https://www.freecodecamp.org/news/javascript-array-filter-tutorial-how-to-iterate-through-elements-in-an-array/](https://www.freecodecamp.org/news/javascript-array-filter-tutorial-how-to-iterate-through-elements-in-an-array/ "https://www.freecodecamp.org/news/javascript-array-filter-tutorial-how-to-iterate-through-elements-in-an-array/")