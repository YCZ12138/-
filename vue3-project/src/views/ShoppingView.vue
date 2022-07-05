<!--
 * @Description: Shopping
 * @Author: rendc
 * @Date: 2022-07-04 11:36:09
 * @LastEditors: rendc
 * @LastEditTime: 2022-07-05 10:22:26
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
    <div class="price">
      <div class="left">
        <div class="top"><span>￥</span> 2799</div>
        <div class="bottom">￥3299</div>
      </div>
      <div class="right">
        <img src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/product/icon_product_unfavor.png">
      </div>
    </div>
    <div class="title">
      <van-tag
        round
        type="warning"
      >小米自营</van-tag>
      米家互联网洗烘一体机 Pro 10kg 白色
    </div>
    <div class="desc">
      国标双A+级洗烘能力 <br>
      22种洗涤模式，智能投放洗涤剂 <br>
      支持小爱同学语音遥控，支持OTA在线智能升级 <br>
    </div>
    <div class="ad">
      【米家冰箱新品536L，预售到手价2199！】双变频一级能效，36分贝低噪运行！
      <a
        class="lib10-secret-dialog-url"
        href=""
      >即刻点击预售，绝对不容错过>>></a>
    </div>
    <div class="recommend">
      <img
        src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/product/ranklist_logo.png"
        alt=""
        srcset=""
      >
      <div class="text">
        入选洗烘一体机必买榜
      </div>
    </div>
    <img
      class="welfare"
      src="https://img.youpin.mi-img.com/youpinoper/dfae4d83b02472999fcd224ae1b41935.png?w=996&h=108"
      alt=""
    >
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
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

const { id, name } = JSON.parse(sessionStorage.getItem("shoppingPage"));
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
  .price {
    margin-top: 9px;
    .left {
      float: left;
      .top {
        span {
          font-size: 16px;
          margin-right: -0.5em;
        }
        color: rgb(153, 98, 26);
        font-size: 26px;
        font-weight: 500;
        margin-left: 12px;
        line-height: 26px;
      }
      .bottom {
        color: rgba(0, 0, 0, 0.4);
        font-size: 14px;
        text-align: left;
        margin-left: 12px;
        line-height: 12px;
        text-decoration-line: line-through;
      }
    }
    .right {
      float: right;
      img {
        width: 40px;
      }
    }
  }
  .title {
    display: inline-block;
    --van-tag-warning-color: #f09448;
    color: rgb(51, 51, 51);
    font-size: 16px;
    font-weight: 600;
    line-height: 25px;
    flex-direction: row;
    margin-top: 10px;
    // padding-left: 12px;
    padding-right: 5px;
  }
  .desc {
    margin-top: 10px;
    padding-left: 12px;
    padding-right: 5px;
    text-align: left;
    color: rgba(0, 0, 0, 0.8);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  }
  .ad {
    margin-top: 14px;
    padding-left: 12px;
    text-align: left;
    color: rgb(133, 133, 133);
    font-size: 13px;
  }
  .recommend {
    background-color: rgb(255, 248, 237);
    border-radius: 6px;
    height: 34px;
    margin-right: 12px;
    margin-left: 12px;
    margin-top: 13px;
    padding-left: 6px;
    padding-top: 16px;
    img {
      width: 24px;
      float: left;
    }
    .text {
      float: left;
      text-align: left;
      color: rgb(51, 51, 51);
      font-size: 14px;
      font-weight: 400;
    }
  }
  .welfare {
    width: 375px;
  }
}
</style>