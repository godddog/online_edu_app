<template>
<div>
    <div>  
        <van-nav-bar title="我的课程" left-text="返回" left-arrow @click-left="onClickLeft"/>
     </div>
    <div> 
        
        <van-card v-model="Test"
        num="2"
          tag="标签"
        price="2.00"
         desc="描述信息"
         title="商品标题"
              thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
  origin-price="10.00"
/>       

               
    </div>
</div>
    
</template>
<script>
export default {
    data() {
        return{
      
        }

    },

     methods: {
    onClickLeft() {
    this.$router.push("/myClass");
    },
    }
    
}
</script>
<style scoped>

</style>