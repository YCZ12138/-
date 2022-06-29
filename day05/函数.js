/*
 * @Description: 函数
 * @Author: rendc
 * @Date: 2022-06-29 09:12:41
 * @LastEditors: rendc
 * @LastEditTime: 2022-06-29 11:43:55
 */
function add9 (num1, num2 = 10) {
  console.log(arguments);
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments.length);
  // arguments.callee;
  console.log(num1 + num2);
}
add(1, 2);
add9(1);
let myAdd = add;
// myAdd(1, 2);
let result = (x) => { return 3 * x; };
let result2 = (x) => 3 * x;
function result3 () { }
// console.log('🤡 CC - result2', result2.name)
// console.log('🤡 CC - add', add.name)
// console.log('🤡 CC - myAdd', myAdd.name)
// console.log('🤡 CC - result3', result3.name)
// console.log('🤡 CC - result4', new Function().name) anonymous
// 正常情况
function add (num1 = 10, num2 = num1) {
  console.log(num1 + num2);
}
// add();
// 不正常情况
function add (num1 = num2, num2 = 11) {
  console.log(num1 + num2);
}
// add();

// 扩展参数
let arr = [1, 2, 3, 4];
function getSum () {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum
}
// console.log(getSum(0, ...arr, 5, ...[6, 7, 8]));

// 不报错
// console.log(addTest(5, 6));
function addTest (num1, num2 = 10) {
  return num1 + num2
}
// 会报错
// console.log(addTest2(5, 6));
let addTest2 = function (num1, num2) {
  return num1 + num2
}

// 函数作为参数
function addTest (num1, num2 = 10) {
  return num1 + num2
}
function newAddFunction (someFunction, argument) {
  return someFunction(argument)
}
let result5 = newAddFunction(addTest, 5)
console.log('🤡 CC - result5', result5)

