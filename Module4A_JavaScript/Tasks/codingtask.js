// Task: Calculate the sum of numbers within array 
const numbers = [52, 1010, 184, 200];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum); // Output: 1446

//Create a length converter function.
function lengthConverter(lengthInMeters) {
    const lengthInFeet = lengthInMeters * 3.28084;
    return lengthInFeet;
}
console.log("Length in Feet:", lengthConverter(6)); // Output: 3.28084

//Print all even numbers from 0 – 100.
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//print multiplication tables from 1 to 10, each up to 12

function printMultiplicationTables(upToTable, upToMultiplier) {
  for (let i = 1; i <= upToTable; i++) {
    let row = "";
    for (let j = 1; j <= upToMultiplier; j++) {
      row += `${i} x ${j} = ${i * j}\t`;
    }
    console.log(row);
  }
}

// Example: tables from 1 to 10, each up to 12
printMultiplicationTables(10, 12);

//Create a function that reverses an array
function reverseArray(arr) {
    return arr.reverse();
}
const myArray = [19, 18, 23, 56, 12];
console.log("Reversed Array:", reverseArray(myArray)); // Output: [12, 56, 23, 18, 19]

//Sort an array of strings in alphabetical order.
function sortStrings(arr) {
    return arr.sort();
}
const stringArray = ["Mango", "Pear", "Orange", "Oregano"];
console.log("Sorted Strings:", sortStrings(stringArray)); // Output: ["Mango", "Orange", "Oregano", "Pear"]

//Sort an array of numbers in descending order
function sortNumbersDescending(arr) {
    return arr.sort((a, b) => b - a);
}
const numberArray = [121, 1011, 149, 401];
console.log("Sorted Numbers (Descending):", sortNumbersDescending(numberArray)); // Output: [1011, 401, 149, 121]

//Return a Boolean if a number is divisible by 10.
function isDivisibleBy10(num) {
    return num % 10 === 0;
}
console.log("Is 2010 divisible by 10?", isDivisibleBy10(2010)); // Output: true
console.log("Is 323 divisible by 10?", isDivisibleBy10(323)); // Output: false

//Return the number of vowels in a string.
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
console.log("Number of vowels in 'To know you is to love you forever B':", countVowels("To know you is to love you forever B")); // Output: 13

//Create a function that filters out negative numbers.
function filterNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
}
const mixedArray = [-51, 14, 17, -10, -100, -11, 8, -1, 15];
console.log("Filtered Array (Non-Negative):", filterNegativeNumbers(mixedArray)); // Output: [14, 17, 8, 15]