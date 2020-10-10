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
          v-model="username"
          placeholder="请输入用户名"
          left-icon="	https://store-1303871256.cos.ap-chengdu.myqcloud.com/photo/u101.png"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          left-icon="https://store-1303871256.cos.ap-chengdu.myqcloud.com/photo/u102.png"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
      <van-row>
        <van-col span="8"><font></font></van-col>
        <van-col span="8"></van-col>
        <van-col span="8"><router-link to="forget">
          <span id="sp1">忘记密码</span></router-link></van-col >
      </van-row>
    </div>
    <div id="foot_div">
      <img src="@/assets/images/u117.png" width="100%" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
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