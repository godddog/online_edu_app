<template>
   <van-nav-bar
  title="我的课程"
  left-text="返回"

  left-arrow
  @click-left="onClickLeft"
 />

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