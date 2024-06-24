// 1-masala
// const numbers = [1, 2, 3, 4];
// numbers.forEach(function (element, index, arr) {
//   console.log(element * 2);
// });

//2-masala
// const words = ["apple", "banana", "cherry"];
// words.forEach(function (element, index, arr) {
//   console.log(element.toUpperCase());
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
//   return value.toUpperCase();
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
//   return value.grade + 10;
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
// const students = [
//   { name: "Ali", grade: 85 },
//   { name: "Vali", grade: 72 },
//   { name: "Hasan", grade: 90 },
//   { name: "Olim", grade: 77 },
// ];
// let res = students.filter(function (value) {
//   return value.grade > 80;
// });
// console.log(res);

// find metodiga oid masalalar
//1-masala
// const numbers = [4, 9, 11, 2, 18];
// let result = numbers.find(function (value, index, ar) {
//   return value > 10;
// });
// console.log(result);

//2-masala
// const students = [
//   { name: "Ali", grade: 80 },
//   { name: "Vali", grade: 90 },
//   { name: "Hasan", grade: 78 },
//   { name: "Olim", grade: 85 },
// ];
// let res = students.find(function (value, index, arr) {
//   return value.grade > 85;
// });
// console.log(res);

//some/every metodiga oid masalalar

//1-masala
// const numbers = [-1, -2, 3, -4];
// let res = numbers.some(function (value) {
//   return value > 0;
// });

// console.log(res);

//2-masala
// const words = ["cat", "dog", "elephant"];
// let res = words.some(function (value) {
//   return value.length > 5;
// });
// console.log(res);

//3-masala
// const numbers = [1, 2, 3, 4];
// let res = numbers.every(function (value) {
//   return value > 0;
// });
// console.log(res);

//4-masala
// const students = [
//   { name: "Ali", grade: 60 },
//   { name: "Vali", grade: 70 },
//   { name: "Hasan", grade: 80 },
// ];
// let res = students.every(function (value) {
//   return value.grade > 50;
// });
// console.log(res);

//String metodlariga oid masalalar

//1-masala
// const text = "Hello";
// console.log(text.charAt(3));

//2-masala
// const text = "Hello";
// console.log(text.charCodeAt(1));

//3-masala
// const text1 = "Hello";
// const text2 = "World";
// let text3 = text1.concat(text2);
// console.log(text3);

//4-masala
// const text = "Hello, world!";
// const res = text.includes("world");
// console.log(res);

//5-masala
// const text = "Hello, world!";
// let result = text.endsWith(" world");
// console.log(result);

//6-masala
// const text = "Hello, world!";
// let res = text.indexOf("world");
// console.log(res);

//7-masala
// const text = "Hello, world! Hello again!";
// let res = text.lastIndexOf("Hello");
// console.log(res);

//8-masala
// const text = "My phone number is 123-456-7890";
// let res = text.match();
// console.log(res);

//9-masala
// const text = "Hello";
// let res = text.repeat(3);
// console.log(res);

//10-masala
// const text = "Hello, world!";
// let res = text.replace("world", "everyone");
// console.log(res);

//11-masala
// const text = "Hello, world!";
// let res = text.search("world");
// console.log(res);

//12-masala
// const text = "Hello, world!";
// let res = text.slice(7, 12);
// console.log(res);

//13-masala
// const text = "Hello world!";
// let res = text.split(" ");
// console.log(res);

//14-masala
// const text = "Hello, world!";
// let res = text.startsWith("Hello");
// console.log(res);

//15-masala
// const text = "Hello, world!";
// let res = text.substr(7, 5);
// console.log(res);

//16-masala
// const text = "Hello, world!";
// let res = text.substring(7, 12);
// console.log(res);

//17-masala
// const text = "Hello, World!";
// let res = text.toLowerCase();
// console.log(res);

//18-masala

// const text = "Hello, World!";
// let res = text.toUpperCase();
// console.log(res);

//19-masala
// const text = "   Hello, world!";
// let res = text.trim();
// console.log(res);

//20-masala
const text = "   Hello, world!   ";
let res = text.trimStart().trimEnd();
console.log(res);
