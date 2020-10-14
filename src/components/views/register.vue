<template>
  <div id="main_div">
    <van-nav-bar
      title="注册"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div id="head_div">
      <img src="@/assets/images/u32.png" />
      <h2>优学</h2>
    </div>
    <div id="body_div">
      <van-form @submit="onSubmit">
        <van-field
          v-model="userInfo.username"
          left-icon="https://store-1303871256.cos.ap-chengdu.myqcloud.com/photo/u168.png"
          placeholder="请输入真实用户名"
          :rules="[{ required: true, message: '用户名不正确' }]"
        />
        <van-field
          v-model="userInfo.tel"
          type="tel"
          left-icon="https://store-1303871256.cos.ap-chengdu.myqcloud.com/photo/u101.png"
          placeholder="请输入手机号"
          :rules="[{ required: true, message: '请输入手机号码' }]"
        />
        <van-field
          v-model="userInfo.sms"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
          :rules="[{ required: true, message: '请输入验证码' }]"
        >
          <template #button>
            <van-button
              :disabled="status"
              size="small"
              type="primary"
              @click="sendSMS"
              id="btn_send"
              >发送验证码</van-button
            >
          </template>
        </van-field>
        <van-field
          v-model="userInfo.password"
          type="password"
          left-icon="https://store-1303871256.cos.ap-chengdu.myqcloud.com/photo/u102.png"
          placeholder="请输入密码(6-20位数字、字母组成，字母开头)"
          :rules="[{ pattern, message: '密码格式不正确' }]"
        />
        <van-field
          v-model="userInfo.password2"
          type="password"
          left-icon="https://store-1303871256.cos.ap-chengdu.myqcloud.com/photo/u102.png"
          placeholder="请确认密码"
          :rules="[{ validator, message: '两次密码不一致' }]"
        />
        <van-checkbox v-model="userInfo.radio">
          已阅读并同意《<router-link to="agree"
            ><span id="sp1">用户许可协议</span></router-link
          >》
        </van-checkbox>
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit">
            注册
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      userInfo: {
        username: "",
        tel: "",
        password: "",
        password2: "",
        radio: "",
        sms: "",
      },
      pattern: /^[a-zA-Z]\w{5,20}$/,
      time: 60,
      si: "",
      status: false,
    };
  },
  methods: {
    onSubmit() {
      if (this.userInfo.radio) {
        Toast.loading({
        message: "注册中...",
        forbidClick: true,
        loadingType: "spinner",
      });
        this.$axios
          .post("/lg/userInfo", {
            name: this.userInfo.username,
            tel: this.userInfo.tel,
            password: this.userInfo.password,
            sms: this.userInfo.sms,
          })
          .then((response) => {
            console.log(response);
            if (response.data.statusCode == 200) {
              Toast.success("注册成功");
            } else {
              Toast.fail(response.data.massage);
            }
          })
          .catch((error) => {
            Toast.fail("注册失败，请检查网络连接或稍后重试");
          });
      } else {
        Toast.fail("请勾选用户服务协议");
      }
    },
    validator(val) {
      return val === this.userInfo.password;
    },
    onClickLeft() {
      this.$router.push({
        path: "/login",
      });
    },
    sendSMS() {
      Toast.loading({
        message: "发送中...",
        forbidClick: true,
        loadingType: "spinner",
      });
      this.$axios
        .get("/lg/send?tel=" + this.userInfo.tel, {})
        .then((response) => {
          console.log(response);
          if (response.data.statusCode == 200) {
            this.status = true;
            this.si = setInterval(this.handleTimeOut, 1000);
            Toast.success(response.data.massage);
          } else {
            Toast.fail(response.data.massage);
          }
        })
        .catch((error) => {
          Toast.fail("短信发送失败");
        });
    },
    handleTimeOut() {
      document.getElementById("btn_send").innerHTML = this.time + "s后重试";
      this.time--;
      if (this.time < 0) {
        clearInterval(this.si);
        this.time = 60;
        document.getElementById("btn_send").innerHTML = "发送验证码";
        this.status = false;
      }
    },
  },
};
</script>
<style scoped>
#main_div {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0px;
}
#body_div {
  position: relative;
  top: 5%;
  padding-left: 20px;
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