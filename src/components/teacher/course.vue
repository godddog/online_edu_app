<template>
    <div>
        <div class="div1-1">
            <van-nav-bar
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            />
        </div>
        <div class="div1-2">我的课程</div>
        <div class="div1-3">
            <img src="http://qih85hm7z.hn-bkt.clouddn.com/u549.png"/>
        </div>
        <div class="div1-4">
            <img src="http://qih85hm7z.hn-bkt.clouddn.com/u550.png"/>
        </div>
        <div class="div1-5">
            <img src="http://qih85hm7z.hn-bkt.clouddn.com/u551.png"/>
        </div>
        <div class="div1-6">
            <van-row type="flex" justify="center">
                <van-col span="4">{{teacher.name}}</van-col>
                <van-col span="3">{{teacher.subject}}</van-col>
                <van-col span="1">|</van-col>
                <van-col span="3">{{teacher.grade}}</van-col>
            </van-row>
        </div>
        <div class="div1-7">
            <span>{{teacher.info}}</span>
        </div>
        <div class="div1-8"> 
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
                >
                <table>
                    <tr v-for="(sub) in subjectInfo" :key="sub" :title="item">
                        <td><div class="div_td1"><img :src= "sub.imgurl" width="100%" ></div></td>
                        <td>
                            <div class="div_td2">{{sub.miaoshu}}</div>
                            <div class="div_td3">¥ &nbsp{{sub.price}}</div>
                            <div class="div_td4">
                                <van-button type="primary" @click= coursedetail(sub.sub_id,sub.status)>{{sub.status}}</van-button>
                            </div>
                        </td>                       
                    </tr>
                </table>
            </van-list>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      teacher: {
          id: "5",
          name:"李雪梅",
          subject:"语文",
          grade:"高一",
          info:"2008年起从事高中语文教学，在线课程明星教师，累计学员超过100万"
      },
      subjectInfo: [
          {
          sub_id: 2,
          imgurl:"http://qih85hm7z.hn-bkt.clouddn.com/u560.png",
          miaoshu:"2020高考物理抢跑夺分特训营第一阶段",
          price:"480.00/天",
          status:"未开始",
          time: "20",
          startLiveTime: "2020-10-10"
          },
          {
          sub_id: 3,
          imgurl:"http://qih85hm7z.hn-bkt.clouddn.com/u560.png",
          miaoshu:"2020高考物理抢跑夺分特训营2",
          price:"180.00/天",
          status:"已结课",
          time: "20",
          startLiveTime: "2020-10-10"
          },
          {

          sub_id: 4,
          imgurl:"http://qih85hm7z.hn-bkt.clouddn.com/u560.png",
          miaoshu:"2020高考物理抢跑夺分特训营3",
          price:"480.00/月",
          status:"去直播",
          time: "20",
          startLiveTime: "2020-10-10"
          }
      ],
      loading: false,
      finished: false,
      t_id : 1,
    };
  },
  created: function(){
      this.$axios
      .get("myteacher-service/teacher",{
          params:{
              id : this.t_id
          }
      })
      .then(response=>{
        //   console.log(response)
          if(response.status==200){
            this.teacher = response.data.teacher;
            this.subjectInfo = response.data.subjectVos;
          }
      })
      .catch(error=>{
          alert(error)
      });
  },
  methods: {
    coursedetail(sub_id,status){
        if("未开课" === status){
            // this.$router.push({path:"courseNotStart",query: {sub_id: sub_id ,t_id: this.t_id}});
            // this.$router.push({name:"courseNotStart",params: {sub_id: sub_id ,t_id: this.t_id}});
            this.$router.push({name:"courseNotStart",params: {sub_id: sub_id ,t_id: this.t_id}});
        }else if("已结课" === status){
            this.$router.push({path:"courseOver",query:{sub_id: sub_id ,t_id: this.t_id}});
        }else if("开课中" === status){
            this.$router.push({path:"courseStarted",query:{sub_id: sub_id ,t_id: this.t_id}});
        };
    },
    onClickLeft() {
       this.$router.back();
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
       
        this.loading = false;
        
        // 数据全部加载完成
        if (this.subjectInfo.length >= 0) {
          this.finished = true;
        }
      }, 1000);
    },
  }
    
}
</script>
<style scoped>
.div1-1{
    width: 30%;
    float: left;
}
.div1-2{
    width: 50%;
    float: left;
    font-weight:bold;
    margin-top: 4%;
}
.div1-4{
    position: absolute;
    margin-top: -15%;
    width: 100%;
}
.div1-5{
    position: absolute;
    margin-top: -23%;
    width: 100%;
}
.div1-6{
    position: absolute;
    width: 100%;
    margin-top: -7%;
   font-weight: bold;
}
.div1-7{
    position: absolute;
    margin-left: 10%;
    width: 70%;
    margin-top: 0%;
    text-align: left;
}
.div1-8{
    position: absolute;
    width: 96%;
    text-align: center;
    margin: 17% 2% 0% 2%;
}
.div_td1{
    position: relative;
    width: 100%;
    height: 100%;
}
.div_td2{
    margin: -17% 2% 0% 1%;
    height: 20px;
    width: 100%;
    text-align: left;
}
.div_td3{
    position: absolute;
    float: left;
    margin: 10% 1% 0% 1%;
}
.div_td4{
    position: absolute;
    margin-top: 4%;
    text-align: right;
    margin-left: 40%;
}
tr {
    height: 120px;
}
</style>