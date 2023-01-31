// -------- callback --------

// function myFunc() {
//   return 5;
// }

// // myFunc();

// const myTwo = (arg) => {
//   return arg();
// }

// console.log(myTwo(myFunc));

// -------- forEach --------

// const myArray = [1, 2, 3, 4, 5, 6, 78, 34, 21];
// const myArray = ["hei", "på", "deg"];

// -------- for-løkke med break og continue
// for (let i = 0; i < myArray.length; i++) {

//   if (i === 2) continue;
//   if (myArray[i] === 78) break;
//   console.log(i, myArray[i]);
// }

// -------- forEach med named callback
// const myCallback = (ele, i, arr) => {
//   console.log(i, ele, arr)
// }

// myArray.forEach(myCallback);

// -------- forEach med anonym callback
// myArray.forEach((ele, i, arr) => {
//   console.log(i, ele, arr)
// });


// -------- Eksempel på hvordan er forEach er implementert
// function forEach(arr, myCallback) {
//   for (let i = 0; i < arr.length; i++) {
//     myCallback(arr[i], i);
//   }
// }

// forEach(myArray);

// -------- setTimeout --------


const time = 200;



// setTimeout(() => {
//   console.log(5);
// }, time);

// console.log(7);


// -------- setInterval ---------
// let counter = 0;
// let myInterval;

// function funcInterval() {
//   myInterval = setInterval(() => {
//     console.log(counter);
//     counter++;

//     if (counter === 12) {
//       clearInterval(myInterval);
//     }
//   }, time);
// }

// funcInterval();

// setTimeout(funcInterval, 5000);


