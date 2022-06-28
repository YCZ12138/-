/*
 * @Description: 对象
 * @Author: rendc
 * @Date: 2022-06-28 09:19:39
 * @LastEditors: rendc
 * @LastEditTime: 2022-06-28 11:01:09
 */
"use strict"
let person = {
  name: "tom",
  age: 18,
  sayName () {
    console.log(this.name);
  }
};
// console.log('🤡 CC - person', person)
delete person.name
// console.log('🤡 CC - person', person)

let person1 = {}
Object.defineProperty(person1, "name", {
  // configurable: false,
  writable: true,
  value: "terry"
})
// console.log('🤡 CC - person1', person1.name)
// 非严格模式下 操作无效 严格模式下会报错
person1.name = "tom"
// delete person1.name
// console.log('🤡 CC - person1', person1.name)


let obj1 = { name: "tom", }
let obj2 = { age: "23", }
let obj3 = { gender: "男", }
let result = Object.assign(obj1, obj2, obj3, { like: "" }, { like: "🍊" })
// console.log('🤡 CC - obj1', obj1)
// console.log('🤡 CC - obj2', obj2)
// console.log('🤡 CC - result', result)

// 符合预期
// console.log('🤡 CC - ===', true === 1)
// console.log('🤡 CC - ===', {} === {})
// console.log('🤡 CC - ===', "2" === 2)
// 不符合预期
// console.log('🤡 CC - ===', +0 === -0)
// console.log('🤡 CC - ===', +0 === 0)
// console.log('🤡 CC - ===', -0 === 0)
// console.log('🤡 CC - ===', NaN === NaN)

// ES6新增了 Object.is()
// console.log('🤡 CC - Object.is', Object.is(true, 1))
// console.log('🤡 CC - Object.is', Object.is({}, {}))
// console.log('🤡 CC - Object.is', Object.is("2", 2))
// console.log('🤡 CC - Object.is', Object.is(+0, -0))
// console.log('🤡 CC - Object.is', Object.is(+0, 0))
// console.log('🤡 CC - Object.is', Object.is(-0, 0))
// console.log('🤡 CC - Object.is', Object.is(NaN, NaN))

// 属性值简写
let name = "jerry"
let obj4 = {
  name,
  age: 23,
  gender: "男",
  like: {
    one: "🍇",
    two: "🍊",
    three: "🍉",
  },
  sayName () {
    console.log(this.name);
  }
}
// console.log('🤡 CC - obj4', obj4)
obj4.sayName()

let objName = obj4.name
let objAge = obj4.age
let objGender = obj4.gender
// console.log('🤡 CC - objName', objName, objAge, objGender)

let { name: oName, age: oAge, gender: oGender, like: { one, two } } = obj4
// console.log('🤡 CC - name:oName, age:oAge, gender:oGender', oName, oAge, oGender, one, two)
let obj7 = {
  name,
  age: 23,
  gender: "男",
  like: {
    one: "🍇",
    two: "🍊",
    three: "🍉",
  },
  sayName () {
    console.log(this.name);
  }
}
function createPerson (name, age, gender, like) {
  let o = new Object();
  o.name = name;
  o.age = age;
  o.gender = gender;
  o.like = like;
  o.sayName = function () {
    console.log(this.name);
  }
  return o;
}

let p1 = createPerson("p1", 23, "男", [''])
let p2 = createPerson("p2", 24, "男", ['🍇'])
let p3 = createPerson("p2", 25, "男", ['🍍'])
console.log(p1.name);
p1.sayName();

function Person (name, age, gender, like) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.like = like;
  this.sayName = function () {
    console.log(this.name);
  }
}
function Dog (name, age, gender, like) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.like = like;
  this.sayName = function () {
    console.log(this.name);
  }
}
let p4 = new Person("p4", 24, "男", ['🍇'])
let p5 = new Person("p5", 25, "男", ['🍍'])
let d1 = new Dog("d1", 2, "男", ['🍍'])
// p5.sayName();
// console.log(p4.constructor == Person);
// console.log(p5.constructor == Person);
// console.log(d1.constructor == Person);
// console.log(d1.constructor == Dog);

function Person () { }
Person.prototype.name = "tom";
Person.prototype.age = "23";
Person.prototype.sayName = function () {
  console.log(this.name);
}
let p6 = new Person()
p6.sayName()


function Person (name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype = {
  constructor: Person,
  sayName: function () {
    console.log(this.name);
  }
}
let p7 = new Person("p7", 33)
p7.sayName()
