<!--
 * @Description: NewWorld
 * @Author: rendc
 * @Date: 2022-06-30 10:06:28
 * @LastEditors: rendc
 * @LastEditTime: 2022-07-01 09:32:42
-->
<template>
  <div class="hello">
    {{data}}
    <h1>new world</h1>
    <van-button
      type="primary"
      @click="add"
    >新增</van-button>
    <Button
      type="danger"
      @click="del"
    >删除</Button>
    <VanCellGroup inset>
      <VanCell
        title="单元格"
        value="内容"
      ></VanCell>
      <VanCell
        title="单元格"
        value="内容"
      ></VanCell>
    </VanCellGroup>
    <!-- <van-cell-group>
      <van-cell
        title="单元格"
        value="内容"
      ></van-cell>
      <van-cell
        title="单元格"
        value="内容"
      ></van-cell>
    </van-cell-group> -->
    <Icon name="chat-o" />
    <Icon name="https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png" />
    <!-- <Icon
      name="chat-o"
      dot
    />
    <br>
    <van-icon
      name="chat-o"
      badge="9"
    />
    <br>
    <van-icon
      name="chat-o"
      badge="99+"
    />
    <br>
    <Icon
      name="cart-o"
      color="#1989fa"
    />
    <Icon
      name="fire-o"
      color="#ee0a24"
    />
    <van-icon
      name="chat-o"
      size="40"
    />
    <van-icon
      name="chat-o"
      size="3rem"
    /> -->

    ---
  </div>
</template>

<script setup>
import { defineProps, defineEmits, reactive } from "vue";
// eslint-disable-next-line no-unused-vars
import { Button, Cell, CellGroup, Icon, Toast } from "vant";
import "vant/es/toast/style";

const props = defineProps({
  data: {
    type: Array,
    default() {
      return [];
    },
  },
  color: {
    type: String,
    default() {
      return "";
    },
  },
});
console.log("🤡 CC - props", props);
let $myEmit = defineEmits(["myAdd", "myDel"]);
const add = () => {
  $myEmit("myAdd", "新增");
  console.log("🤡 CC - add - add", "add");
  Toast("提示内容");
};
const del = () => {
  $myEmit("myDel", "删除");
  console.log("🤡 CC - del - del", "del");
  Toast.loading({
    message: "加载中...",
    forbidClick: true,
  });
};

const state = reactive({
  color: "skyblue",
  width: "200px",
});

props.color;
if (props.color == "red") {
  state.color = "red";
} else if (props.color == "blue") {
  state.color = "blue";
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1 {
  // color: hotpink;
  width: v-bind("state.width");
  color: v-bind("state.color");
}
</style>
