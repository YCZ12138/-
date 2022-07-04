<!--
 * @Description: Shopping
 * @Author: rendc
 * @Date: 2022-07-04 11:36:09
 * @LastEditors: rendc
 * @LastEditTime: 2022-07-04 11:57:49
-->

<template>
  <div class="shopping">
    <van-nav-bar
      class="myNavBar"
      :title="name"
      left-arrow
      @click-left="toHome()"
    >
      <template #right>
        <van-icon
          class="myNavBarIcon"
          name="search"
          @click="toSearchPage()"
        />
      </template>
    </van-nav-bar>
    <div>
      <van-swipe
        class="mySwipe"
        :autoplay="2000"
      >
        <van-swipe-item
          v-for="image in images"
          :key="image"
        >
          <img :src="image" />
        </van-swipe-item>
        <template #indicator="{ active, total }">
          <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
        </template>
      </van-swipe>
    </div>
    <van-action-bar>
      <van-action-bar-icon
        icon="chat-o"
        text="小米"
        @click="onClickIcon"
      />
      <van-action-bar-icon
        icon="cart-o"
        text="购物车"
        @click="onClickIcon"
      />
      <van-action-bar-button
        type="warning"
        text="加入购物车"
      />
      <van-action-bar-button
        type="danger"
        text="立即购买"
      />
    </van-action-bar>
  </div>
</template>
<script setup>
// import { ref } from "vue";
import { useRoute } from "vue-router";
import {
  // eslint-disable-next-line no-unused-vars
  NavBar,
  Toast,
  // eslint-disable-next-line no-unused-vars
  ActionBar,
  // eslint-disable-next-line no-unused-vars
  ActionBarIcon,
  // eslint-disable-next-line no-unused-vars
  ActionBarButton,
  // eslint-disable-next-line no-unused-vars
  Swipe,
  // eslint-disable-next-line no-unused-vars
  SwipeItemSwipe,
  // eslint-disable-next-line no-unused-vars
  SwipeItem,
} from "vant";
import "vant/es/toast/style";

const route = useRoute();
const { id, name } = route.params;
const images = [
  "https://img.youpin.mi-img.com/shopmain/4e6beed96e2bad875569f6665c427ba2.jpg?w=1080&h=1080",
  "https://img.youpin.mi-img.com/shopmain/dc60c5e4e119381cb3872ba1686eee77.jpg?w=1080&h=1080",
  "https://img.youpin.mi-img.com/shopmain/2ad7e84e0368de1f48d1cb2482c72b15.jpg?w=1080&h=1080",
  "https://img.youpin.mi-img.com/shopmain/6f077ebc69b7dcd7dc4cb55878265b81.jpg?w=1080&h=1080",
];
const onClickIcon = () => Toast("点击图标");
// const onClickButton = () => Toast("点击按钮");
const toSearchPage = () => {
  console.log("🤡 CC - id", id);
  console.log("🤡 CC - toSearchPage - toSearchPage", "toSearchPage");
};
const toHome = () => {
  history.go(-1);
  // history.back();
};
</script>

<style lang="less" scoped>
.shopping {
  .mySwipe {
    width: 375px;
    height: 375px;
    .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      border-radius: 12px;
      color: #ffffff;
      background: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>