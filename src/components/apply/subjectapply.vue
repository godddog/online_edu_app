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
              placeholder="高中英语必会学习方法"
              />
            <van-field
              v-model="subjecttype"
              name="上课方式"
              label="上课方式"
              placeholder="在线"
            />
            <van-field
            v-model="subjecttime"
            name="上课时间"
            label="上课时间"
            placeholder="2020-05-20 20:30"
          />
          <van-field
          v-model="subjectprice"
          name="课程单价"
          label="课程单价"
          placeholder="480元/天"
        />
        <van-field
        v-model="totalprice"
        name="总课时费"
        label="总课时费"
        placeholder="2400元"
      />
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell title="支付宝支付" clickable @click="radio = '1'">
            <template #right-icon>
              <van-radio name="1" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
     
      <van-divider content-position="left">立即支付</van-divider>

            <div style="margin: 16px;">
              <van-button round block type="info" native-type="submit" @click="submit1">
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
        submit1(){
          this.$router.push('/verifyapply');
        }
            }
          };
    
          </script>
  
  <style>

  </style>
        