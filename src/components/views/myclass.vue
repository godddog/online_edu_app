<template>
    <div1>
            <div2>
              <van-nav-bar
              title="我的课程" left-text="返回" left-arrow @click-left="onClickLeft"/>
            </div2>
            <div3>
            <van-tabs type="card">
              <van-tab title="未结课">未结课</van-tab>

              <van-tab title="已结课">已结课</van-tab>
            </van-tabs>
            </div3>
    </div1>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
    this.$router.push("/");
    },
    
  },
}
</script>
<style>

</style>