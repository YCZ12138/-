/*
 * @Description: call&apply
 * @Author: rendc
 * @Date: 2022-06-29 11:48:23
 * @LastEditors: rendc
 * @LastEditTime: 2022-06-29 11:57:54
 */
function add (num1, num2) {
  return num1 + num2;
}
function callSum1 (num1, num2) {
  return add.apply(this, arguments)
}
function callSum2 (num1, num2) {
  return add.apply(this, [num1, num2])
}
function callSum3 (num1, num2) {
  return add.call(this, num1, num2)
}

console.log(callSum1(10, 10));
console.log(callSum2(10, 10));
console.log(callSum3(10, 10));

window.color = 'red';
let obj = {
  color: 'blue'
}
function sayColor () {
  console.log(this.color);
}
// sayColor()

sayColor.call(this)
sayColor.call(window)
sayColor.call(obj)