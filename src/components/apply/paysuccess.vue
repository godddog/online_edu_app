<template>
    <div>
      <div>
        <van-nav-bar title="支付成功" left-text="" left-arrow onclick="goback">
          </van-nav-bar>
    </div>

    <div class="picture">
<img src="@/assets/images/u630.png"/>
    </div>
    <div>
        <p id="p1">支付成功</p>
    </div>
    <div>
        <p id="p2">耶!同学，你的学问又上了一层~</p>
    </div>
    <div>
        <van-divider dashed>  </van-divider>
    </div>

    <div>
        <van-button type="info" size="large">查看课程</van-button>
    </div>
    <div>
        <van-divider dashed>  </van-divider>
    </div>
<div>
    <router-link to="allsubject">查看全部课程>> </router-link>
</div>

    </div>
          </template>
          
          <script>
          export default {

            methods:{
              goback(){
             this.$router.go(-1);
            }
            }
          };
    
          </script>
  
  <style>
.picture{
    margin-top: 25%;
}
#p1{
    font-size: large;
    font-weight: 1000px;
}
  </style>
        