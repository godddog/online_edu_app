<template>
  <div id="t200">
    <div id="t201">
      <img
        src="https://store-1303871256.cos.ap-chengdu.myqcloud.com/photo/u867.png"
        width="100%"
      />
    </div>
    <div id="t210">
      <img src="https://store-1303871256.cos.ap-chengdu.myqcloud.com/photo/u892.png"
      width="30px"
      />
    </div>
    <div id="t202">
      <img
        src="https://store-1303871256.cos.ap-chengdu.myqcloud.com/photo/%E8%80%81%E5%B8%88.png"
        height="65px"
      />
    </div>
    <p>教师&ensp;&ensp;{{ tel }}</p>
    <div id="p203">
      <van-row gutter="20">
        <van-col span="8">
            <router-link to="MyOrder">
            <img src="https://store-1303871256.cos.ap-chengdu.myqcloud.com/photo/%E8%B5%84%E6%96%99.png" height="50px">
        <br>学习资料</router-link>
        </van-col>
        <van-col span="8">
            <router-link to="#">
            <img src="https://store-1303871256.cos.ap-chengdu.myqcloud.com/photo/%E4%BD%9C%E4%B8%9A%E5%AE%A1%E6%89%B9-01.png" height="50px"/>
        <br>作业管理
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
    <div id="t204">
      <van-row>
        <van-col span="4"
          ><img
            src="https://store-1303871256.cos.ap-chengdu.myqcloud.com/photo/%E5%AD%A6%E7%94%9F.png"
            height="40px"
        /></van-col>
        <van-col span="10" style="text-align: left">我的学生</van-col>
        <van-col span="8">人数:&ensp;{{ stu }}</van-col>
      </van-row>
      <van-divider />
      <van-row>
        <van-col span="4"
          ><img
            src="https://store-1303871256.cos.ap-chengdu.myqcloud.com/photo/%E6%88%91%E7%9A%84%E6%94%B6%E5%85%A5.png"
            height="40px"
        /></van-col>
        <van-col span="10" style="text-align: left">我的收入</van-col>
        <van-col span="8"></van-col>
      </van-row>
      <van-divider />
      <van-row>
        <van-col span="4"
          ><img
            src="https://store-1303871256.cos.ap-chengdu.myqcloud.com/photo/%E8%AE%A2%E5%8D%95.png"
            height="40px"
        /></van-col>
        <van-col span="10" style="text-align: left">我的课程</van-col>
        <van-col span="8"></van-col>
      </van-row>
      <van-divider />
    </div>
    <div id="t205">
    <van-button type="danger" size="large">退出登录</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stu: 50,
      tel: "123456789",
    };
  },
};
</script>
<style scoped>
#t202 {
  position: absolute;
  top: 14%;
  left: 40%;
}
#p203{
    margin-top: 50px;
}
#t204 {
  font-size: 20px;
  margin-top: 60px;
  padding-left: 30px;
}
p {
  font-size: 20px;
}
#t205{
  margin-left: 30px;
  margin-right: 30px;
}
#t210{
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>