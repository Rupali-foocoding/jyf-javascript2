function doIt() {
  console.log('I am done');
}
setTimeout(doIt, 5000);
//2.1
function foo(func) {
  // What to do here?
  func();
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);
//2.2
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = Array.from({length: stopIndex - startIndex + 1},(_, i) => startIndex + (i));
  // make array
  // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next
  numbers.forEach(n => {
    n % 3 || threeCallback(n);
    n % 5 || fiveCallback(n);
  });
}
function sayThree(n) {
  console.log(`My value is ${n} and i am divisible by 3!`);
}
function sayFive(n) {
  console.log(`My value is ${n} and i am divisible by 5!`);
}
threeFive(10, 15, sayThree, sayFive);

// Should create an array [10,11,12,12.14,15]
// and call sayFive, sayThree, sayThree, sayFive
// please make sure you see why these calls are made before you start coding

//2.3 (for loop to repeat a string)
function repeatStringFor(str, num) {
  let output = '';
  for (let i = 0; i < num; i++) {
    output+= str;
  }
  console.log(output);
}

repeatStringFor('welcome', 5);

//2.3 (while loop to repeat a string)
function repeatStringWhile(str, num) {
  let output = '';
  let i = 0;
  while (i < num) {
    output += str;
    i++;
  }
  console.log(output);
}
repeatStringWhile('Thank You!', 2);

//2.3 (do-while loop to repeat a string)
function repeatStringDoWhile(str, num) {
  let output = '';
  let i = 0;
  do {
    output += str;
    i++;
  } while (i < num);
  console.log(output);
}
repeatStringDoWhile('Gratitude', 6);

//2.4 using constructor to create object
function Dog() {
  this.name = "Coco";
  this.color = "Golden-brown";
  this.numLegs = 4;
}
let goldenRetriver = new Dog();
console.log(goldenRetriver);

//2.5 nested for loops
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
console.log(multiplyAll([[1], [2], [3]]));
console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
console.log(multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]));

//2.6
const arr = [1, 2, 3];
const arr2d = [[1, 2], [3, 4], [5, 6]];
function flattenArray2d(arr) {
  console.log(arr.flat());
}
console.log(flattenArray2d(arr2d));


//2.7
const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);
// In the above code, f1 works directly on the primitive variable passed to it i.e 9.
const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);
// In he above code, f2 works on the value of the property 'x' of the object variable that is passed to the function as an argument. 

//step 3 Scope and closures
function createBase(base) {
  function addToBase(add) {
    return base + add;
  }
  return addToBase;
}
const addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27
//step 3 bonus
const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function uniqueArray(arr) {
  const uniqueOutput = [...new Set(arr)]

  return uniqueOutput;
}

const uniqueOutput = uniqueArray(values);
console.log(uniqueOutput);



