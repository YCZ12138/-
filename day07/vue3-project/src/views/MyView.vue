<!--
 * @Description: 
 * @Author: rendc
 * @Date: 2022-07-01 10:10:11
 * @LastEditors: rendc
 * @LastEditTime: 2022-07-01 12:00:36
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
          width="60"
          height="60"
          src="https://img.youpin.mi-img.com/shopcenter/7dhur6i77hg_11350267611625208274363.png"
        />
      </div>
      <div class="middle"> 请登录</div>
      <div class="right">
        <van-icon
          name="arrow"
          size="18"
        />
      </div>
      <!-- <Button type="primary">主要按钮</Button> -->
      <!-- <van-dialog
        title="标题"
        show-cancel-button
        message="内容内容内容内容内容内容内容内容"
      ></van-dialog> -->
    </div>
  </div>

</template>
<script setup>
// eslint-disable-next-line no-unused-vars
import { Image, Dialog, Button } from "vant";
import "vant/es/dialog/style";
const openDialog = () => {
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
      // on confirm
    })
    .catch(() => {
      // on cancel
    });
};
</script>
<style lang="less" scoped>
.header {
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
// :deep(.van-button) {
//   --van-button-primary-background-color: red;
// }
</style>

<style lang="less">
.jsxDiv {
  font-size: 13px;
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
</style>