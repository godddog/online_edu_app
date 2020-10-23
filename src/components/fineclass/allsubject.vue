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
              <!-- <div class="subject">
                <div><img src="@/assets/images/u275.png" width="98%"/></div>
                <div class="disc"><p><span>高考物理抢跑夺分特训营...</span></p></div>
                <div class="button"><van-button round type="info">立即报名</van-button></div>
                <div class="video"><van-icon name="tv-o" /> </div>
              </div> -->
              <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad">
              <table >
                <tr v-for="item in subjectInfo" :key="item">
                  <td>
                    <div id="bottom_div">
                   <img :src="item.pictureUrl" width="100%" height="160px" @click="querydetail(item)" />
                  <div id="m120">
                          &ensp;{{item.subDesc}}<br> 
                  <div id="m123">
                     &ensp;
                    <img src="@/assets/icon/u276.png" />
                      开课时间:&nbsp;&nbsp;{{item.liveTime}}
                  </div>
                  <div id="m124">
                    <van-button type="primary" round to="index">立即报名</van-button>
                  </div>
                  </div>
                </div>
                  </td>
                </tr>
              </table>
            </van-list>
            </van-tab>


            <van-tab title="数学">
              
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
  data(){
    return{
      subjectInfo:[
      {subDesc:'2020高考抢分训练营',
      liveTime:'2020-10-01',
      pictureUrl:'http://qi9wad36f.hn-bkt.clouddn.com/u275.png',
      },
      {subDesc:'高端1对1精品课',
      liveTime:'2020-10-02',
      pictureUrl:'http://qi9wad36f.hn-bkt.clouddn.com/s1.jpg',
      },
      {subDesc:'小初作文1对1短期课',
      liveTime:'2020-10-03',
      pictureUrl:'http://qi9wad36f.hn-bkt.clouddn.com/s4.jpg', 
      },
      {subDesc:'2021中考',
      liveTime:'2020-10-01',
      pictureUrl:'http://qi9wad36f.hn-bkt.clouddn.com/s3.jpg',
      },   
      {subDesc:'2021中考',
      liveTime:'2020-10-01',
      pictureUrl:'http://qi9wad36f.hn-bkt.clouddn.com/s2.jpg',
      },   
      ],
      loading: false,
      finished: false,
    }
  },
  created(){
    alert("xxxxx"),
    this.$axios
    .get("subjectmanagement-service/subjectlist",{params:{subType:"语文"}})
    .then(response=>{
        console.log(response);
        if(response.data.statusCode==200){
            this.subjectInfo=response.data.data;
            // console.log(this.subjectInfo);
        }
    })
    .catch(error=>{
      this.$message(error);
    })
  },
  methods: {
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
    querydetail(item){
        this.$router.push({
          path:'subjectdetail',
          query:{sid:item.sid}
        })
    },
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
#bottom_div {
  width: 90%;
  margin-left: 5%;
  margin-top: 5%;
  box-shadow: 3px 3px 3px 4px #888888;
  text-align: left;
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