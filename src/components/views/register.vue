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
          v-model="username"
          left-icon="https://store-1303871256.cos.ap-chengdu.myqcloud.com/photo/u168.png"
          placeholder="请输入真实用户名"
          :rules="[{ required: true, message: '用户名不正确' }]"
        />
        <van-field
          v-model="tel"
          type="tel"
          left-icon="https://store-1303871256.cos.ap-chengdu.myqcloud.com/photo/u101.png"
          placeholder="请输入手机号"
          :rules="[{ required: true, message: '请输入手机号码' }]"
        />
        <van-field
          v-model="sms"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
          :rules="[{ required: true, message: '请输入验证码' }]"
        >
          <template #button>
            <van-button size="small" type="primary">发送验证码</van-button>
          </template>
        </van-field>
        <van-field
          v-model="password"
          type="password"
          left-icon="https://store-1303871256.cos.ap-chengdu.myqcloud.com/photo/u102.png"
          placeholder="请输入密码"
          :rules="[{ pattern, message: '密码格式不正确' }]"
        />
        <van-field
          v-model="password2"
          type="password"
          left-icon="https://store-1303871256.cos.ap-chengdu.myqcloud.com/photo/u102.png"
          placeholder="请确认密码"
          :rules="[{ validator, message: '两次密码不一致' }]"/>
        <van-radio-group v-model="radio">
          <van-radio name="1"
            >已阅读并同意《<router-link to="agree"
              ><span id="sp1">用户许可协议</span></router-link>》</van-radio>
        </van-radio-group>
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
export default {
  data() {
    return {
      username: "",
      tel: "",
      password: "",
      password2: "",
      redio: "1",
      sms: '',
      pattern: /^[a-zA-Z]\w{5,17}$/,
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    validator(val) {
      return val===this.password;
    },
     onClickLeft() {
      this.$router.push({
          path: '/login'
      })
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