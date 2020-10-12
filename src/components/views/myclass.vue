<template>
    <div id="div1">
            <div id="div2">
              <van-nav-bar
              title="我的课程" left-text="返回" left-arrow @click-left="onClickLeft"/>
            </div>
            <div id="div3">
            <van-tabs type="card">
              <van-tab title="未结课"> 
                未结课 
             <div>
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
        <van-tag type="warning" size="medium">正在直播</van-tag>
      </div>
      <img src="@/assets/images/u275.png" width="100%" />
      <div id="m120">
              &ensp;{{item.tip}}<br> 
      <div id="m123">
         &ensp;
        <img src="@/assets/icon/u276.png"/>
          开课时间:&nbsp;&nbsp;{{item.time}}
      </div>
      <div id="m124">
        <van-button type="primary" to="myClassInfo">点击了解详情</van-button>
      </div>
      </div>
    </div>
      </td>
    </tr>
  </table>
</van-list>

            </div>
              </van-tab>

              <van-tab title="已结课">
                   已结课

                <div>
                   <table>
                  <div>
                    <tr v-for="item in subjectInfo" :key="item">
                      <div>
                      <span>课程名称<td>{{item.tip}}</td></span>  
                      </div>
                      <div>
                  <span>  开课时间 <td>{{item.time}}</td></span>    
                      </div> 
                       <div>
                  <span>  </span>    
                      </div> 
                    </tr>
                   
                  </div>
                </table>

                </div>

             
              </van-tab>
            </van-tabs>
            </div>
            
           
    </div>
</template>
<script>
export default {
 
   data() {
    return {
     
      isLoading: false,
       
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
        {tip:'2020高考抢分训练营',time:'2020-01-01' },
        {tip:'2020高考抢分训练营',time:'2020-01-01'},
        {tip:'2020高考抢分训练营',time:'2020-01-01'},
        {tip:'2020高考抢分训练营',time:'2020-01-01'},
        {tip:'2020高考抢分训练营',time:'2020-01-01'},
      ],
      loading: false,
      finished: false,
     
 
    };
    
  },
  methods: {
    onClickLeft() {
    this.$router.push("/");
    },
   
     
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
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
  },
   
  
  
}
</script>
<style>
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