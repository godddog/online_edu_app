<template>
<div1>
   <van-nav-bar title="我的课程" left-text="返回" left-arrow@click-left="onClickLeft"/>
<div2>
  <van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
>
  <template #tags>
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </template>
  <template #footer>
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">按钮</van-button>
  </template>
</van-card>
</div2>

</div1>
</template>
<script>
export default {
      methods: {
    onClickLeft() {
      Toast('返回');
    },
    
  },
   data() {
    return {
      activeName: 'a',
    };
  },
}
</script>
<style scoped>

</style>