<template>
  <div>
    <van-nav-bar title="订单详情" left-arrow @click-left="onClickLeft" />

    <van-row style="padding-top: 10px">
      <van-col span="4">
        <van-image
          width="61"
          height="57"
          src="http://www.axshare.cn/gsc/EX2C2X/40/37/99/403799691ab0480d9b541774fe6934f6/images/订单详情/u824.png?token=4ab765edd4d34eb7efbd0794ef05394dff383da4387700ad5f36af267142765d"
        />
      </van-col>
      <van-col span="15" offset="1">
        <div class="van-ellipsis" style="font-size: 18px">报名成功</div>
        <div class="van-multi-ellipsis--l2" style="font-size: 10px">
          鸟欲高飞先振翅，人求上进先读书!
        </div>
      </van-col>
    </van-row>
    <van-divider />
    <van-card
      price="480.00/月"
      title="2020高考物理抢跑夺分特训营"
      thumb="http://www.axshare.cn/gsc/EX2C2X/40/37/99/403799691ab0480d9b541774fe6934f6/images/老师课程/u560.png?token=4f3ad681b4015bc0ec4a33835eb2bf465e8636516d56fbea302ff2c5cf4e5821"
    >
    </van-card>
    <van-divider />
    <van-row justify="space-around">
      <van-col col span="15" offset="0"
        ><div class="van-ellipsis" style="font-size: 13px">
          订单号：2019040110235662
        </div>
        <div class="van-ellipsis" style="font-size: 13px">
          付款时间：2019-05-22 15:30:58
        </div></van-col
      >
      <van-col span="8"
        ><van-button round type="info" color="#f2f2f2" size="small"
          ><p style="color: black">复制</p></van-button
        ></van-col
      >
    </van-row>
  </div>
</template>
<script>
import { Toast } from "vant";

export default {
  methods: {
    onClickLeft() {
      Toast("返回");
    },
  },
};
</script>
<style scoped>
#title {
  padding-top: 30px;
}
</style>