<!--
 * @Description: 分类页
 * @Author: rendc
 * @Date: 2022-07-01 09:10:40
 * @LastEditors: rendc
 * @LastEditTime: 2022-07-03 12:04:57
-->
<template>
  <div class="about">
    <van-nav-bar
      class="myNavBar"
      title="分类"
    >
      <template #right>
        <van-icon
          class="myNavBarIcon"
          name="search"
          @click="toSearchPage()"
        />
      </template>
    </van-nav-bar>
    <div class="sortMain">
      <div class="left">
        <van-sidebar
          v-model="active"
          @change="onChange"
        >
          <van-sidebar-item title="有品推荐" />
          <van-sidebar-item title="手机数码" />
          <van-sidebar-item title="小米电视" />
          <van-sidebar-item title="影音娱乐" />
          <van-sidebar-item title="智能家庭" />
          <van-sidebar-item title="大家电" />
          <van-sidebar-item title="厨卫电器" />
          <van-sidebar-item title="生活家电" />
          <van-sidebar-item title="个护电器" />
          <van-sidebar-item title="美食酒饮" />
          <van-sidebar-item title="家具家装" />
          <van-sidebar-item title="电脑办公" />
        </van-sidebar>
      </div>
      <div class="right">
        <!-- <van-swipe
          class="mySwipe"
          :autoplay="1000"
          :width="786"
        >
          <van-swipe-item>
            <img src="https://img.youpin.mi-img.com/ferriswheel/6429629d_cd2e_435c_92e4_bbb32f9097c0.png?w=786&h=228" />
          </van-swipe-item>
          <van-swipe-item>
            <img src="https://img.youpin.mi-img.com/ferriswheel/e6a71699_2b7e_451d_9114_73208234cdd8.jpeg?w=786&h=228" />
          </van-swipe-item>
        </van-swipe> -->
        <img
          class="myImg"
          src="https://res.youpin.mi-img.com/youpinoper/accb3d8b_9c95_4635_b176_ac9657bd05cb.jpeg"
        >
        <div
          class="myGrid"
          v-for="(item,index) in myGridData"
          :key="index"
        >
          <div class="title">
            {{item.title}}
          </div>
          <van-grid :column-num="3">
            <van-grid-item
              v-for="(item,index) in item.items"
              :key="index"
            >
              <van-image
                class="img"
                :src="item.img"
              />
              <div class="name">{{item.name}}</div>
            </van-grid-item>
          </van-grid>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
// eslint-disable-next-line no-unused-vars
import { NavBar, Sidebar, SidebarItem, Toast, Grid, GridItem } from "vant";
import "vant/es/toast/style";
const toSearchPage = () => {
  console.log("🤡 CC - toSearchPage - toSearchPage", "toSearchPage");
};
const active = ref(0);

// eslint-disable-next-line no-unused-vars
const myGridData0 = [
  {
    title: "精选分类",
    items: [
      {
        img: "https://img.youpin.mi-img.com/shopmain/96876f6521dfee4a6d2b7f7428c71f86.png@base@tag=imgScale&h=132&m=1&q=80&w=132",
        name: "笔记本电脑",
      },
      {
        img: "https://img.youpin.mi-img.com/ink/dc4892d4_81f2_4d16_ae9f_fd1d31ebff9f.png?w=228&h=228",
        name: "小米空调",
      },
    ],
  },
  {
    title: "精选专区",
    items: [
      {
        img: "https://img.youpin.mi-img.com/ink/e086b69c_908e_489e_9396_c8c5db0d1f66.png?w=228&h=228",
        name: "小米冰箱",
      },
      {
        img: "https://img.youpin.mi-img.com/ink/7c1ce642_16ee_43a2_a95d_c33568dda752.png?w=228&h=228",
        name: "小米洗衣机",
      },
      {
        img: "https://img.youpin.mi-img.com/ink/75652be9_196b_4236_a5d7_5307981c9e61.png?w=228&h=228",
        name: "小米大家电",
      },
      {
        img: "https://img.youpin.mi-img.com/ink/e4381171_1873_4a7d_9877_5ed1ba8873c0.png?w=228&h=228",
        name: "云米精选",
      },
      {
        img: "https://img.youpin.mi-img.com/ink/e045e16e_0feb_4a86_8cad_45b04f96a15d.png?w=228&h=228",
        name: "颜值电器",
      },
    ],
  },
];
// eslint-disable-next-line no-unused-vars
const myGridData1 = [
  {
    title: "新品发布",
    items: [
      {
        img: "https://img.youpin.mi-img.com/shopmain/96876f6521dfee4a6d2b7f7428c71f86.png@base@tag=imgScale&h=132&m=1&q=80&w=132",
        name: "笔记本电脑",
      },
      {
        img: "https://img.youpin.mi-img.com/ink/dc4892d4_81f2_4d16_ae9f_fd1d31ebff9f.png?w=228&h=228",
        name: "小米空调",
      },
    ],
  },
  {
    title: "小米",
    items: [
      {
        img: "https://img.youpin.mi-img.com/ink/e4381171_1873_4a7d_9877_5ed1ba8873c0.png?w=228&h=228",
        name: "云米精选",
      },
      {
        img: "https://img.youpin.mi-img.com/ink/e045e16e_0feb_4a86_8cad_45b04f96a15d.png?w=228&h=228",
        name: "颜值电器",
      },
    ],
  },
];
let myGridData = ref(myGridData0);
const onChange = (index) => {
  // 实际情况是会向后台查询数据
  // Toast(`标签名 ${index + 1}`);
  try {
    myGridData.value = eval("myGridData" + index);
  } catch (error) {
    myGridData.value = [];
  }
};
</script>
<style lang="less" scoped>
.myNavBar {
  width: 100%;
  position: fixed;
  .myNavBarIcon {
    font-size: 18px;
    color: #333333;
  }
}
.sortMain {
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  .left,
  .right {
    margin-top: 46px;
  }
  .left {
    flex: none;
  }
  .right {
    flex: auto;
    background-color: rgb(246, 246, 246);
    .myImg {
      width: 262px;
      border-radius: 8px;
      margin-top: 10px;
    }
    .myGrid {
      align-items: center;
      background-color: rgb(255, 255, 255);
      justify-content: space-between;
      // padding-left: 12px;
      // padding-right: 7px;
      // padding-top: 10px;
      border-radius: 8px;
      margin: 10px 10px 0px 10px;
      width: 262px;
      .title {
        color: rgb(51, 51, 51);
        font-size: 14px;
        font-weight: bold;
        line-height: 23px;
        padding-left: 12px;
        padding-right: 7px;
        padding-top: 10px;
        text-align: left;
      }
      .img {
        width: 66px;
        background-color: rgb(248, 248, 248);
        border-radius: 6px;
      }
      .name {
        color: rgb(119, 119, 119);
        font-size: 12px;
        padding-top: 6px;
        text-align: center;
        vertical-align: middle;
        width: 76px;
      }
    }
  }
}
</style>
<style lang="less">
:root {
  --van-sidebar-width: 93px;
  --van-sidebar-font-size: 16px;
  --van-sidebar-text-color: #777777;
  --van-sidebar-background-color: #ffffff;
  --van-sidebar-selected-text-color: #ffffff;
  --van-sidebar-selected-border-color: none;
  --van-sidebar-padding: 20px 1px;
  --van-grid-item-content-padding: 10px 5px;
  .van-sidebar-item--select {
    .van-sidebar-item__text {
      padding-left: 8px;
      width: 81px;
      height: 26.5px;
      line-height: 26.5px;
      border-radius: 13px;
      background-color: rgb(230, 170, 92);
    }
  }
}
</style>