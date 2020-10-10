<template>
  <div>
    <van-nav-bar title="订单管理" left-text="" left-arrow>
      <template #right>
        <van-button icon="search" size="18" @click="showNotify" />
        <van-notify v-model="show" type="none">
          <van-icon name="bell" style="margin-right: 4px" />
          <span
            ><form action="/">
              <van-search
                v-model="value"
                show-action
                @search="onSearch"
                @cancel="onCancel"
              /></form
          ></span>
          <span>
            <van-cell @touchstart.native.stop="show = true"></van-cell>
            <van-number-keyboard
              :show="show"
              v-model="value"
              @blur="show = true"
              @input="onInput"
              @delete="onDelete"
          /></span>
        </van-notify>
      </template>
    </van-nav-bar>
    <div v-if="orderinfo.length == 0">
      <van-empty
        image="http://www.axshare.cn/gsc/EX2C2X/40/37/99/403799691ab0480d9b541774fe6934f6/images/选课_搜索_/u328.png?token=a1ea0d8fd8c76ca25836387246d9d15c24ccaf9e8a0c49ebbe59e95a031f230c"
        description="暂无订单"
      />
    </div>
    <div v-else>
      <van-card
        price="182.00"
        title="helloworld"
        thumb="http://www.axshare.cn/gsc/EX2C2X/40/37/99/403799691ab0480d9b541774fe6934f6/images/老师课程/u560.png?token=c6e40ddd0468e5619d5e6416b162f5352fdd706088c56d2ba3a967f2ce1b9062"
      >
        <template #footer>
          <van-button round type="info" size="mini" color="#07c160"
            >报名成功</van-button
          >
        </template>
      </van-card>
      <van-divider />
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      show: false,
      value: "",
      orderinfo: [],
    };
  },
  methods: {
    showNotify() {
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, options);
    },
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      this.show = false;
    },
    onInput(value) {
      Toast(value);
    },
    onDelete() {
      Toast("删除");
    },
  },
};
</script>
<style scoped>
#title {
  padding-top: 30px;
}
</style>