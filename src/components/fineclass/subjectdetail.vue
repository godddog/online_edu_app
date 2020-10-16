<template>
  <div>
    <div>
      <van-nav-bar title="课程详情" left-text="" left-arrow onclick="goback">
        </van-nav-bar>
  </div>
    <div class="body">
      <table>
        <tr>
          <td>
          <div class="subject">
            <img src="@/assets/images/u262.png" width="100%"/>
          </div>
          <div class="text1">
              <p id="p1">高中英语必学的语法学习方法</p>
              <p id="p2">480元/天</p>
              <p>时间:&nbsp&nbsp 2020-05-20 &nbsp 20:30</p>
              <p>开课:&nbsp&nbsp 60分钟</p>
          </div>

          <div><van-divider />
            <van-divider />
            <van-divider />

          </div>

            <div class="picture"><img src="@/assets/images/u375.png" width="100%"/>
            </div>

            <div class="text2">
              <p id="p3">李雪梅&nbsp 语文|高一</p>
            </div>
            <div class="text3">
              <p id="p4">2008年起从事高中语文教学，在线明星教师，累计学员超过100万</p>
            </div>
            <div class="button">
              <van-button type="info" size="mini">查看所授课程</van-button>
            </div>

              <div class="picture2"><img src="@/assets/images/u378.png" width="100%"/>
            </div>


            <div>
            <van-tabs v-model="activeName">
              <van-tab title="课程说明" name="b">
                <div>
                  
                </div>
              </van-tab>
              <van-tab title="课程目录" name="c">内容 3</van-tab>
            </van-tabs> 
          </div>
          <div>
            <van-submit-bar :price="3050" button-color="blue" button-text="立即报名" @submit="onSubmit" />
          </div>
          </td>
        </tr>
      </table>

    </div>
  </div>
        </template>
        
        <script>
        export default {
          data() {
            
    return {
      activeName: 'a',
    };
  },
    created(){
      this.$route.query.sid
    },
          methods:{
            goback(){
           this.$router.go(-1);
          }
          }
        };
  
        </script>

<style>
.subject{
  width: 100%;
  padding-top: 5%;
  padding-left: 3%;
  background-color: aliceblue;
}
.text1{
  width: 100%;
  float: left;
  padding-left: 3%;
  text-align: left;
  background-color: aliceblue;
  }
  #p2{
    color: rgb(255, 0, 0);
    font-size: 18px;
  }
  #p1{
    font-size: 22px;
  }
  #p4{
    font-size: 13px;
    
  }
  #p5{
    font-size: large;
    font-weight: 1000px;
  }
  .teacher{
    width: 50%;
    padding-top: 10%;
  }
  .picture{
    width: 100%;
    margin-top: 50%;

  }
  .text2{
  text-align: left;
  position: absolute;
  margin-top: -27%;
  margin-left: 20%;
    }
    .text3{
      text-align: left;
  position: absolute;
  margin-top: -20%;
  margin-left: 20%;
  width: 52%;
    }

  .button{
  position: absolute;
  margin-top: -23%;
  margin-left: 70%;
  }
</style>
      