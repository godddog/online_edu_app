<template>
  <div id="p200">
    <div id="p201">
      <img
        src="https://store-1303871256.cos.ap-chengdu.myqcloud.com/photo/u867.png"
        width="100%"
      />
    </div>
    <div id="p202">
      <img
        src="https://store-1303871256.cos.ap-chengdu.myqcloud.com/photo/u870.png"
      />
    </div>
    <p>学生&ensp;&ensp;{{ tel }}
    </p>
    <div id="p203">
      <van-row gutter="20">
        <van-col span="8">
            <router-link to="myClass">
            <img src="https://store-1303871256.cos.ap-chengdu.myqcloud.com/photo/%E8%AF%BE%E7%A8%8B.png" height="50px">
        <br>我的课程</router-link>
        </van-col>
        <van-col span="8">
            <router-link to="#">
            <img src="https://store-1303871256.cos.ap-chengdu.myqcloud.com/photo/%E8%AE%A2%E5%8D%95.png" height="50px"/>
        <br>我的订单
        </router-link>
        </van-col>
        <van-col span="8">
            <router-link to="#">
            <img src="https://store-1303871256.cos.ap-chengdu.myqcloud.com/photo/%E4%B8%8A%E4%BC%A0.png" height="50px">
        <br>上传作业
        </router-link>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tel: "123456789",
    };
  },
};
</script>
<style scoped>
#p202 {
  position: absolute;
  top: 12%;
  left: 40%;
}
#p203{
    margin-top: 50px;
}
</style>