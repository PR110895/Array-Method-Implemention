//1. Array.map()

const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);

//2. Array.slice()
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]
console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]
console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

//3. Array.splice()
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
//4. Array.reverse()

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

//5. Array.concat()
const arrayA = ['a', 'b', 'c'];
const arrayB = ['d', 'e', 'f'];
const arrayC = arrayA.concat(arrayB);
console.log(arrayC);

//6. Array.join()
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
// expected output: "Fire,Air,Water"
console.log(elements.join(''));
// expected output: "FireAirWater"
console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

//7. Array.entries(),.next(),.value()
const array3 = ['a', 'b', 'c'];
const iterator1 = array3.entries();
console.log(iterator1);

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]
console.log(iterator1.next().value);
// expected output: Array [2, "c"]

//8. Array.entries()
const array4 = ['a', 'b', 'c'];
array4.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

//9. Array.set
const mySet1 = new Set();

mySet1.add(1); // Set [ 1 ]
mySet1.add(5); // Set [ 1, 5 ]
mySet1.add(5); // Set [ 1, 5 ]
mySet1.add('some text'); // Set [ 1, 5, 'some text' ]
console.log(mySet1);

//10. Array.some(),every(),filter()
//a. Some()
const array = [1, 2, 3, 4, 5];
// checks whether an element is even
const even = element => element % 2 === 0;
console.log(array.some(even));
// expected output: true

//b. every()
const isBelowThreshold = currentValue => currentValue < 40;
const array6 = [1, 30, 39, 29, 10, 13];
console.log(array6.every(isBelowThreshold));
// expected output: true

//c. filter()
const array10 = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array10.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

//11.Push & Pop
// a push
const animals1 = ['pigs', 'goats', 'sheep'];

const count = animals1.push('cows');
console.log(count);
// expected output: 4
console.log(animals1);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals1.push('chickens', 'cats', 'dogs');
console.log(animals1);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
// b pop()
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
// expected output: "tomato"
console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
plants.pop();
console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

//12. shift() , unshift()

//a.  shift()
const array15 = [1, 2, 3];

const firstElement = array15.shift();

console.log(array15);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1

// b. unshift()
const array11 = [1, 2, 3];

console.log(array11.unshift(4, 5));
// expected output: 5

console.log(array11);
// expected output: Array [4, 5, 1, 2, 3]
