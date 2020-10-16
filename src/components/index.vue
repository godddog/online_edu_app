<template>
  <div id="body_div">
      <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o"><router-link to="/">首页</router-link></van-tabbar-item>
      <van-tabbar-item name="setting" icon="orders-o"><router-link to="/MyOrder">订单</router-link></van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o" @click="check">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<style scoped>
#body_div {
  background-color: #ffffff;
  height: 100%;
}
</style>
<script>
export default {
  data() {
    return {
      role: '',
    }
  },
  created() {
    var radio = this.$route.params.radio;
    this.role = radio;
  },
  methods: {
    check(){
      if(this.role=="1"){
        this.$router.push({
          path: 'student'
        })
      }else{
        this.$router.push({
          path: 'teacher'
        })
      }
    }
  },
}
</script>