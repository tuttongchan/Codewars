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

// ------------


