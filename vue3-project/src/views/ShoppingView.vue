<!--
 * @Description: Shopping
 * @Author: rendc
 * @Date: 2022-07-04 11:36:09
 * @LastEditors: rendc
 * @LastEditTime: 2022-07-07 11:43:55
-->

<template>
  <div class="shopping">
    <van-nav-bar
      class="myNavBar"
      :title="name"
      left-arrow
      @click-left="goBack()"
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
        <div class="top"><span>￥</span> {{price}}</div>
        <div class="bottom">{{originPrice}}</div>
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
      {{name}}
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
    <van-action-sheet
      class="mySheet"
      v-model:show="show"
    >
      <div class="content">
        <div class="top">
          <van-row>
            <van-col span="8"><img src="
            https://img.youpin.mi-img.com/shopmain/4e6beed96e2bad875569f6665c427ba2.jpg?w=1080&h=1080"></van-col>
            <van-col span="14">
              <div class="middle">
                <div class="price"><span>￥</span>{{price}}</div>
                <div class="selected">已选:白色 {{name}} x{{num}}</div>
              </div>
            </van-col>
            <van-col span="2"><img
                src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/common/close_circle_grey_new.png"
                alt=""
                class="close"
                @click="show = false"
              ></van-col>
          </van-row>
        </div>
        <div class="bottom">
          <div class="bottom_title">颜色</div>
          <div class="tag_button">
            <van-button
              plain
              color="rgb(153, 98, 26)"
              size="mini"
              type="primary"
            >白色</van-button>
          </div>
          <div class="bottom_title">规格</div>
          <div class="tag_button">
            <van-button
              size="mini"
              color="rgb(153, 98, 26)"
              plain
              type="primary"
            >{{name}}</van-button>
          </div>
          <div class="bottom_title bottom_title_num">数量</div>
          <div class="bottom_title_stepper">
            <van-stepper
              input-width="25px"
              button-size="18px"
              v-model="num"
            />
          </div>
        </div>
        <van-button
          class="bottom_btn"
          type="primary"
          round
          block
          @click="addShoppingCartHandle()"
        >确定</van-button>
      </div>
    </van-action-sheet>
    <van-action-bar>
      <van-action-bar-icon
        icon="
            chat-o"
        text="小米"
        @click="onClickIcon"
      />
      <van-action-bar-icon
        icon="cart-o"
        text="购物车"
        :badge="cartShoppingNumber"
        @click="toShoppingCart"
      />
      <van-action-bar-button
        type="warning"
        text="加入购物车"
        @click="addShoppingCart"
      />
      <van-action-bar-button
        type="danger"
        text="立即购买"
      />
    </van-action-bar>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
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
  // eslint-disable-next-line no-unused-vars
  ActionSheet,
  // eslint-disable-next-line no-unused-vars
  Stepper,
} from "vant";
import "vant/es/toast/style";

const cartShoppingNumber = ref(
  JSON.parse(sessionStorage.getItem("shoppingCart")).length
);
const router = useRouter();
const num = ref(1);
const { id, name, price, originPrice } = JSON.parse(
  sessionStorage.getItem("shoppingPage")
);
const images = [
  "https://img.youpin.mi-img.com/shopmain/4e6beed96e2bad875569f6665c427ba2.jpg?w=1080&h=1080",
  "https://img.youpin.mi-img.com/shopmain/dc60c5e4e119381cb3872ba1686eee77.jpg?w=1080&h=1080",
  "https://img.youpin.mi-img.com/shopmain/2ad7e84e0368de1f48d1cb2482c72b15.jpg?w=1080&h=1080",
  "https://img.youpin.mi-img.com/shopmain/6f077ebc69b7dcd7dc4cb55878265b81.jpg?w=1080&h=1080",
];
const onClickIcon = () => Toast("点击图标");
const toShoppingCart = () => {
  router.push("/shoppingCart");
};
const show = ref(false);
const addShoppingCart = () => {
  show.value = true;
};
const addShoppingCartHandle = () => {
  const user = sessionStorage.getItem("user");
  if (user) {
    // 加入购物车
    Toast("加入购物车");
    let number = num.value;
    let shopping = JSON.stringify([{ name, price, number }]);
    let oldShopping = sessionStorage.getItem("shoppingCart");
    if (oldShopping === null) {
      sessionStorage.setItem("shoppingCart", shopping);
    } else {
      let oldShoppings = JSON.parse(oldShopping);
      shopping = { name, price, number };
      oldShoppings.push(shopping);
      sessionStorage.setItem("shoppingCart", JSON.stringify(oldShoppings));
      JSON.parse(sessionStorage.getItem("shoppingCart")).length;
      cartShoppingNumber.value = oldShoppings.length;
    }
  } else {
    // 跳转登录页面
    router.push("/login");
  }
  show.value = false;
};
// const onClickButton = () => Toast("点击按钮");
const toSearchPage = () => {
  console.log("🤡 CC - id", id);
  console.log("🤡 CC - toSearchPage - toSearchPage", "toSearchPage");
};
const goBack = () => {
  history.go(-1);
  // history.back();
};
</script>

<style lang="less" scoped>
.shopping {
  .mySheet {
    .bottom_btn {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 3px;
      margin: 0 auto;
      font-size: 16px;
      font-weight: 500;
      border: 0;
      align-items: center;
      background: linear-gradient(to right, rgb(240, 78, 46), rgb(213, 16, 16));
      border-radius: 22px;
      width: 345px;
      height: 44px;
    }
    .content {
      padding: 16px 16px 160px;
      .top {
        display: block;
        width: 100%;
        img {
          width: 102px;
          float: left;
        }
        .middle {
          text-align: left;
          float: left;
          line-height: 50px;
          .price {
            color: rgb(153, 98, 26);
            span {
              font-size: 17px;
              position: relative;
            }
            font-size: 26px;
            font-weight: 700;
          }
          .selected {
            color: rgb(153, 153, 153);
            font-size: 12px;
            margin-top: 8px;
            margin-bottom: 8px;
            line-height: 15px;
          }
        }
        .close {
          width: 24px;
          float: right;
        }
      }
      .bottom {
        .bottom_title {
          margin-top: 25px;
          text-align: left;
          color: rgb(51, 51, 51);
          font-size: 13px;
          font-weight: 600;
          line-height: 21px;
        }
        .bottom_title_num {
          float: left;
        }
        .tag_button {
          text-align: left;
        }
        .bottom_title_stepper {
          margin-top: 25px;
          float: right;
        }
      }
    }
  }
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