<!--
 * @Description: 个人
 * @Author: rendc
 * @Date: 2022-07-01 10:10:11
 * @LastEditors: rendc
 * @LastEditTime: 2022-07-06 11:55:38
-->
<template>
  <div class="about">
    <div
      class="header"
      @click="openDialog()"
    >
      <div class="left">
        <van-image
          round
          class="imgHeader"
          src="https://img.youpin.mi-img.com/shopcenter/7dhur6i77hg_11350267611625208274363.png"
        />
      </div>
      <div class="middle"> {{user?user:"请登录"}}</div>
      <div class="right">
        <van-icon
          name="arrow"
          class="myIcon20"
          color="#b3b3b3"
        />
      </div>
    </div>
    <div class="main">
      <van-cell-group>
        <van-cell
          center
          is-link
          @click="openDialog()"
        >
          <template #title>
            <div class="custom_title">我的订单</div>
          </template>
        </van-cell>
      </van-cell-group>
      <van-row class="myRow">
        <van-col span="6">
          <div
            class="myCard"
            @click="openDialog()"
          >
            <van-icon
              class="myIcon40"
              name="
              https://img.youpin.mi-img.com/shopcenter/1su4kcv21eg_22212270231600948691418.png"
            ></van-icon>
            <div class="title">待付款</div>
          </div>
        </van-col>
        <van-col span="6">
          <div
            class="myCard"
            @click="openDialog()"
          >
            <van-icon
              class="myIcon40"
              name="
              https://img.youpin.mi-img.com/shopcenter/2rsi345c8a_22212270231600948691450.png"
            ></van-icon>
            <div class="title">待收货</div>
          </div>
        </van-col>
        <van-col span="6">
          <div
            class="myCard"
            @click="openDialog()"
          >
            <van-icon
              class="myIcon40"
              name="
              https://img.youpin.mi-img.com/shopcenter/n9q7tuhs6ao_22212270231600948691455.png"
            ></van-icon>
            <div class="title">评价</div>
          </div>
        </van-col>
        <van-col span="6">
          <div
            class="myCard"
            @click="openDialog()"
          >
            <van-icon
              class="myIcon40"
              name="
              https://img.youpin.mi-img.com/shopcenter/q69ib1u9teg_22212270231600948691439.png"
            ></van-icon>
            <div class="title">退款/售后</div>
          </div>
        </van-col>
      </van-row>
      <div class="mySpace"></div>
      <van-cell-group>
        <van-cell
          center
          is-link
          @click="openDialog()"
        >
          <template #title>
            <van-icon
              class="myIcon myIcon38"
              name="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/ucenter/ucenter_icon_myassets.png"
            />
            <div class="custom_title">我的资产</div>
          </template>
        </van-cell>
        <van-cell
          center
          is-link
          @click="openDialog()"
        >
          <template #title>
            <van-icon
              class="myIcon myIcon38"
              name="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/ucenter/ucenter_icon_coupon_new.png"
            />
            <div class="custom_title">优惠券</div>
          </template>
        </van-cell>
        <van-cell
          center
          is-link
          @click="openDialog()"
        >
          <template #title>
            <van-icon
              class="myIcon myIcon38"
              name="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/ucenter/ucenter_icon_collection.png"
            />
            <div class="custom_title">我的收藏</div>
          </template>
        </van-cell>
      </van-cell-group>
      <div class="mySpace"></div>
      <van-cell-group>
        <van-cell
          center
          is-link
          @click="openDialog()"
        >
          <template #title>
            <van-icon
              class="myIcon myIcon38"
              name="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/ucenter/ucenter_icon_address.png"
            />
            <div class="custom_title">地址管理</div>
          </template>
        </van-cell>
        <van-cell
          center
          is-link
          @click="openDialog()"
        >
          <template #title>
            <van-icon
              class="myIcon myIcon38"
              name="https://shop.io.mi-img.com/app/shop/img?id=shop_0556651f21ebb90fd2094de25cfeeeff.png&w=114&h=114"
            />
            <div class="custom_title">资质证照</div>
          </template>
        </van-cell>
        <van-cell
          center
          is-link
          @click="openDialog()"
        >
          <template #title>
            <van-icon
              class="myIcon myIcon38"
              name="https://shop.io.mi-img.com/app/shop/img?id=shop_eec55569c325c1641e1cd47ba572b83b.png&w=114&h=114"
            />
            <div class="custom_title">协议规则</div>
          </template>
        </van-cell>
        <van-cell
          center
          is-link
          @click="openDialog()"
        >
          <template #title>
            <van-icon
              class="myIcon myIcon38"
              name="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/ucenter/ucenter_icon_feedback.png"
            />
            <div class="
              custom_title">帮助与反馈
            </div>
          </template>
        </van-cell>
      </van-cell-group>
      <div class="mySpace"></div>
      <van-cell-group>
        <van-cell
          center
          is-link
          @click="logout()"
        >
          <template #title>
            <van-icon
              class="myIcon myIcon38"
              name="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/ucenter/ucenter_icon_feedback.png"
            />
            <div class="
              custom_title">退出登录
            </div>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
// eslint-disable-next-line no-unused-vars
import { Image, Dialog, Button, Cell, CellGroup, Col, Row, Toast } from "vant";
import "vant/es/dialog/style";
const router = useRouter();
const openDialog = () => {
  if (!user) {
    Dialog.confirm({
      messageAlign: "left",
      confirmButtonText: "同意",
      confirmButtonColor: "rgb(132, 95, 63)",
      cancelButtonText: "不同意",
      cancelButtonColor: "rgb(153, 153, 153)",
      message: () => (
        <div class="jsxDiv">
          <div class="title">声明与政策</div>
          欢迎您来到小米有品！
          <br />
          您可在有品进行商品浏览、支付购买、售后服务等功能。我们将严格遵守相关法律法规和隐私政策以保护您的个人信息。请您阅读并同意
          <a
            class="lib10-secret-dialog-url"
            href="https://m.xiaomiyoupin.com/content/ewen/pageFromId?id=1qctd9&amp;opapp=2&amp;noDL=1&amp;noPolicy=1"
          >
            《小米有品用户协议》
          </a>
          、
          <a
            class="lib10-secret-dialog-url"
            href="https://m.xiaomiyoupin.com/content/ewen/pageFromId?id=jazizae6ehd0mtv6&amp;spmref=0.0.0.0.16310973661545810&amp;noPolicy=1"
          >
            《隐私政策》
          </a>
          、
          <a
            class="lib10-secret-dialog-url"
            href="https://m.xiaomiyoupin.com/content/ewen/pageFromId?id=9ofwmkzlh29or2pk&amp;opapp=2&amp;noPolicy=1"
          >
            《小米账号使用协议》
          </a>
          和
          <a
            class="lib10-secret-dialog-url"
            href="https://privacy.mi.com/miaccount/zh_CN/?noPolicy=1"
          >
            《小米账号隐私政策》
          </a>
          。
        </div>
      ),
    })
      .then(() => {
        // 跳转登录页面
        router.push("/login");
      })
      .catch(() => {
        // on cancel
      });
  }
  {
    Toast("点击按钮");
  }
};
const user = sessionStorage.getItem("user");
const logout = () => {
  delete sessionStorage.user;
  location.reload();
  // sessionStorage.removeItem("user")
};
</script>
<style lang="less" scoped>
.about {
  background-color: #f3f3f3;
  // 自定义的空间分割div
  .mySpace {
    width: 100%;
    height: 5px;
  }
}
.header {
  .imgHeader {
    width: 60px;
  }
  height: 100px;
  background-color: #7f6044;
  .left {
    float: left;
    padding-left: 25px;
    margin-top: 20px;
  }
  .middle {
    color: #fff;
    font-size: 14px;
    float: left;
    padding-left: 20px;
    line-height: 100px;
    // margin-top: 40px;
  }
  .right {
    float: right;
    line-height: 100px;
    padding-right: 25px;
  }
}
.main {
  .myRow {
    background-color: #ffffff;
  }
  .myCard {
    margin: 10px;
    line-height: 12px;
    .title {
      color: rgba(0, 0, 0, 0.6);
      font-size: 13px;
    }
  }
  .myIcon {
    float: left;
  }
  .myIcon20 {
    font-size: 20px;
  }
  .myIcon38 {
    font-size: 38px;
  }
  .myIcon40 {
    font-size: 40px;
  }
  .custom_title {
    line-height: 38px;
    text-align: left;
    color: rgb(51, 51, 51);
    font-size: 14px;
    font-weight: 400;
  }
}
// :deep(.van-button) {
//   --van-button-primary-background-color: red;
// }
</style>

<style lang="less">
.jsxDiv {
  font-size: 13px;
  line-height: 23px;
  color: #999999;
  .title {
    color: rgb(51, 51, 51);
    text-align: center;
    font-size: 17px;
    display: block;
    margin-bottom: 19px;
  }
}
.lib10-secret-dialog-url {
  color: rgb(159, 128, 82);
  text-decoration: none;
}
:root {
  --van-dialog-border-radius: 8px;
  --van-cell-vertical-padding: 5px;
}
</style>