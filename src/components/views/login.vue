<template>
  <div id="main_div">
    <div id="head_div">
      <img src="@/assets/images/u32.png" />
      <h2>优学</h2>
    </div>
    <div id="body_div">
      <van-row>
        <van-col span="8"><font>请登录！</font></van-col>
        <van-col span="8"></van-col>
        <van-col span="8"
          ><router-link to="register"
            ><span id="sp1">注册账号</span></router-link
          ></van-col
        >
      </van-row>
      <van-form @submit="onSubmit">
        <van-field
          v-model="tel"
          placeholder="请输入手机号"
          left-icon="	https://store-1303871256.cos.ap-chengdu.myqcloud.com/photo/u101.png"
          :rules="[{ required: true, message: '手机号不能为空' }]"
        />
        <van-field
          v-model="password"
          type="password"
          left-icon="https://store-1303871256.cos.ap-chengdu.myqcloud.com/photo/u102.png"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '密码不能为空' }]"
        />
        <div style="margin: 20px">
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1">学生</van-radio>
            <van-radio name="2">老师</van-radio>
          </van-radio-group>
        </div>
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
      <van-row>
        <van-col span="8"><font></font></van-col>
        <van-col span="8"></van-col>
        <van-col span="8"
          ><router-link to="forget">
            <span id="sp1">忘记密码</span></router-link
          ></van-col
        >
      </van-row>
    </div>
    <div id="foot_div">
      <img src="@/assets/images/u117.png" width="100%" />
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      tel: "",
      password: "",
      radio: "1",
    };
  },
  methods: {
    onSubmit() {
      this.$axios
        .post("/lg/login", {
          tel: this.tel,
          password: this.password,
          radio: this.radio,
        })
        .then((response) => {
          console.log(response);
          if (response.data.statusCode == 200) {
            //在前端写入用户状态信息到localStorage中
            var author = "student";
            if(response.data.data==2){
              author = "teacher";
            }
             localStorage.setItem('Author',author);
            //传参页面
            this.$router.push({
              name: "/",
              params: {
                radio: response.data.data
              },
            });
          } else {
            Toast(response.data.massage);
          }
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>
<style scoped>
#main_div {
  width: 100%;
  height: 100%;
}
#body_div {
  position: relative;
  top: 10%;
}
#foot_div {
  margin-bottom: 0px;
  width: 100%;
  position: absolute;
  bottom: 0px;
}
h2 {
  align-content: center;
}
font {
  color: black;
  font-size: 25px;
  text-indent: left;
}
#sp1 {
  color: rgb(18, 175, 248);
}
</style>