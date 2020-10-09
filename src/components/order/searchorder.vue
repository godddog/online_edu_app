<template>
  <div>
    <van-nav-bar
      title="标题"
      right-text="搜索"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>
<script>
import { Toast } from "vant";

export default {
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
  },
};
</script>
<style scoped>
</style>