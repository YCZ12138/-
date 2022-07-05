<!--
 * @Description: 主页
 * @Author: rendc
 * @Date: 2022-07-01 09:10:40
 * @LastEditors: rendc
 * @LastEditTime: 2022-07-05 11:18:13
-->
<template>
  <div class="home">
    <!-- :navigation="true" -->
    <swiper
      class="mySwiper"
      :slides-per-view="1"
      :space-between="50"
      :loop="true"
      :pagination="{
        clickable:false
      }"
      :autoplay="{
        delay:2000,
        disableOnInteraction:false
      }"
      :modules="modules"
    >
      <swiper-slide>
        <img
          src="https://res.youpin.mi-img.com/youpinoper/42a569a0_ced6_4bcf_8833_a50a49fbf666.jpeg@base@tag=imgScale&h=320&w=750"
          alt=""
        >
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://res.youpin.mi-img.com/youpinoper/8f6eabc4_ff0c_4c44_b3c6_20edd700ace5.jpeg@base@tag=imgScale&h=320&w=750"
          alt=""
        >
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://res.youpin.mi-img.com/youpinoper/004547c4_6733_4030_9857_60906e7e9f06.jpeg@base@tag=imgScale&h=320&w=750"
          alt=""
        >
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://res.youpin.mi-img.com/youpinoper/8b6d166c_bbaa_47f6_b7a3_ec900a7f37f9.jpeg@base@tag=imgScale&h=320&w=750"
          alt=""
        >
      </swiper-slide>
    </swiper>
  </div>
</template>


<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// 除了Swiper, SwiperSlide基础组件 其他的功能需要单独导入
// eslint-disable-next-line no-unused-vars
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// 使用setup语法 需要创建这样一个变量和组对应 否则就无法使用对用的功能
const modules = [Autoplay, Navigation, Pagination, Scrollbar, A11y];
</script>

sty
<style lang="less" scoped>
.mySwiper {
  img {
    width: 375px;
  }
  :deep(.swiper-pagination) {
    text-align: right;
    left: -16px;
    bottom: 22px;
  }
  :deep(.swiper-pagination-bullet) {
    width: 12px;
    height: 3px;
    background-color: white;
    border-radius: 0;
    opacity: 1;
  }
  :deep(.swiper-pagination-bullet-active) {
    height: 12px;
  }
}
</style>
