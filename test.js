// 'use strict';
// const fetcher = async() => {
//   try{
//     // const data = await fetch(`https://countries-api-836d.onrender.com/countries/name/india`)
//     // console.log(await data.json())
//     const myData = await fetch(`https://bsctest-node0.optswap.org/api/graphqlBatch`, {
//         method: "POST",
//         headers: {
//             "content-type": "application/json"
//         },
//         body: JSON.stringify({
//             "queries": [`{
//               optSwapOrders(
//                 where: {
//                   user: "0x65dab9fa22f6f4580017c8e716b59d7657f3f093",
//                   expiry: 1708704000,
//                   optionType_in: [0,1],
//                   optionStyle_in: [0],
//                   instruction_not: 0,
//                   contract: "0x64607E7a24d852BBF183010448661B5568d94324",
//                   lotSize: 10000,
//                   openLots_gt: 0
//                },
//               first: 20, skip: 0,
//               orderBy: blockNumber, orderDirection: asc
//             ) {
//                 orderBookIndex
//               }
//     }`]},)
//     })
//     const data = await myData.json()
//     console.log(data)
//   }catch(error){
//     console.log(error)
//   }
// }

// fetcher()

// // fetch(`https://countries-api-836d.onrender.com/countries/name/india`).then((s) => s.json()).then((s) => console.log(s))

// let array = [...Array(50).keys()]

// let outerArray = []
// let chunk = []
// array.forEach((e, i) => {
//   chunk.push(e)
//   if (chunk.length === 5){
//     outerArray.push(chunk)
//     chunk = []
//   }

// })

// console.log(outerArray)

//****************************hoisting in let and const***************************************
// a = 10;
// console.log(a)
// let a;
// hoisting in var
// b = 40;
// console.log(b);
// var b;

// note: hoisting works only for the variable declaration not for the varible initialized
// note: in case of var the initialized value is attached to the global windows object
// note: in let we can't redeclare the let but we can redeclare the var

// *************************closures**********************
// function along with its lexical scopes bundled together forms a closure
// when ever functions are returned from a fuction it remembers its lexical scope, i.e where was it present
// so whenever we return a function, not just the function is returned it returns a closure,
// function x() {
//   var a = 31;
//   y();
//   function y () {
//     console.log(a);
//   }

// }
// x();

// problem: print number from 1 -5 at the interval of 1s each

// const print = () => {
//   // for(let i = 1; i<=5; i++) { // let has the block scope so every time each it will point to the different location
//   //   setTimeout(() => { // where as var is a function scope so it every time it will point to the same reference
//   //     console.log(i)
//   //   }, i * 1000);
//   // }

//   function close (x) {
//     setTimeout(() => { // where as var is a function scope so it every time it will point to the same reference
//       console.log(x)
//     }, x * 1000);
//   }

//   for (var x = 1; x <= 5; x++) {
//     // setTimeout(() => { // where as var is a function scope so it every time it will point to the same reference
//     //   console.log(x)
//     // }, x * 1000);
//     close(x)
//   }
// }
// print();

// let i = 1

// const timer = setInterval(() => {
//   console.log(i++)
//   if (i > 5) {
//     clearInterval(timer)
//   }
// }, 1000)

//********************************Higher order fn******************************** */
// function that takes a function as its argument, or returns a function  is called higher order functions

//***********this keyword************ */
//The silly way to understand the “this” keyword is, whenever the function is invoked,
// check the object before the dot. The value of this . keyword will always be the object before the dot.

// const nomalPrint = () => {
//   console.log(this)
// }
// // print();

// const printThroughFunctionExpression = function () {
//   console.log(this)
// }
// // printThroughFunctionExpression()

// const obj = {
//   name: 'sagar',
//   normalPrint: nomalPrint,
//   print: printThroughFunctionExpression
// }

// console.log(obj.normalPrint(), obj.print())

// Currying is the technique where function with n arguments get trasformed to the n functions with one or fewer arguments

// function multiply (a,b) {
//   return a*b;
// }

// function currying (fn) {
//   return function (a) {
//     return function (b) {
//       return fn(a,b)
//     }
//   }
// }

// console.log(currying(multiply)(4)(3))

//***************memoize a add function in js*************** */

// function add (a, b) {
//   return a + b;
// }

// //memoize this function such that if the sum of two numbers is same and it has been calculated before it should not again
// const cache = {};
// const memoizedFun = (a , b) => {

//   if ((a+b) in cache) {
//     console.log("cached return")
//     return cache[a+b];
//   } else {
//     const sum = add(a, b);
//     cache[sum] = sum;
//     return sum;
//   }

// }

// console.log(memoizedFun(2, 5));// should calculate
// // console.log(cache)
// console.log(memoizedFun(5, 2));// should return from cache


// function memoizedAddTo256(){
//   let cache = {};

//   return function(num){
//     if(num in cache){
//       console.log("cached value");
//       return cache[num]
//     }
//     else{
//       cache[num] = num + 256;
//       return cache[num];
//     }
//   }
// }
// var memoizedFunc = memoizedAddTo256();

// console.log(memoizedFunc(20)); // Normal return
// console.log(memoizedFunc(20)); // Cached return

//*****************prototype chaining**************** */
// every thing in the js other than the primitive values are objects and here it is came from
// Function.__proto__.printValues = function () {
//   console.log("value are printed")
// }

// console.log(Function.__proto__, Function.prototype)

//***************************call, bind, apply*************** */
// so basically if we want to inherit method of another object and set its this to another differnt obj

// const obj = {
//   name: "sagar",
//   city: 'ludhiana',
//   printName: function () {
//     console.log("my name is " + this.name);
//   }
// }

// const obj2 = {
//   name: "aman"
// }

// // obj.printName.call(obj2);
// // the only difference b/w call, apply and bind is , bind return the function that can be invoked later
// const obj2Print = obj.printName.bind(obj2)
// obj2Print()

//*****************************promises**************************** */
// promise is an object that represents the eventual completion or failure of an asynchronous operation.
// const GIT_URL = `https://api.github.com/users/saurabh3917`;
// const promise = new Promise(async(resolve, reject) => {
//   const res = await fetch(GIT_URL);
//   if (res.ok) {
//     resolve(res.json())
//   } else {
//     reject("failed")
//   }
// })

// promise.then((res) => console.log(res)).catch((err) => console.log(err))

//*********************rest and spread operator******************** */
// const sum = (...args) => {
//   let sum = 0;
//   for (let i = 0; i< args.length; i++) {
//     sum += args[i];
//   }
//   return sum;
// }

// console.log(sum(1,3,4,5,6))
// console.log(sum(1,3))

//***********************************Temporal deadZone***********************************/
// x = 9;
// console.log(x)
// let x;

//**************************JS coding questions******************* */
// 1. Guess the output
// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }

//2.write the code to find if a given alphabet is vowel or not

// const print = (x) => {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   const index = vowels.findIndex((e) => e == x)
//   if (index !== -1) {
//     console.log(x + " is a vowel")
//   } else {
//     console.log(x + " is not a vowel")
//   }

// }

// print('i')

//3. check string is anagrams of each other
// var firstWord = "heart";
// var secondWord = "earth";

// console.log(isAnagram(firstWord, secondWord)); // true

// function isAnagram(one, two) {
//   //Change both words to lowercase for case insensitivity..
//   var a = one.toLowerCase();
//   var b = two.toLowerCase();

//   // Sort the strings, then combine the array to a string. Examine the outcomes.
//   a = a.split("").sort().join("");
//   b = b.split("").sort().join("");
//   console.log(a, b)

//   return a === b;
// }

//4. Guess the output
// let hero = {
//   powerLevel: 99,
//   getPower(){
//     return this.powerLevel;
//   }
// }

// let getPower = hero.getPower;

// let hero2 = {powerLevel:42};
// console.log(getPower()); // 99
// console.log(getPower.apply(hero2));//42

//5 Guess the output.

// const a = function(){
//   console.log(this);

//   const b = {
//     func1: function(){ // this this will represent b
//       console.log(this);
//     }
//   }

//   const c = { // here this will point to {}
//     func2: ()=>{
//       console.log(this);
//     }
//   }

//   b.func1(); // refrence of obj b
//   c.func2(); // {}
// }

// a();

//6 Guess the output.

// const b = {
//   name:"Vivek",
//   f: function(){
//     var self = this; // self will hold b obj
//     console.log(this.name); // vivek
//     (function(){
//       console.log(this.name, "from the iffi this");// undefined // NOTE: in iffE the this keyword always refers to the gobal obj
//       console.log(self.name, "from the iffi self"); // vivek
//     })();
//   }
// }
// b.f();

//7 Guess the output

// let x= {}, y = {name:"Ronny"},z = {name:"John"};
// x[y] = {name:"Vivek"}; // before setting the obj y as key in object x it is converted to string and hence becomes object and when again we are setting the 
// x[z] = {name:"Akki"}; // z obj it is simply reseting the value at x[object object]  to {name:"Akki"}
// console.log(x[y]);

// // Code 2:

// function runFunc(){
//   console.log("1" + 1); //11
//   console.log("A" - 1); // nan
//   console.log(2 + "-2" + "2"); // 2-22
//   console.log("Hello" - "World" + 78); //nan
//   console.log("Hello"+ "78"); // Hello78
// }
// runFunc();

// // Code 3:

// let a = 0;
// let b = false;
// console.log((a == b)); // true
// console.log((a === b)); //false

// Guess the output

// function func1(){
//   setTimeout(()=>{
//     console.log(x);
//     console.log(y);
//   },3000);

//   var x = 2;
//   let y = 12;
// }
// func1();

// Code 2:

// function func2(){
//   for(var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i),2000);
//   }
// }
// func2();

// Code 3:

// (function(){
//   setTimeout(()=> console.log(1),2000);
//   console.log(2); // 2
//   setTimeout(()=> console.log(3),0);
//   console.log(4); // 4
// })();


//**********************************OOPS in js****************************/
// NOTE : static functions can be called outside of the class using class name inside class we can call without using anything
// in oder to call non static functions outside of the class , we need to create an obj of it, and inside the class we need to attach this.funName
class Person {
  name
  job
  balance

  static printDetails(name, job) {
    console.log("my name is " + name + " and i am a " + job)
  }

  printBalances() {
    console.log("my name is " + this.name + " and i am a " + this.job)
  }

  constructor(name, job, balance) {
    this.name = name;
    this.job = job;
    this.balance = balance;
  }

}

const newPerson = new Person("rahul", "CEO", 13333)
// newPerson.printBalances()
// Person.printDetails("aman" , "accountant")

class Dog extends Person {
  type

  constructor(name, job, type) {
    super(name, job);
    this.type = type;
  }

  printBalances() {
    super.printBalances()
    console.log("and i am a " +this.type)
  }


}

// Dog.printDetails("tommy", "gaurd")
const newDog = new Dog("tommy", "gaurd", "animal")
newDog.printBalances()














