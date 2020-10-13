<template>
<div>
    <van-nav-bar
    title="标题"
    left-text="返回"
    right-text="按钮"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
  <van-search
  v-model="value"
  show-action
  label="地址"
  placeholder="请输入搜索关键词"
  @search="onSearch"
>
  <template #action>
    <div @click="onSearch">搜索</div>
  </template>
</van-search>
    </div>
    </template>
    
    <script>
    export default {
        methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast('按钮');
    },
  },
    };
    
    </script>
    <style>
    
    </style>