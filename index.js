// 1-masala
// const numbers = [1, 2, 3, 4];
// numbers.forEach(function (element, index, arr) {
//   console.log(element * 2);
// });

//2-masala
// const words = ["apple", "banana", "cherry"];
// words.forEach(function (element, index, arr) {
//   console.log(element.toUpperCase);
// });

//3-masala
// const numbers = [10, 20, 30, 40];
// numbers.forEach(function (element, index, arr) {
//   console.log(element + 5);
// });

// 4 - masala;
// const students = [
//   { name: "Ali", grade: 85 },
//   { name: "Vali", grade: 92 },
//   { name: "Hasan", grade: 78 },
// ];
// students.forEach(function (element, index, arr) {
//   console.log(arr);
// });

// Map metodiga oid masalalar
//1-masala
// const numbers = [1, 2, 3, 4];
// let result = numbers.map(function (value) {
//   return value * 2;
// });
// console.log(result);

//2-masala
// const words = ["apple", "banana", "cherry"];
// let result = words.map(function (value, element) {
//   return element.toUpperCase;
// });
// console.log(result);

// 3-masala
// const numbers = [10, 20, 30, 40];
// numbers.map(function (value) {
//   console.log(value + 5);
// });

//4-masala
// const students = [
//   { name: "Ali", grade: 85 },
//   { name: "Vali", grade: 92 },
//   { name: "Hasan", grade: 78 },
// ];
// let result = students.map(function (value) {
//   return value + 10;
// });
// console.log(result);

//filter metodiga oid masalalar

//1-masala
// const numbers = [1, 2, 3, 4, 5, 6];
// let res = numbers.filter(function (value) {
//   return value % 2 == 0;
// });
// console.log(res);

//2-masala
// const words = ["apple", "banana", "cherry", "date"];
// let res = words.filter(function (value, element) {
//   return value <.length(5);
// });
// console.log(res);

//3-masala
// const ages = [12, 17, 18, 19, 21];
// let res = ages.filter(function (value) {
//   return value > 18;
// });
// console.log(res);

//4-masala
const students = [
  { name: "Ali", grade: 85 },
  { name: "Vali", grade: 72 },
  { name: "Hasan", grade: 90 },
  { name: "Olim", grade: 77 },
];
let res = students.filter(function (value) {
  return value > 80;
});
console.log(res);

// find metodiga oid masalalar
