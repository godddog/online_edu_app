<template>
    <div>
        <div class="div1-1">
            <van-nav-bar
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            />
        </div>
        <div class="div1-2">上传作业</div>
        <div class="div1-3">&nbsp</div>
        <div class="div2-1">
            <el-upload
                class="upload-demo"
                action="http://localhost:8088/myteacher-service/upload"
                with-credentials = "true"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                :on-success="handleSucess"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList">
                <el-button size="middle" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        fileList: [
            // {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, 
            // {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
            {
                name: '',
                url: ''
            },
        ]
      };
    },
    methods: {
      onClickLeft() {
        this.$router.back();
      },
      handleRemove(file, fileList) {
          console.log("handleRemove:处理移除文件")
        console.log(file, fileList);
        console.log("handleRemove:处理移除文件完成")
      },
      handlePreview(file) {
          console.log("handlePreview:handlePreview")
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
          console.log("beforeRemove:移除前弹窗提示")
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      handleSucess(){
          alert("success!")
      }
    }
}
</script>
<style scoped>
.div1-1{
    width: 30%;
    float: left;
}
.div1-2{
    width: 50%;
    float: left;
    font-weight:bold;
    margin-top: 4%;
}
.div1-3{
    width: 20%;
}
.div2-1{
    width: 100%;
    height: 100%;
    padding-bottom: 10%;
}
</style>