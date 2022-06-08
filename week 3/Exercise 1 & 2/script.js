//1.1 Say you would like to write a program that doubles the odd numbers in an array and throws away the even numbers.
//map & filter
function doubleOddNumbers(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6]
const doubleOdd = myNumbers.filter(num => num % 2).map(num => num * 2);
console.log(doubleOdd);
//1.2 Underneath you see a very interesting small insight in Maartje's work:
const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 1.0
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];
//Map the tasks to durations in hours.
const durationsInHours = monday.concat(tuesday).map(duration => duration.duration / 60);
console.log(durationsInHours);
//Filter out everything that took less than two hours (i.e., remove from the collection)
const durationFilter = durationsInHours.filter(duration => duration >= 2);
console.log(durationFilter);
//Multiply the each duration by a per-hour rate for billing (use €20/hour) and sum it all up.
const salary = durationFilter.map(price => price * 20).reduce((x, y) => x + y).toFixed(2);
console.log(salary);
