<template>
<div id="body_div">
  <div id="top_div">
    <div id="bg_img">
      <img src="@/assets/images/u259.png" />
    </div>
    <div id="swipe_div">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image.idView" width="95%"/>
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
        <van-col span="6"><router-link to="allsubject">课堂</router-link></van-col>
        <van-col span="6"><router-link to="#">选老师</router-link></van-col>
        <van-col span="6"><router-link to="#">选课</router-link></van-col>
        <van-col span="6"><router-link to="#">提分密题</router-link></van-col>
      </van-row>
  </div>
  <div id="bottom_div">
      <img src="@/assets/images/u275.png" width="98%"/>
      <img src="@/assets/images/u275.png" width="98%"/>
      <img src="@/assets/images/u275.png" width="98%"/>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        { idView: require("@/assets/images/u262.png") },
        { idView: require("@/assets/images/u263.png") },
        { idView: require("@/assets/images/u264.png") },
        { idView: require("@/assets/images/u266.png") },
        { idView: require("@/assets/images/u267.png") },
        { idView: require("@/assets/images/u269.png") },
        { idView: require("@/assets/images/u270.png") },
      ],
    };
  },
};
</script>
<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 100px;
  text-align: center;
}
#bg_img {
  position: absolute;
  top: 0px;
}
#top_div{
    background-color: #fff;
    margin-bottom: 20px;
    height: 50%;
}
#body_div{
    background-color: #f2f2f2;
    height: 100%;
}

</style>