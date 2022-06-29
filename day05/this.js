/*
 * @Description: this
 * @Author: rendc
 * @Date: 2022-06-29 10:49:13
 * @LastEditors: rendc
 * @LastEditTime: 2022-06-29 10:58:19
 */
window.color = "red";

let obj = {
  color: "blue",
}

function getColor () {
  console.log(this.color);
}

getColor() // red
obj.sayColor = getColor;
obj.sayColor()  // blue

let newGetColor = () => {
  console.log(that.color);
}
newGetColor() // red
obj.sayColor = newGetColor;
obj.sayColor()  // red