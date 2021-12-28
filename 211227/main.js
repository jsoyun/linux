//변수 선언방식

//var

// var name = 1;
// console.log(name);
// var name = 2;
// console.log(name);

//let

// let name = "bathingape";
// console.log(name); // bathingape

// let name = "javascript";
// console.log(name);
// Uncaught SyntaxError: Identifier 'name' has already been declared

// let name = "react";
// console.log(name); //react

// name = "1";

// console.log(name); //react

// // var kmj = "kkkk";
// console.log(kmj); // output: undefined
// var kmj = "kkkk";

// // let ka = "aaaa";
// console.log(ka); // output: undefined
// let ka = "aaa";
// 함수 참조
console.dir(add); // output: f add(x, y)
console.dir(sub); // output: undefined

// 함수 호출
console.log(add(2, 5)); // output: 7
console.log(sub(2, 5)); // output: Uncaught TypeError: sub is not a function

// 함수 선언문
function add(x, y) {
  return x + y;
}

// 함수 표현식
var sub = function (x, y) {
  return x + y;
};
