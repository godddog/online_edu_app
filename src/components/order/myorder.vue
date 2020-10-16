<template>
  <div>
    <van-nav-bar title="订单管理" left-text="返回" left-arrow>
      <template #right>
        <van-button icon="search" size="18" @click="showNotify" />
      </template>
    </van-nav-bar>
    <div v-if="orderinfo.length == 0">
      <van-empty
        image="http://www.axshare.cn/gsc/EX2C2X/40/37/99/403799691ab0480d9b541774fe6934f6/images/选课_搜索_/u328.png?token=d3a975309ff2921a672e8a3f04e5cca0b2d865f3542e8132aad1fe244e85e746"
        description="暂无订单"
      />
    </div>
    <div v-else>
      <van-card
        v-for="order in this.orderinfo"
        :key="order.id"
        :price="order.price"
        :title="order.title"
        :thumb="order.url"
        @click="toinfo(order.id)"
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
      orderinfo: [
        {
          id: 2,
          url:
            "http://www.axshare.cn/gsc/EX2C2X/40/37/99/403799691ab0480d9b541774fe6934f6/images/老师课程/u560.png?token=4f3ad681b4015bc0ec4a33835eb2bf465e8636516d56fbea302ff2c5cf4e5821",
          price: "128.00",
          title: "hello world",
        },
        {
          id: 3,
          url:
            "http://www.axshare.cn/gsc/EX2C2X/40/37/99/403799691ab0480d9b541774fe6934f6/images/老师课程/u560.png?token=4f3ad681b4015bc0ec4a33835eb2bf465e8636516d56fbea302ff2c5cf4e5821",
          price: "122.00",
          title: "hello",
        },
      ],
    };
  },
  methods: {
    showNotify() {
      this.show = true;
    },
    toinfo(id) {
      alert("hello" + id);
    },
  },
};
</script>
<style scoped>
#title {
  padding-top: 30px;
}
</style>