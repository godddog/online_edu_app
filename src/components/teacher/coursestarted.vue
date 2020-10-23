<template>
    <div>
               <div class="div1-1">
            <van-nav-bar
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            />
        </div>
        <div class="div1-2">我的课程</div>
        <div class="div2-1">
            <!-- <img width="100%" height="100%" src="https://army-1303896772.cos.ap-nanjing.myqcloud.com/education/u947.jpg"/> -->
            <div class="player-container">
                <video-player video-player class="vjs-custom-skin" :options="playerOptions"></video-player>
            </div>
        </div>
        <div class="div2-2">
            <div class="div2-3">{{subjectInfo.miaoshu}}</div>
            <div class="div2-4-1">时间 : </div><div class="div2-4-2"><p>{{subjectInfo.startLiveTime}}</p></div>
            <div class="div2-4-3">时长 : </div><div class="div2-4-4"><p>{{subjectInfo.time}} 天</p></div>
            <div class="div2-4-5">老师 : </div><div class="div2-4-6"><p>{{teacher.name}}</p></div>
        </div>
        <div class="div3">
            <!-- &nbsp -->
        </div>
        <div class="div4">
            <div class="div4-1">
                课程目录<van-divider />
            </div>
            <div class="div4-2">
                <table>
                    <tr v-for="(catalogue ,index) in subjectCatalogue" :key="catalogue" :title="item">
                        <td><div class="div_td1">{{index+1}}</div></td>
                        <td>
                            <div class="div_td1">{{catalogue.s_name}}</div>
                            <div class="div_td3">直播时间</div>
                            <div class="div_td4">{{catalogue.s_liveTime}}</div>
                        </td>
                        <td>
                            <div class="div_td5">
                               直播回看
                            </div>
                        </td>
                        <van-divider />
                        
                    </tr>
                    
                </table>
            </div>         
        </div>
    </div>
</template>
<script>
//引入video样式
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
export default {
        data() {
        return{
            playerOptions: {
            playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
            autoplay: false, //如果true,浏览器准备好时开始回放。
            controls: true, //控制条
            preload: 'auto', //视频预加载
            muted: false, //默认情况下将会消除任何音频。
            loop: false, //导致视频一结束就重新开始。
            language: 'zh-CN',
            aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: [{
                type: 'video/mp4',
                src: 'http://qih85hm7z.hn-bkt.clouddn.com/20200916_8redis-other.mp4'//你所放置的视频的地址，最好是放在服务器上
            }],
            poster: "http://qih85hm7z.hn-bkt.clouddn.com/u947.jpg", //你的封面地址（覆盖在视频上面的图片）
            width: document.documentElement.clientWidth,
            notSupportedMessage: '此视频暂无法播放，请稍后再试' //允许覆盖Video.js无法播放媒体源时显示的默认信息。
            },

            subjectInfo:{
                startLiveTime:"11月20日 20:30",
                miaoshu:"2020高考物理抢跑夺分特训营",
                time:"60",
            },
            teacher: {
            id: "5",
            name:"李雪梅",
            subject:"语文",
            grade:"高一",
            info:"2008年起从事高中语文教学，在线课程明星教师，累计学员超过100万"
            },
            subjectCatalogue:[
                {
                    s_liveTime:" 2019-05-22 10:30",
                    s_name:"高中数学解三角形+角平分线难点突破1",
                },
                {
                    s_liveTime:" 2019-05-23 10:30",
                    s_name:"高中数学解三角形+角平分线难点突破2",
                },
                {
                    s_liveTime:" 2019-05-24 10:30",
                    s_name:"高中数学解三角形+角平分线难点突破3",
                },
            ]
        }
    },
    methods: {  
        onClickLeft() {
            this.$router.back();
        },
    },
    created: function(){
        var sub_id = this.$route.params.sub_id;
        console.log(sub_id);
        var t_id = this.$route.params.t_id;
        console.log(t_id);
        this.$axios
        .get("myteacher-service/courseNotStart",{
            params:{
                sub_id: sub_id,
                t_id: t_id
            }   
        })
        .then(response=>{
            // console.log(response);
            if(response.status == 200){
                this.teacher = response.data.teacher;
                this.subjectInfo = response.data.subjectVo;
                this.subjectCatalogue = response.data.courseVos;
            }
        })
        .catch(error=>{
             alert(error)
        })

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
.div2-1{
    /* position: absolute; */
     padding-top: 13%;
    width: 100%;
}
.div2-2{
    text-align: center;
    margin-top: -3%;
    padding-top: 4%;
    padding-bottom: 1%;
    color: black;
}
.div2-3{
    
    width: 100%;
    margin: 2% 3% 10% 2%;
    text-align: left;
    font-size: 24px;
}
.div2-4-1,.div2-4-3,.div2-4-5{

    position: absolute;
    width: 20%;
    margin-left:2%;
    text-align: left;
    font-size: 20px;
    color:slategrey
}
.div2-4-2,.div2-4-4,.div2-4-6{
    width: 80%;
    margin-left: 20%;
    text-align: left;
    font-size: 20px;
}
.div3{
    background-color: rgba(167, 172, 172, 0.144);
    width: 100%;
}
.div4{
    width: 100%;
    margin-top: 2%;     
}
.div4-1{
    text-align: left;
    font-size: 25px;
    margin-left: 2%;
}
.div_td1{
    position: relative;  
}
.div_td2{
    position: relative;
    text-align: center;
}
.div_td3{
    position: relative;
    margin-left: -60%;
    margin-top: 3%;
}
.div_td4{
    position: relative;
    margin-left: 30%;
    margin-top: -7%;
}
.div_td5{
     position: absolute;
     margin-top: -3%;
}
tr{
    height: 70px;
}
</style>