import '../styles/index.scss';

// template strings

// var name = `dsh;sd
// hsdf;lsadjf;l
// sdhf;lasdjfl
// asdfj;laskd`;
// console.log(name);

// var myName = 'Joney Talukdar';
// var age = 21;

// console.log('my name is ' + myName + 'and i am ' + age);
// console.log(
//   `My name is ${myName} and i am ${age} years old .i am ${
//     age < 18 ? 'adult' : ' not adult'
//   }`
// );

// console.log(myName.padStart(23));
// console.log(myName.padEnd(20, 'a'));
// console.log('s'.repeat(12));

// var vs let vs const

// if (true) {
//   let a = 12;
// }

// for (let i = 0; i < 10; i++) {}

// console.log(i);

// console.log(a);

// {
//   let i = 'i am let';
//   console.log(i);
// }

// // usign iife

// (function () {
//   var abc = 'ABC';
//   console.log(abc);
// })();

// arrow function

// const functionName = (a) => a * 12;
// const result = functionName(12);
// console.log(result);

// const functionTwo = (num, num2) => num * num2;
// const result2 = functionTwo(12, 12);
// console.log(result2);

// let add = function (a, b) {
//   return a + b;
// };

// let sumAll = (a, b) => a + b;
// const result = sumAll(12, 12);
// console.log(result);

// let square = (x) => x * x;
// const result2 = square(5);
// console.log(result2);

// function functionName() {
//   console.log(this);
// }

// functionName();

// function testme() {
//   console.log(this);
// }

// testme();

// let obj = {
//   name: 'joney talukdar',
//   print: function () {
//     setTimeout(() => {
//       console.log('hello', this.name);
//     }, 2000);
//   },
// };
// obj.print();

// default perameter

// function sqr(n = 12) {
//   return n * n;
// }

// let result = sqr();
// console.log(result);

function greet(name, message) {
  console.log(`${message} ${name}`);
}
greet('joneytalukdar', 'Hello !');
