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
          left-icon="http://www.axshare.cn/gsc/EX2C2X/40/37/99/403799691ab0480d9b541774fe6934f6/images/%E6%B3%A8%E5%86%8C/u168.png?token=21d4881111a5f99e84ea9e6530bb89cf828203c99ac067201d4f4d6294a07419"
          placeholder="请输入真实用户名"
          :rules="[{ required: true, message: '用户名不正确' }]"
        />
        <van-field
          v-model="tel"
          type="tel"
          left-icon="http://www.axshare.cn/gsc/EX2C2X/40/37/99/403799691ab0480d9b541774fe6934f6/images/%E7%99%BB%E9%99%86/u101.png?token=ec0c2fa363d53332db5706bd311bd9c01b3e39b6a50a3453a5a8d7ca44de6384"
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
          left-icon="http://www.axshare.cn/gsc/EX2C2X/40/37/99/403799691ab0480d9b541774fe6934f6/images/%E7%99%BB%E9%99%86/u101.png?token=ec0c2fa363d53332db5706bd311bd9c01b3e39b6a50a3453a5a8d7ca44de6384"
          placeholder="请输入密码"
          :rules="[{ pattern, message: '密码格式不正确' }]"
        />
        <van-field
          v-model="password2"
          type="password"
          left-icon="http://www.axshare.cn/gsc/EX2C2X/40/37/99/403799691ab0480d9b541774fe6934f6/images/%E7%99%BB%E9%99%86/u101.png?token=ec0c2fa363d53332db5706bd311bd9c01b3e39b6a50a3453a5a8d7ca44de6384"
          placeholder="请确认密码"
          :rules="[{ validator, message: '两次密码不一致' }]"
        />
        <van-radio-group v-model="radio">
          <van-radio name="1"
            >已阅读并同意《<router-link to="#"
              ><span id="sp1">用户许可协议</span></router-link
            >》</van-radio
          >
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
    validatorName(val) {
      return /[\u4e00-\u9fa5_a-zA-Z0-9_]{4,10}/.test(val);
    },
    validator(val) {
      return val===this.password;
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