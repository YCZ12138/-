<!--
 * @Description: 登录
 * @Author: rendc
 * @Date: 2022-07-06 10:29:40
 * @LastEditors: rendc
 * @LastEditTime: 2022-07-06 11:44:27
-->
<template>
  <div class="login">
    <van-form @submit="onSubmit">
      <br>
      <br>
      <br>
      <div class="title">小米帐号登录</div>
      <div
        v-if="showPhone"
        class="phone"
      >
        <van-image
          class="myLogo"
          :src="require('../assets/logo.png')"
          radius="12"
        />
        <van-cell-group inset>
          <van-field
            v-model="phoneNumber"
            name="phone"
            placeholder="请输入手机号"
            :rules="[{ required: true, message: '请输入手机号' }]"
          ></van-field>
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button
            round
            block
            type="primary"
            native-type="submit"
          >
            下一步
          </van-button>
        </div>
      </div>
      <div
        v-if="!showPhone"
        class="code"
      >
        <div class="top">
          <div class="text">验证码已发送至 +86 {{phoneNumber}}</div>
          <div
            class="editBtn"
            @click="editHandle()"
          >修改</div>
        </div>
        <van-cell-group inset>
          <van-field
            v-model="code"
            name="code"
            placeholder="请输入验证码"
            :rules="[{ required: true, message: '请输入验证码' }]"
          ></van-field>
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button
            round
            block
            type="primary"
            native-type="submit"
          >
            登录
          </van-button>
        </div>
      </div>
    </van-form>

  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
// eslint-disable-next-line no-unused-vars
import { Form, Field, CellGroup, Image as VanImage, Toast } from "vant";
import "vant/es/toast/style";

const router = useRouter();
const phoneNumber = ref("");
const code = ref("");
// 接收随机生成的验证码
const codes = ref("");
const showPhone = ref(true);
// 生成验证码
const sendCode = () => {
  let code = "";
  for (let i = 0; i < 4; i++) {
    code += Math.floor(Math.random() * 10);
  }
  console.log("验证码：", code);
  return code;
};
const onSubmit = (values) => {
  if (values.phone) {
    // 点击下一步按钮
    showPhone.value = false;
    // 发送验证码
    codes.value = sendCode();
  } else {
    // 点击登录按钮 判断验证码是否正确
    console.log(values.code);
    if (values.code == codes.value) {
      // 验证码正确
      // 储存用户信息
      sessionStorage.setItem("user", phoneNumber.value);
      router.push("/");
    } else {
      Toast.fail("验证码输入错误");
    }
  }
};
const editHandle = () => {
  showPhone.value = true;
  phoneNumber.value = "";
  code.value = "";
};
</script>

<style lang="less" scoped>
.login {
  height: 100vh;
  background-color: #f4f4f4;
  :deep(.van-cell-group) {
    border-radius: 24px;
  }
  :deep(.van-field__control) {
    height: 25px;
    font-weight: 500;
    font-size: 17.5px;
  }
  :deep(.van-button__text) {
    font-weight: 500;
    font-size: 17.5px;
  }
  .title {
    color: #000000;
    font-size: 20px;
    font-weight: 600;
  }
  .myLogo {
    margin: 48px 0px;
    width: 48px;
  }
  .code {
    .top {
      text-align: left;
      .text,
      .editBtn {
        font-weight: 500;
        font-size: 13px;
        margin: 40px 0;
      }
      .text {
        // float: left;
        display: inline-block;
        color: rgba(0, 0, 0, 0.65);
        text-align: left;
        padding: 0 25px;
      }
      .editBtn {
        color: #0b84ff;
        float: right;
        padding-right: 25px;
      }
    }
  }
}
</style>