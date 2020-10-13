<template>
<div>
    <div>
        <van-nav-bar title="全部课程" left-text="" left-arrow onclick="goback">
            <template #right>
                <router-link to="/search"> <van-icon name="search" size="18" /> </router-link>
            </template>
          </van-nav-bar>
    </div>
    
    <div class="class1">
      <router-link to="/search"> <van-search v-model="value" placeholder="请输入搜索关键词" /> </router-link>  
    </div>
    <div>
        <van-tabs :before-change="beforeChange">

            <van-tab title="语文">
              <div class="subject">
                <div><img src="@/assets/images/u275.png" width="98%"/></div>
                <div class="disc"><p><span>高考物理抢跑夺分特训营...</span></p></div>
                <div class="button"><van-button round type="info">立即报名</van-button></div>
                <div class="video"><van-icon name="tv-o" /> </div>
              </div>
            </van-tab>


            <van-tab title="数学">
                数学
              </van-tab>

              <van-tab title="英语">
                英语
              </van-tab>

              <van-tab title="政治">
                政治
              </van-tab>

          </van-tabs>
    </div>
</div>
</template>

<script>
export default {
  methods: {
    beforeChange(index) {

      return new Promise((resolve) => {
        resolve(index !== 5);
      });
    },
    goback(){
        this.$router.go(-1);
    }
  },
};

</script>
<style>
  .disc{
    float: left;
  }
  .video{
    float: left;
  }
.subject{
  height: 300px;
  background-color:rgb(190, 201, 195);
  padding-top: 3%;
  width: 90%;
  padding-left: 5%;
}
.class1{
  padding-top: 10px;
  background-color: #fff;
}
</style>