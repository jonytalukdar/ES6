import '../styles/index.scss';

// template strings

// var name = `dsh;sd
// hsdf;lsadjf;l
// sdhf;lasdjfl
// asdfj;laskd`;
// console.log(name);

var myName = 'Joney Talukdar';
var age = 21;

console.log('my name is ' + myName + 'and i am ' + age);
console.log(
  `My name is ${myName} and i am ${age} years old .i am ${
    age < 18 ? 'adult' : ' not adult'
  }`
);

console.log(myName.padStart(23));
console.log(myName.padEnd(20, 'a'));
console.log('s'.repeat(12));
