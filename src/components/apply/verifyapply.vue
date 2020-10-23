<template>
    <div>
      <div>
        <van-nav-bar title="确认报名信息" left-text="" left-arrow onclick="goback">
          </van-nav-bar>
    </div>
    <div>
        <van-form @submit="onSubmit">
            <van-field
              v-model="totaltime"
              name="总课时"
              label="总课时"
              placeholder="5天"
            />
            <van-field
              v-model="price"
              name="单价"
              label="单价"
              placeholder="480元/天"
            />
            <van-field
            v-model="money"
            name="课时费"
            label="课时费"
            placeholder="2400元"
          />

      <van-radio-group v-model="radio">
        <van-cell-group>

          <van-cell title="支付宝支付" clickable @click="radio = '2'">
            <template #right-icon>
              <van-radio name="2" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
     
      <van-divider content-position="left">支付方式</van-divider>

            <div style="margin: 16px;">
              <van-button round block type="info" native-type="submit">
                立即支付
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
             username: '',
             password: '',
             };
        },
            methods:{
              goback(){
             this.$router.go(-1);
            },
            onSubmit(values) {
        console.log('submit', values);
        },
            }
          };
    
          </script>
  
  <style>

  </style>
        