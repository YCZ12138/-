<!--
 * @Description: 主页
 * @Author: rendc
 * @Date: 2022-07-01 09:10:40
 * @LastEditors: rendc
 * @LastEditTime: 2022-07-04 09:35:25
-->
<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <NewWorld
      :data="data"
      @myAdd="myAddHandle"
      @myDel="myDelHandle"
      color="blue"
    />
    <!-- <new-world
      :data="data"
      color="red"
    /> -->
    <!-- <new-world :data="data" /> -->
    <!-- --{{ str }}-- -->
    <br>
    <!-- --{{ data }}-- -->
    <!-- <button @click="sayHello">你好</button> -->
    最底部
  </div>
</template>

<script>
// vue2
// import HelloWorld from "@/components/HelloWorld.vue";
// import NewWorld from "@/components/NewWorld.vue";

// export default {
//   name: "HomeView",
//   components: {
//     HelloWorld,
//     NewWorld,
//   },
//   setup() {
//     const str = ref("hello");
//     return {
//       str,
//     };
//   },
// };
</script>




<script setup>
// vue 3.2
import { ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import NewWorld from "@/components/NewWorld.vue";
// const str = ref("hello");
const data = ref();
data.value = [1, 2, 3, 4, 5];
// const sayHello = () => {
//   console.log("hello");
// };

// const myAddHandle = (p) => {
//   console.log("父组件的add", p);
// };
// const myDelHandle = (p) => {
//   console.log("父组件的del", p);
// };
// sayHello();
</script>
