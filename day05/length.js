/*
 * @Description: length
 * @Author: rendc
 * @Date: 2022-06-29 11:40:37
 * @LastEditors: rendc
 * @LastEditTime: 2022-06-29 11:47:05
 */
function add (num1, num2) {
  return num1 + num2;
}
function sayHello (name) {
  console.log(`${name} say hello`);
}
function sayHi () {
  console.log('hi');
}
console.log(add.length); // 2
console.log(sayHello.length); // 1
console.log(sayHi.length); // 0


console.log(sayHi.prototype);