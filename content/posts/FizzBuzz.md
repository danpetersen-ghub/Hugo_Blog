+++
date = 2022-03-06T00:00:00Z
title = "Simple FizzBuzz"

+++
# Hey umm... is this thing on?

# 

#### Yes I believe so

So here is a simple FizzBuzz

# 

    const Array = [];
    
    for (var i = 0; i < 100; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        Array.push("FizzBuzz");
      } else if (i % 3 == 0) {
        Array.push("Fizz");
      } else if (i % 5 == 0) {
        Array.push("Buzz");
      } else {
        Array.push(i);
      }
    }
    
    console.table(Array);

###### Ouput:

![](/uploads/fizzbuzz-output.png "TerminalOutput")