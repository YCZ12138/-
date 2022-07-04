<!--
 * @Description: index
 * @Author: rendc
 * @Date: 2022-07-04 09:53:05
 * @LastEditors: rendc
 * @LastEditTime: 2022-07-04 09:55:12
-->
<template>
  <div class="main">
    <Home v-if="active === 'home'" />
    <Sort v-if="active === 'search'" />
    <ShoppingCart v-if="active === 'orders'" />
    <My v-if="active === 'my'" />
  </div>
  <van-tabbar
    v-model="active"
    @change="onChange"
    active-color="#d8b362"
  >
    <van-tabbar-item
      name="home"
      icon="home-o"
    >首页</van-tabbar-item>
    <van-tabbar-item
      name="search"
      icon="records"
    >分类</van-tabbar-item>
    <van-tabbar-item
      name="orders"
      icon="shopping-cart-o"
    >购物车</van-tabbar-item>
    <van-tabbar-item
      name="my"
      icon="user-o"
    >个人</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref } from "vue";
// eslint-disable-next-line no-unused-vars
import { Tabbar, TabbarItem } from "vant";
import Home from "./HomeView.vue";
import Sort from "./SortView.vue";
import ShoppingCart from "./ShoppingCartView.vue";
import My from "./MyView.vue";
// import Type from "./TypeView.vue";

const active = ref("search");
const onChange = (name) => {
  console.log("🤡 CC - onChange - name", name);
};
</script>

<style lang="less">
.main {
  height: calc(100vh - 52px);
  overflow-y: auto;
}
</style>