/*
 * @Description: 变量
 * @Author: rendc
 * @Date: 2022-06-25 09:27:33
 * @LastEditors: rendc
 * @LastEditTime: 2022-06-25 10:43:06
 */
// 引用值
let person = new Object();
person.name = "张三";
console.log(person.name);

// 原始值
let name = "张三";
name.age = 27;
console.log(name.age); // undefined

let num1 = 5;
let num2 = num1;
// console.log('🤡 CC - num1', num1)
// console.log('🤡 CC - num2', num2)
num2 = 6;
// console.log('🤡 CC - num1', num1)
// console.log('🤡 CC - num2', num2)
// option shift c  注释全部输出
// option + shift + u  取消注释全部输出
// option + shift + d  删除全部输出

let obj1 = new Object();
let obj2 = obj1;
obj1.name = "zhangsan";
obj2.name = "lisi";
// console.log('🤡 CC - obj1', obj1)
// console.log('🤡 CC - obj2', obj2)



function addTen (params) {
  params += 10;
  return params
}
let count = 20;
let result = addTen(count);
// console.log('🤡 CC - count', count)
// console.log('🤡 CC - result', result)


function setName (obj) {
  obj.name = "zhangsan";
  obj = new Object();
  obj.name = "lisi"
  console.log('🤡 CC - setName - obj.name', obj.name)
}

let person1 = new Object();
setName(person1);
// console.log('🤡 CC - person1', person1.name)

let s = "zhangsan",
  b = true,
  i = 22,
  u,
  n = null,
  o = new Object();
// console.log(typeof s);
// console.log(typeof b);
// console.log(typeof i);
// console.log(typeof u);
// console.log(typeof n);
// console.log(typeof o);

function add (num1, num2) {
  sum = num1 + num2; // 在严格模式下 这里会报错
  return sum;
}

let result1 = add(10, 20);
// console.log('🤡 CC - add - sum', sum)
// console.log('🤡 CC - result1', result1);

// name1 = "list";

console.log('🤡 CC - name1', name1)
var name1;
var name1;

let age = 1;
agr = 2;

const GENDER = "男"
gender = "女"
console.log('🤡 CC - gender', gender)


const OBJ = {}

OBJ.name = "lis"
console.log('🤡 CC - OBJ', OBJ)
