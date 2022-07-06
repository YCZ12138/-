<!--
 * @Description: ShoppingCart
 * @Author: rendc
 * @Date: 2022-07-01 10:09:49
 * @LastEditors: rendc
 * @LastEditTime: 2022-07-06 11:50:09
-->
<template>
  <div class="shoppingCart">
    <van-nav-bar
      class="myNavBar"
      title="购物车"
      left-arrow
      @click-left="goBack()"
    >
    </van-nav-bar>
    <div class="mySpace46"></div>
    <div
      v-if="!user"
      class="notLogin"
    >
      <img
        alt=""
        draggable="false"
        src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/no_result/no_result_cart3.png"
        class="css-9pa8cd"
      >
      <div class="text">登录后才能看到商品哦~</div>
      <van-button
        plain
        round
        color="#666666"
        size="small"
        @click="toLogin()"
      >立即登录</van-button>
    </div>
    <div
      v-if="user"
      class="notLogin"
    >
      <img
        alt=""
        draggable="false"
        src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/no_result/no_result_cart3.png"
        class="css-9pa8cd"
      >
      <div class="text">目前没有添加商品哦~</div>
      <van-button
        plain
        round
        color="#666666"
        size="small"
        @click="goBack()"
      >去首页逛逛</van-button>
    </div>
    <div class="recommend">
      <div class="recommendTitle">
        <img
          src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/common/recheader_left.png"
          alt=""
        >
        <div class="text">为你推荐</div>
        <img
          src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/common/recheader_right.png"
          alt=""
        >
      </div>
      <div class="recommendShopping">
        <van-row>
          <van-col
            class="myCol"
            v-for="(item,index) in shoppingData"
            :key="index"
            :span="12"
          >
            <div class="card">
              <img
                :src="item.img"
                alt=""
              >
              <div class="title">{{item.title[1]}}</div>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const user = sessionStorage.getItem("user");

const goBack = () => {
  router.push("/");
};
const toLogin = () => {
  router.push("/login");
};
const shoppingData = [
  {
    id: 1,
    title: ["", "智能洗衣机"],
    tag: "必买榜",
    price: "2799.00",
    originPrice: "3299",
    img: "https://img.youpin.mi-img.com/shopmain/8ab6ae182b3c5394ac803188390df148.png@base@tag=imgScale&h=252&m=1&q=80&w=252",
    desc: ["8kg", "洗烘一体机", "上排水", "洗涤容量", "产品分类", "排水方式"],
    bottom: ["30天价保", 6214, 95],
  },
  {
    id: 2,
    title: ["小米自营", "直驱洗烘一体机"],
    tag: "",
    price: "2800.00",
    originPrice: "3811",
    img: "https://img.youpin.mi-img.com/shopmain/a57241dc6a82565c92f1dc78bbc3a792.png@base@tag=imgScale&h=252&m=1&q=80&w=252",
    desc: ["8kg", "洗烘一体机", "上排水", "洗涤容量", "产品分类", "排水方式"],
    bottom: ["30天价保", 6214, 95],
  },
  {
    id: 3,
    title: ["", "互联网洗烘一体机"],
    tag: "必买榜",
    price: "2799.00",
    originPrice: "3299",
    img: "https://img.youpin.mi-img.com/shopmain/8ab6ae182b3c5394ac803188390df148.png@base@tag=imgScale&h=252&m=1&q=80&w=252",
    desc: ["8kg", "洗烘一体机", "上排水", "洗涤容量", "产品分类", "排水方式"],
    bottom: ["30天价保", 6214, 95],
  },
  {
    id: 4,
    title: ["小米自营", "互联网洗烘一体机"],
    tag: "",
    price: "2800.00",
    originPrice: "3811",
    img: "https://img.youpin.mi-img.com/shopmain/a57241dc6a82565c92f1dc78bbc3a792.png@base@tag=imgScale&h=252&m=1&q=80&w=252",
    desc: ["8kg", "洗烘一体机", "上排水", "洗涤容量", "产品分类", "排水方式"],
    bottom: ["30天价保", 6214, 95],
  },
];
</script>

<style lang="less" scoped>
.shoppingCart {
  background-color: #f4f4f4;
  .notLogin {
    padding: 40px 0px;
    img {
      width: 90px;
    }
    .text {
      padding: 13px 0;
      font-size: 14px;
      color: rgb(102, 102, 102);
    }
    --van-button-small-height: 36px;
    --van-button-small-padding: 8px 14px;
    --van-button-small-font-size: 13px;
    --van-button-round-border-radius: 16px;
  }
  // 为你推荐
  .recommend {
    background-color: #f4f4f4;
    .recommendTitle {
      margin-bottom: 2rem;
      display: flex;
      justify-content: center;
      .text {
        color: rgb(51, 51, 51);
        font-size: 15px;
        font-weight: bold;
        padding-right: 8px;
        padding-left: 8px;
      }
      img {
        width: 18px;
      }
    }
    .recommendShopping {
      margin-right: 12px;
      .myCol {
        border-radius: 6px;
        margin-top: 5px;
        margin-bottom: 5px;
        .card {
          margin-left: 12px;
          height: 288px;
          background-color: #ffffff;
          border-radius: 6px;
          img {
            width: 171.5px;
          }
          .title {
            color: rgba(0, 0, 0, 0.8);
            font-size: 14px;
            line-height: 21px;
            text-align: left;
            padding: 0 6px;
          }
        }
      }
    }
  }
}
</style>