<template>
  <div id="body_div">
      <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o"><router-link to="/">首页</router-link></van-tabbar-item>
      <van-tabbar-item name="setting" icon="orders-o"><router-link to="/MyOrder">订单</router-link></van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o"><router-link to="/teacher">我的</router-link></van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<style scoped>
#body_div {
  background-color: #ffffff;
  height: 100%;
}
</style>