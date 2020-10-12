<template>
  <div id="body_div">
    <div id="top_div">
      <div id="bg_img">
        <van-nav-bar title="首页" fixed="true" />
      </div>
      <div id="swipe_div">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img :src="image.idView" width="95%" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <van-row>
        <van-col span="6"><img src="@/assets/images/u246.png" /></van-col>
        <van-col span="6"><img src="@/assets/images/u255.png" /></van-col>
        <van-col span="6"><img src="@/assets/images/u249.png" /></van-col>
        <van-col span="6"><img src="@/assets/images/u252.png" /></van-col>
      </van-row>
      <van-row>
        <van-col span="6"><router-link to="#">课堂</router-link></van-col>
        <van-col span="6"><router-link to="#">选老师</router-link></van-col>
        <van-col span="6"><router-link to="#">选课</router-link></van-col>
        <van-col span="6"><router-link to="#">提分密题</router-link></van-col>
      </van-row>
    </div>
    <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad">
  <table >
    <tr v-for="item in subjectInfo" :key="item">
      <td>
        <div id="bottom_div">
      <div id="sta_div">
        <van-tag type="warning" size="medium">等待直播</van-tag>
      </div>
      <img src="@/assets/images/u275.png" width="100%" />
      <div id="m120">
              {{item.tip}}<br> 
      <div id="m123">
        <img src="@/assets/icon/u276.png"/>
          开课时间:&nbsp;&nbsp;2020-01-01
      </div>
      <div id="m124">
        <van-button type="primary" to="index">立即报名</van-button>
      </div>
      </div>
    </div>
      </td>
    </tr>
  </table>
</van-list>
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="setting" icon="orders-o">订单</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: "home",
      images: [
        { idView: require("@/assets/images/u262.png") },
        { idView: require("@/assets/images/u263.png") },
        { idView: require("@/assets/images/u264.png") },
        { idView: require("@/assets/images/u266.png") },
        { idView: require("@/assets/images/u267.png") },
        { idView: require("@/assets/images/u269.png") },
        { idView: require("@/assets/images/u270.png") },
      ],
      subjectInfo: [
        {tip:'2020高考抢分训练营'},
         {tip:'2020高考抢分训练营'}
      ],
      loading: false,
      finished: false,
    };
  },
  methods:{
     onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        // for (let i = 0; i < 10; i++) {
        //   this.list.push(this.list.length + 1);
        // }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.subjectInfo.length >= 0) {
          this.finished = true;
        }
      }, 1000);
    },
  }
};
</script>
<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 100px;
  text-align: center;
}
#bg_img {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 25%;
  background-color: rgb(91, 160, 250);
}
#top_div {
  background-color: #fff;
  margin-bottom: 20px;
  height: 50%;
}
#body_div {
  background-color: #ffffff;
  height: 100%;
}
.van-nav-bar {
  background-color: rgb(241, 237, 237);
}
#bottom_div {
  width: 90%;
  margin-left: 5%;
  margin-top: 5%;
  box-shadow: 3px 3px 3px 4px #888888;
  text-align: left;
}
#sta_div {
  width: 20%;
  position: relative;
  top: 30px;
  left: 10px;
}
 #m123{
  margin-top: 10px;
  text-align: left;
  font-size: 15px;
}
#m124{
  width: 100px;
  position: relative;
  bottom: 40px;
  left: 70%;
}
#m120{
  margin-top: 15px;
}
</style>