<template>
  <div id="s100">
    <van-nav-bar left-text="返回" left-arrow
     @click-left="onClickLeft"
     >
      <template #right>
        <van-search
          v-model="value"
          show-action
          placeholder="请输入教师名或编号搜索"
          @search="onSearch"
          @cancel="onCancel"
        />
      </template>
    </van-nav-bar>
    <div id="d100" v-show="valStatus">
      <van-empty
  class="custom-image"
  image="https://img.yzcdn.cn/vant/custom-empty-image.png"
  description="无数据"
/>
    </div>
    <div id="s101" v-show="valStatus2">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <table>
          <tr v-for="item in teacherInfo" :key="item">
            <div id="s110">
              <td>
                <div id="s211">
                  <img :src="item.image" width="100%" />
                </div>
              </td>
              <td>
                <div id="s111">
                  <p id="p112">
                    <strong>{{ item.name }}</strong
                    >&ensp;&ensp;{{ item.subject }}&ensp;|&ensp;{{ item.grade }}
                  </p>
                  <p id="p113">{{ item.info }}</p>
                </div>
              </td>
              <td>
                <div id="s112">
                  <van-button type="info" size="small">查看所授课程</van-button>
                </div>
              </td>
            </div>
          </tr>
        </table>
      </van-list>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      value: "",
      valStatus: false,
      valStatus2: true,
      teacherInfo: [
        {
          image:
            "https://store-1303871256.cos.ap-chengdu.myqcloud.com/photo/teacher/t100.jpg",
          name: "tom",
          subject: "Java",
          grade: "幼儿园",
          info: "2008年起从事Java开发教学，在线明星教师,累计学员超过100万",
        },
        {
          image:
            "https://store-1303871256.cos.ap-chengdu.myqcloud.com/photo/teacher/t101.jpg",
          name: "pig",
          subject: "java",
          grade: "幼儿园",
          info: "2007年起从事Java开发教学，在线明星教师,累计学员超过100万",
        },
      ],
      loading: false,
      finished: false,
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        // for (let i = 0; i < 10; i++) {
        //   this.list.push(this.list.length + 1);
        // }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.teacherInfo.length > 0) {
          this.finished = true;
        }
      }, 1000);
    },
    onSearch(val) {
      if(val!=""){
        this.valStatus = true;
        this.valStatus2 = false;
     }
    },
    onCancel() {
      Toast("取消");
    },
     onClickLeft() {
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>
<style scoped>
#s101 {
  position: absolute;
  top: 60px;
  margin-left: 5px;
  width: 98%;
  height: 16%;
}
#s110 {
  margin-top: 10px;
  background-color: #f4f9fc;
  padding-bottom: 5px;
}
#s111 {
  margin-top: -20%;
  margin-left: 0px;
  position: relative;
  top: 40px;
  width: 200px;
}
#p112 {
  font-size: 15px;
}
#p113 {
  font-size: 13px;
}
#s211 {
  margin-top: 10px;
  width: 70px;
}
#s112 {
  margin-right: 10px;
  margin-top: -20%;
  position: relative;
  top: 50px;
}
#d100{
  margin-top: 100px;
}
</style>