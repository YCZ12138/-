<!--
 * @Description: 项目主入口
 * @Author: rendc
 * @Date: 2022-07-01 09:10:40
 * @LastEditors: rendc
 * @LastEditTime: 2022-07-03 09:28:26
-->
<template>
  <!-- <nav>
    <div>
      App
    </div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view /> -->
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
<script setup >
import { ref } from "vue";
// eslint-disable-next-line no-unused-vars
import { Tabbar, TabbarItem } from "vant";
import Home from "./views/HomeView.vue";
import Sort from "./views/SortView.vue";
import ShoppingCart from "./views/ShoppingCartView.vue";
import My from "./views/MyView.vue";

const active = ref("search");
const onChange = (name) => {
  console.log("🤡 CC - onChange - name", name);
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  height: calc(100vh - 52px);
  overflow-y: auto;
}

nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
