/*
 * @Description: arguments
 * @Author: rendc
 * @Date: 2022-06-29 10:39:47
 * @LastEditors: rendc
 * @LastEditTime: 2022-06-29 10:43:24
 */
// 阶乘
// function factorial (num) {
//   if (num <= 1) {
//     return 1;
//   } else {
//     return num * factorial(num - 1)
//   }
// }
// console.log(factorial(5));

function factorial (num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * arguments.callee(num - 1)
  }
}
console.log(factorial(5));