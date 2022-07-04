<!--
 * @Description: 从分类页面点击进来的商品列表页
 * @Author: rendc
 * @Date: 2022-07-04 09:35:40
 * @LastEditors: rendc
 * @LastEditTime: 2022-07-04 11:45:19
-->
<template>
  <div class="type">
    <van-nav-bar
      class="myNavBar"
      :title="title"
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
    <div class="mySpace46"></div>
    <van-card
      class="myCard"
      v-for="item in myCardData"
      :key="item.id"
      :tag="item.tag"
      :price="item.price"
      :thumb="item.img"
      :origin-price="item.originPrice"
      @click="toShoppingPage(item)"
    >
      <template #title>
        <div class="myCardTitle">
          <van-tag
            type="warning"
            size="medium"
            v-if="item.title[0]"
          >{{item.title[0]}}</van-tag>{{item.title[1]}}
        </div>
      </template>
      <template #desc>
        <van-row
          class="myRowTop"
          style="text-align:center;color:#333333;"
        >
          <van-col span="8">{{item.desc[0]}}</van-col>
          <van-col span="8">{{item.desc[1]}}</van-col>
          <van-col span="8">{{item.desc[2]}}</van-col>
        </van-row>
        <van-row
          class="myRowBottom"
          style="text-align:center;color:#888888;"
        >
          <van-col span="8">{{item.desc[3]}}</van-col>
          <van-col span="8">{{item.desc[4]}}</van-col>
          <van-col span="8">{{item.desc[5]}}</van-col>
        </van-row>
      </template>
      <template #bottom>
        <div>
          <van-tag
            plain
            type="primary"
            size="medium"
          >{{item.bottom[0]}}</van-tag>
          <br>
          <br>
          <div style="color:#888888;">
            {{item.bottom[1]}}条评论|{{item.bottom[2]}}%好评
          </div>
        </div>
      </template>

    </van-card>
  </div>
</template>
<script setup>
// import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
// eslint-disable-next-line no-unused-vars
import { NavBar, Card } from "vant";
import "vant/es/toast/style";

const route = useRoute();
const router = useRouter();
const { title } = route.params;
const toSearchPage = () => {
  console.log("🤡 CC - toSearchPage - toSearchPage", "toSearchPage");
};
const toHome = () => {
  router.push("/");
  // history.go(-1);
  // history.back();
};
const myCardData = [
  {
    id: 1,
    title: ["", "米家互联网洗烘一体机Pro 10kg 智能洗衣机"],
    tag: "必买榜",
    price: "2799.00",
    originPrice: "3299",
    img: "https://img.youpin.mi-img.com/shopmain/8ab6ae182b3c5394ac803188390df148.png@base@tag=imgScale&h=252&m=1&q=80&w=252",
    desc: ["8kg", "洗烘一体机", "上排水", "洗涤容量", "产品分类", "排水方式"],
    bottom: ["30天价保", 6214, 95],
  },
  {
    id: 2,
    title: ["小米自营", "米家直驱洗烘一体机10kg"],
    tag: "",
    price: "2800.00",
    originPrice: "3811",
    img: "https://img.youpin.mi-img.com/shopmain/a57241dc6a82565c92f1dc78bbc3a792.png@base@tag=imgScale&h=252&m=1&q=80&w=252",
    desc: ["8kg", "洗烘一体机", "上排水", "洗涤容量", "产品分类", "排水方式"],
    bottom: ["30天价保", 6214, 95],
  },
];
const toShoppingPage = (item) => {
  router.push({
    name: "shopping",
    params: { id: item.id, name: item.title[1] },
    // 一般要同步存到session中
  });
  // history.go(-1);
  // history.back();
};
</script>

<style lang="less" scoped>
// 自定义的空间分割div
.mySpace46 {
  width: 100%;
  height: 46px;
}
.myCard {
  text-align: left;
  --van-card-background-color: #ffffff;
  --van-card-price-color: rgb(248, 36, 0);
  --van-card-price-font-size: 16px;
  --van-tag-line-height: 13px;
  --van-tag-medium-padding: 1px 2px;
  --van-tag-warning-color: #ef8132;
  --van-card-thumb-size: 126px;
  .myCardTitle {
    font-size: 14px;
    color: #333333;
    line-height: 19px;
  }
  .myRowTop {
    margin-top: 8px;
  }
  .myRowBottom {
    margin-bottom: 8px;
  }
}
</style>