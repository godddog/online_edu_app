<template>
    <div>
        <div>
            <van-nav-bar
  left-text=" "
  title="课程详情"
  left-arrow
  @click-left="onClickLeft"

/>
        </div>

    <div>
        <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
        </template>
      </van-card>
        </div>
        
    </div>
        </template>
        
        <script>
        export default {
            methods: {
    onClickLeft() {
      Toast('返回');
    },

  },
        };
        
        </script>
        <style>
        .van-card{
            height:200px;
            background-color: aqua;
            width: 100%;
        }
        </style>