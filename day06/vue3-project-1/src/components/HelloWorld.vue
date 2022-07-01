<!--
 * @Description: 
 * @Author: rendc
 * @Date: 2022-06-30 09:27:46
 * @LastEditors: rendc
 * @LastEditTime: 2022-06-30 11:49:41
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <VanButton type="primary">主要按钮</VanButton>
    <van-cell-group inset>
      <van-cell
        title="单元格"
        value="内容"
      />
      <van-cell
        title="单元格"
        value="内容"
        label="描述信息"
      />
    </van-cell-group>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import { Button, Cell, CellGroup } from "vant";

// export default {
//   name: 'HelloWorld',
//   props: {
//     msg: String
//   }
// }

export default defineComponent({
  components: {
    VanButton: Button,
    VanCell: Cell,
    VanCellGroup: CellGroup,
  },
  setup() {
    return {};
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  background-color: rgb(247, 248, 250);
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
