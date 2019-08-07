// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const multByFive = (num) => {
  return () =>  {
     return 5 * num;
  }
};
let multiplied = multByFive(4);
console.log(multiplied());


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () =>  {
     return ++count;
  }
};
// Example usage: const newCounter = counter();
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2
console.log(newCounter()); // 3
console.log(newCounter()); // 4

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let theCount = {
    counter: 0,
    increment: function() {
      this.counter += 1;
    },
    decrement: function() {
      this.counter -= 1;
    }
  }
  return theCount;
};

const newCount = counterFactory();
newCount.increment();
newCount.increment();
newCount.increment();
newCount.increment();
newCount.decrement();
console.log(newCount);
