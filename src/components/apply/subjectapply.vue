<template>
    <div>
      <div>
        <van-nav-bar title="课程报名" left-text="" left-arrow onclick="goback">
          </van-nav-bar>
    </div>
    <div>
        <van-form @submit="onSubmit">
            <van-field
              v-model="subjectname"
              name="课程名称"
              label="课程名称"
              placeholder="课程名称"
            />
            <van-field
              v-model="subjecttype"
              name="上课方式"
              label="上课方式"
              placeholder="上课方式"
            />
            <van-field
            v-model="subjecttime"
            name="上课时间"
            label="上课时间"
            placeholder="上课时间"
          />
          <van-field
          v-model="subjectprice"
          name="课程单价"
          label="课程单价"
          placeholder="课程单价"
        />
        <van-field
        v-model="totalprice"
        name="总课时费"
        label="总课时费"
        placeholder="总课时费"
      />
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell title="微信支付" clickable @click="radio = '1'">
            <template #right-icon>
              <van-radio name="1" />
            </template>
          </van-cell>
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
        