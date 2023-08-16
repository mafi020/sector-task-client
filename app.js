// const printReverse = (str, index = 0) => {
//   if (index === str.length) return;
//   console.log('OK');
//   printReverse(str, index + 1);
//   console.log('INDEX ===', index, str[index]);
//   return 1;
// };

// printReverse('hello');

// const factorial = (n) => {
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// };

// console.log(factorial(6));

// const combination = (arr) => {
//   if (arr.length === 0) return [[]];
//   const lastElement = arr.pop();
//   const comb = combination(arr);
//   const result = [];
//   comb.forEach((elem) => {
//     result.push([...elem, lastElement]);
//     console.log('RESULT =', elem, lastElement, result);
//   });

//   return [...comb, ...result];
// };

// console.log(combination([1, 2, 3]));

// const generate = (n) => {
//   if (n === 1) {
//     return [[1]];
//   }
//   const gen = generate(n - 1);
//   // console.log(n);
//   const res = [];
//   console.log('GEN', gen);
//   for (let i = 0; i < n; i++) {
//     res[i] = (gen[n - 2][i] || 0) + (gen[n - 2][i - 1] || 0);
//   }
//   gen.push(res);
//   console.log(gen);
//   return gen;
// };
// [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
// generate(3);
// generate(20);

// const divisorGame = (n, winner = true) => {
//   if (n === 1) {
//     return 1;
//   }
//   for (let i = Math.floor(n / 2); i < n && i > 0; i--) {
//     if (n % i === 0) {
//       n = n - divisorGame(n - i, !winner);
//     }
//   }
//   // console.log(winner);
//   return winner;
// };
// // true
// // console.log(divisorGame(2));
// // false
// console.log(divisorGame(3));

// const divisorGame = (n) => {
//   //   if (n in memo) return memo[n];
//   if (n === 1) return 0;
//   for (let i = Math.floor(n / 2); i > 0; i--) {
//     if (n % i === 0) {
//       divisorGame(n - i);
//     }
//   }
//   return 'ans';
// };
// // true
// console.log(divisorGame(4));

// const fib = (n, memo = {}) => {
//   if (n in memo) return memo[n];
//   if (n === 0 || n === 1) return 1;
//   console.log(n, memo);
//   memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
//   // console.log(memo);
//   return memo[n];
// };
// const fib = (n) => {
//   if (n < 2) return n;
//   return fib(n - 1) + fib(n - 2);
// };

// console.log(fib(5));

// const minPathSum = function (grid, i = 0, j = 0) {
//   if (i === grid.length && j === grid[0].length)
//     return grid[grid.length - 1][grid[0].length - 1];

//   if (i === grid.length) return grid[i - 1][j];
//   if (j === grid[0].length) return grid[i][j - 1];
//   // if (i === grid.length || j === grid[0].length) return 0;
//   console.log(i, j, `grid[${i}][${j}]`, grid[i][j]);
//   return (
//     grid[i][j] +
//     Math.min(minPathSum(grid, i + 1, j), minPathSum(grid, i, j + 1))
//   );
// };
// // 7
// console.log(
//   minPathSum([
//     [1, 3, 1],
//     [1, 5, 1],
//     [4, 2, 1],
//   ])
// );

const map = new Map();

map.set('1', 1);
map.set('1', 3);

console.log('MAP ===', map);

// WHT-gsKY-Ym27-3qTiN
