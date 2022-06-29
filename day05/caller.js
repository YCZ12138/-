/*
 * @Description: caller
 * @Author: rendc
 * @Date: 2022-06-29 11:31:02
 * @LastEditors: rendc
 * @LastEditTime: 2022-06-29 11:37:35
 */
function outer () {
  inner();
}
function inner () {
  console.log(inner.caller);
  console.log(arguments.callee.caller);
}
// outer();


function test () {
  console.log(new.target);
  if (!new.target) {
    console.log();
  } else {
    console.log("使用new关键字调用");
  }
}

new test();
// test()
