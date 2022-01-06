// ------------ A Wolf in Sheep's Clothing ------------
// function warnTheSheep(queue) {
//   const position = queue.reverse().indexOf('wolf');
//   console.log(position)
//   return position === 0
//     ? 'Pls go away and stop eating my sheep'
//     : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
// }

// console.log(warnTheSheep(['sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep']))

// ------------ Total Amount of Points (NOT DONE) ------------

// function points(games) {
//   let numbers = [];
//   let x;
//   let y;

//   for (let i = 0; i < games.length; i++) {
//     const newArr = games[i].split(':');

//     console.log(newArr);

//     // for (let i = 0; i < newArr.length; i++) {
//     //   +newArr[0];
//     //   +newArr[1];

//     //   if (+newArr[0] > +newArr[1]) {
//     //     return 3;
//     //   } else if (+newArr[0] < +newArr[1]) {
//     //     return 0;
//     //   } else if (+newArr[0] == +newArr[1]) {
//     //     return 1;
//     //   }
//     // }
//   }

//   console.log(numbers);
// }

// console.log(
//   points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'])
// );

// ------------ Student's Final Grade (NOT DONE) ------------

// function finalGrade(exam, projects) {
//   if (exam > 90 || projects > 10) {
//     return 100;
//   } else if (exam > 75 || projects > 5) {
//     return 90;
//   } else if (exam > 50 || projects > 2) {
//     return 75;
//   } else {
//     return 0;
//   }
// }

// console.log(finalGrade(100, 12))
// console.log(finalGrade(85, 5))
// console.log(finalGrade(0, 2))

// ------------ Recursion Example (NOT CODEWARS) ------------

// function printChildrenRecursive(t) {
//   if (t.children.length === 0) {
//     return;
//   }
//   t.children.forEach((child) => {
//     console.log(child.name);
//     printChildrenRecursive(child);
//   });
// }

// const tree = {
//   name: 'John',
//   children: [
//     {
//       name: 'Jim',
//       children: [],
//     },
//     {
//       name: 'Zoe',
//       children: [
//         { name: 'Kyle', children: [] },
//         { name: 'Sophia', children: [] },
//       ],
//     },
//   ],
// };

// console.log(printChildrenRecursive(tree));

// ------------ Sum of Differences ------------

// For example:

// sumOfDifferences([2, 1, 10])
// Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// function sumOfDifferences(arr) {}

// --- Solution 1 ---
// function sumOfDifferences(arr) {
//   return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
// }

// --- Solution 2 ---
// const sumOfDifferences = (arr) =>
//   arr
//     .sort((a, b) => b - a)
//     .map((a, i) => a - arr[i + 1] || 0)
//     .reduce((a, b) => a + b, 0);

// console.log(sumOfDifferences([2, 1, 10]));

// ------------ Sliding Puzzle Solver ------------

// function closestPower(n) {
//   if (n <= 4) return 4;
//   const res = [];

//   for (let i = 2; i <= Math.ceil(Math.log(n) / Math.log(2)); i++) {
//     const b = n ** (1 / i);
//     res.push(Math.floor(b) ** i);
//     res.push(Math.ceil(b) ** i);
//   }
//   return res
//     .sort((a, b) => a - b)
//     .reduce((a, c) => (Math.abs(n - c) < Math.abs(n - a) ? c : a));
// }

// console.log(closestPower(0));
// console.log(closestPower(9));
// console.log(closestPower(30));
// console.log(closestPower(34));
// console.log(closestPower(56.5));
// console.log(closestPower(123321456654));

// assert.deepEqual(closestPower(0), 4, 'Remember: the lowest perfect power is 4');
// assert.deepEqual(closestPower(9), 9, 'Should get exact powers');
// assert.deepEqual(closestPower(30), 32, 'Should work for powers greater than 2');
// assert.deepEqual(
//   closestPower(34),
//   32,
//   'If you got 36, make sure you return the lowest of the two closest powers'
// );
// assert.deepEqual(
//   closestPower(56.5),
//   49,
//   'If you got 64, make sure you return the lowest of the two closest powers'
// );
// assert.deepEqual(
//   closestPower(123321456654),
//   123321773584,
//   'Make sure it works for bigger numbers too'
// );

// ------------ Pillars (NOT DONE) ------------

// function pillars(num_pill, dist, width) {
//   if (num_pill > 1) {

//   } else if (dist >= 10 && dist <= 30) {

//   } else if (width >= 10 && width <= 50) {

//   }
// }

// ------------ If you can't sleep, just count sheep!! ------------

// const countSheep = function (num) {
//   let arr = [];

//   for (let i = num; i > 0; i--) {
//     const sheepStatement = `${i} sheep...`;
//     arr.push(sheepStatement);
//   }

//   return arr.reverse().join('');
// };

// countSheep(3);

// ------------ Cat years, Dog years ------------

// var humanYearsCatYearsDogYears = function (humanYears) {
//   let finalArr = [];
//   let catArr = [];
//   let dogArr = [];
//   let catTotal = 0;
//   let dogTotal = 0;
//   const firstYear = 15;
//   const secondYear = 9;

//   finalArr.push(humanYears);

//   for (let i = humanYears; i > 0; i--) {
//     catArr.push(i);
//   }

//   if (catArr[0]) {
//     catTotal += firstYear;
//   }

//   if (catArr[1]) {
//     catTotal += secondYear;
//   }

//   if (catArr.length > 2) {
//     const catArrReduced = parseInt(catArr) - 2;
//     const catExtraSum = catArrReduced * 4;
//     catTotal += catExtraSum;
//     finalArr.push(catTotal);
//   }

//   for (let i = humanYears; i > 0; i--) {
//     dogArr.push(i);
//   }

//   if (dogArr[0]) {
//     dogTotal += firstYear;
//   }

//   if (dogArr[1]) {
//     dogTotal += secondYear;
//   }

//   if (dogArr.length > 2) {
//     const dogArrReduced = parseInt(dogArr) - 2;
//     const dogExtraSum = dogArrReduced * 5;
//     dogTotal += dogExtraSum;
//     finalArr.push(dogTotal);
//   }

//   console.log(dogTotal)
//   console.log(catTotal);
//   console.log(finalArr);
// };

// humanYearsCatYearsDogYears(4);

// ------------ The Feast of Many Beasts ------------

// function feast(beast, dish) {
//   let beastArr = [];
//   let dishArr = [];
//   let newArr = [];

//   for (let i = 0; i < beast.length; i++) {
//     beastArr.push(beast[i]);
//   }

//   for (let i = 0; i < dish.length; i++) {
//     dishArr.push(dish[i]);
//   }

//   newArr.push(beastArr.shift());
//   newArr.push(beastArr.pop());

//   newArr.push(dishArr.shift());
//   newArr.push(dishArr.pop());

//   if (newArr[0] == newArr[2] && newArr[1] == newArr[3]) {
//     return true;
//   } else {
//     return false;
//   }
// }

// -- Highest Recommended Solution --
// function feast(beast, dish) {
//   return (
//     beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
//   );
// }

// console.log(feast('great blue heron', 'garlic naan'));
// console.log(feast('chickadee', 'chocolate cake'));
// console.log(feast('brown bear', 'bear claw'));

// ------------ CSV representation of array (NOT DONE) ------------

// function toCsvText(array) {
//   let firstArr = [];
//   let secondArr = [];

//   let firstString;
//   let lastString;

//   let poppedNum;

//   lastString = array[array.length - 1].toString();

//   array.map((item, i) => {
//     if (i < array.length - 1) {
//       poppedNum = item.pop() + '\n';
//       firstArr.push(poppedNum);
//     }
//   });

//   array.map((item, i) => {
//     if (i > 0) {
//       firstString = item.shift().toString();
//       secondArr.push(firstString);
//     }
//   });

//   const sir = firstArr.concat(secondArr);

//   sir.map((item, i) => {
//     if (i > array.length / 2) {
//       console.log(item);
//     }

//     if (i < array.length / 2 + 1) {
//       console.log(item);
//     }
//   });

//   console.log(firstArr);
//   console.log(sir);
// }

// toCsvText([
//   [0, 1, 2, 3, 45],
//   [10, 11, 12, 13, 14],
//   [20, 21, 22, 23, 24],
//   [30, 31, 32, 33, 34],
// ]);
//   '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34';

// ------------ For Twins: 1. Types (NOT DONE) ------------

// function typeValidation(variable, type) {
//   if (typeof variable === 'number' && type === 'number') {
//     return true;
//   } else if (typeof variable === 'string') {
//     return false;
//   }
// }

// console.log(typeValidation(42, 'number'))

// ------------ Get the Middle Character (DONE) ------------

// function getMiddle(s) {
//   if (s.length % 2 === 0) {
//     const even = s.length / 2;
//     const second = even - 1;
//     return s[second] + s[even];
//   } else if (s.length % 2 !== 0) {
//     const odd = s.length / 2;
//     const rounded = Math.floor(odd);
//     return s[rounded]
//   }
// }

// getMiddle('testing')
// getMiddle('middle');

// ------------ Vowel Count (DONE) ------------

// function getCount(str) {
//   let vowelsCount = 0;
//   let arr = [];

//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] == 'a' ||
//       str[i] == 'e' ||
//       str[i] == 'i' ||
//       str[i] == 'o' ||
//       str[i] == 'u'
//     ) {
//       arr.push(1);
//     }
//   }
//   vowelsCount = arr.length;

//   return vowelsCount;
// }

// getCount('abracadabra');
// console.log(getCount("abracadabra"))

// ------------ Vowel Count (DONE) ------------

// function bmi(weight, height) {
//   answer = weight / height ** 2;

//   if (answer <= 18.5) {
//     return 'Underweight';
//   } else if (answer <= 25) {
//     return 'Normal';
//   } else if (answer <= 30) {
//     return 'Overweight';
//   } else if (answer > 30) {
//     return 'Obese';
//   }
// }

// // bmi(80, 1.8);
// console.log(bmi(80, 1.80))

// ------------ Stop gninnipS My sdroW! ------------

// function spinWords(string) {
//   let arr = [];
//   const stringArr = string.split(' ');

//   const hello = stringArr.filter((item, i) => {
//     if (item.length >= 5) {
//       for (let i = 0; i < item.length; i++) {
//         console.log(item[i]);
//       }
//     }
//   });
// }

// --- Most Popular Solution ---
// function spinWords(words) {
//   return words
//     .split(' ')
//     .map(function (word) {
//       return word.length > 4 ? word.split('').reverse().join('') : word;
//     })
//     .join(' ');
// }

// spinWords('Hey fellow warriors');
// console.log(spinWords('Hey fellow warriors'))

// ------------ Twice as old (DONE) ------------

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   const sonYearsTwice = sonYearsOld * 2;

//   if (dadYearsOld > sonYearsTwice) {
//     return dadYearsOld - sonYearsTwice;
//   } else if (dadYearsOld < sonYearsTwice) {
//     const newYears = sonYearsTwice - dadYearsOld;
//     return newYears;
//   } else if (dadYearsOld % sonYearsTwice == 0) {
//     return 0;
//   } else if (sonYearsOld == 0) {
//     return dadYearsOld;
//   }
// }

// console.log(twiceAsOld(36, 7));
// console.log(twiceAsOld(55, 30));
// console.log(twiceAsOld(42, 21));
// console.log(twiceAsOld(22, 1));
// console.log(twiceAsOld(29, 0));

// ------------ Define a card suit (DONE) ------------

// function defineSuit(card) {
//   return card.includes('♠')
//     ? 'spades'
//     : card.includes('♦')
//     ? 'diamonds'
//     : card.includes('♥')
//     ? 'hearts'
//     : card.includes('♣')
//     ? 'clubs'
//     : null;
// }

// console.log(defineSuit('3♣'));
// console.log(defineSuit('Q♠'));
// console.log(defineSuit('9♦'));
// console.log(defineSuit('J♥'));

// ------------ Vowel remover (NOT DONE) ------------
// function shortcut(string) {
//   let arr = [];
//   for (let i = 0; i < string.length; i++) {
//     arr.push(string[i]);
//   }
//   arr.map((item, i) => {
//     console.log(item);
//   });
// }

// function shortcut(string) {
//   if (string.includes('a')) {
//     return string.replace('a', '');
//   } else if (string.includes('e')) {
//     return string.replace('e', '');
//   } else if (string.includes('i')) {
//     return string.replace('i', '');
//   } else if (string.includes('o')) {
//     return string.replace('o', '');
//   } else if (string.includes('u')) {
//     return string.replace('u', '');
//   }
// }

// console.log(shortcut('hello'));
// console.log(shortcut('how are you today?'))
// console.log(shortcut('complain'))
// console.log(shortcut('never'))

// ------------ Highest and Lowest (DONE) ------------

// function highAndLow(numbers) {
//   let arrMin = [];
//   let arrMax = [];

//   const splitNumbers = numbers.split(' ');

//   splitNumbers.map((item) => {
//     arrMin.push(Number(item));
//     arrMax.push(Number(item));
//   });

//   const numMin = Math.min(...arrMin);
//   const numMax = Math.max(...arrMax);

//   const stringMin = numMin.toString();
//   const stringMax = numMax.toString();

//   return stringMax + ' ' + stringMin;
// }

// highAndLow('1 2 -3 4 5');
// highAndLow('1 9 3 4 -5');

// ------------ JavaScript Array Filter (DONE) ------------

// function getEvenNumbers(numbersArray) {
//   const filteredArr = numbersArray.filter((item) => {
//     const stringItem = item.toString();
//     const lastChar = stringItem.substr(-1);

//     return (
//       lastChar == 0 ||
//       lastChar == 2 ||
//       lastChar == 4 ||
//       lastChar == 6 ||
//       lastChar == 8
//     );
//   });

//   return filteredArr;
// }

// console.log(getEvenNumbers([1, 2, 3, 6, 8, 10]));
// console.log(getEvenNumbers([12, 14, 15]));
// console.log(getEvenNumbers([13, 15]));

// getEvenNumbers([1, 2, 3, 6, 8, 10]);
// getEvenNumbers([12, 14, 15]);
// getEvenNumbers([13, 15]);

// ------------ Is he gonna survive? (DONE) ------------

// function hero(bullets, dragons) {
//   const bulletsHalf = bullets / 2;

//   if (bulletsHalf >= dragons) {
//     return true;
//   } else if (bulletsHalf < dragons) {
//     return false;
//   }
// }

// console.log(hero(10, 5));
// console.log(hero(7, 4));
// console.log(hero(4, 5));

// ------------ Is he gonna survive? (DONE) ------------

// function checkTheBucket(bucket) {
//   if (bucket.includes('gold')) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkTheBucket(['stone', 'stone', 'stone', 'stone', 'stone']));
// console.log(checkTheBucket(['stone', 'stone', 'stone', 'stone', 'gold']));

// ------------ Create Phone Number (DONE) ------------

// function createPhoneNumber(numbers) {
//   const firstPart = numbers.splice(0, 3);
//   const secondPart = numbers.splice(0, 3);
//   const thirdPart = numbers;

//   const firstJoined = firstPart.join().replace(',', '').replace(',', '');
//   const secondJoined = secondPart.join().replace(',', '').replace(',', '');
//   const thirdJoined = thirdPart
//     .join()
//     .replace(',', '')
//     .replace(',', '')
//     .replace(',', '');

//   return `${'(' + firstJoined + ')'} ${secondJoined}-${thirdJoined}`;
// }

// -- Best Solution --
// function createPhoneNumber(numbers) {
//   var format = '(xxx) xxx-xxxx';

//   for (var i = 0; i < numbers.length; i++) {
//     format = format.replace('x', numbers[i]);
//   }

//   return format;
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// ------------ Find The Parity Outlier (DONE) ------------

// function findOutlier(integers) {
//   let arr = [];
//   let final;

//   for (let i = 0; i < integers.length; i++) {
//     const even = integers[i] % 2 == 0;
//     arr.push(even);
//   }
//   const filteredEven = arr.filter((item) => {
//     return item == true;
//   });
//   const filteredOdd = arr.filter((item) => {
//     return item == false;
//   });
//   const filteredIntegersOdd = integers.filter((item) => {
//     return item % 2 != 0;
//   });
//   const filteredIntegersEven = integers.filter((item) => {
//     return item % 2 == 0;
//   });

//   if (filteredEven.length > filteredOdd.length) {
//     filteredIntegersOdd.map((item) => {
//       final = item;
//     });
//     return final;
//   } else if (filteredEven.length < filteredOdd.length) {
//     filteredIntegersEven.map((item) => {
//       final = item;
//     });
//     return final;
//   }
// }

// console.log(findOutlier([1, 2, 3]));
// console.log(findOutlier([2, 6, 8, 10, 3]));

// ------------ Shortest Word (DONE) ------------

// function findShort(s) {
//   let arr = [];
//   const splitString = s.split(' ');

//   splitString.map((item) => {
//     arr.push(item.length);
//   });

//   return Math.min(...arr);
// }

// findShort('bitcoin take over the world maybe who knows perhaps');
// findShort('turns out random test cases are easier than writing out basic ones');
// findShort("Let's travel abroad shall we");

// ------------ Isograms (NOT DONE) ------------

// function isIsogram(str) {
//   const splitArr = str.split('');

//   splitArr.map((item) => {
//     console.log(item);
//   });
// }

// console.log(isIsogram('isogram'));
// console.log(isIsogram('aba'));

// isIsogram('isogram');
// isIsogram('aba');

// ------------ Convert boolean values to strings 'Yes' or 'No' (DONE) ------------

// function boolToWord(bool) {
//   if (bool === true) {
//     return 'Yes';
//   } else if (bool === false) {
//     return 'No';
//   }
// }

// boolToWord(true);
// boolToWord(false);

// ------------ Return Negative (DONE) ------------

// function makeNegative(num) {
//   return Math.abs(num) * -1;
// }

// console.log(makeNegative(42));

// ------------ Moving Zeros To The End (DONE) ------------

// const moveZeros = function (arr) {
//   const filterZeros = arr.filter((item) => {
//     return item === 0;
//   });
//   const filterNonZeros = arr.filter((item) => {
//     return item !== 0;
//   });
//   filterZeros.map((item) => {
//     filterNonZeros.push(item);
//   });
//   return filterNonZeros
// };

// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

// ------------ Moving Zeros To The End (UNLOCKED) ------------

// -- Best Solution #1 --
// function accum(s) {
//   return s
//     .split('')
//     .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
//     .join('-');
// }

// -- Best Solution #2 --
// function accum(s) {
//   return s
//     .split('')
//     .map((x, index) => x.toUpperCase() + Array(index + 1).join(x.toLowerCase()))
//     .join('-');
// }

// accum('ZpglnRxqenU');
// accum("NyffsGeyylB")

// ------------  ------------
