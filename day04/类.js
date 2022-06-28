/*
 * @Description: 类
 * @Author: rendc
 * @Date: 2022-06-28 11:01:18
 * @LastEditors: rendc
 * @LastEditTime: 2022-06-28 11:27:57
 */
// let Person = class PersonName {
//   identify () {
//     console.log(Person.name, PersonName.name);
//   }
// }
// let p = new Person();
// p.identify()
// console.log(Person.name);
// console.log(PersonName);

class Animal { }
class Person {
  constructor(name) {
    console.log("person");
    this.name = name || "Null!"
  }
  static sayHello () {
    console.log("hello");
  }
}
Person.sayHello()

class Vegetable {
  constructor() {
    this.color = "red"
  }
}
let a = new Animal();
let p = new Person();
let p1 = new Person;
let p2 = new Person("TOM");
console.log(p.name);
console.log(p1.name);
console.log(p2.name);
let v = new Vegetable();
console.log(v.color);