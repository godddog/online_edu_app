<template>
<div id="main_div">
     <van-nav-bar
  title="用户服务协议"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
<br/>
    <div id="u181_text" class="text ">
                <h4 style="color: rgb(18, 175, 248)">优学教育用户协议</h4>
                <p style="font-size:14px;text-align:left;"><span><br></span></p>
                <p style="font-size:14px;text-align:left;"><span>&nbsp;&nbsp; &nbsp;&nbsp; XXX教育尊重并保护所有使用XXX教育平台服务用户的个人隐私权。为了给您提供更准确、更有个性化的服务，XXX教育会按照本隐私权政策的规定使用和披露您的个人信息。但XXX教育将以高度勤勉、审慎的义务对待这些信息。除《XXX教育用户注册协议》及本隐私政策另有规定外，在未征得您事先许可的情况下，XXX教育不会将这些信息对外披露或向第三方提供。XXX教育会不时更新本隐私政策。您在同意XXX教育服务协议之时，即视为您已经同意本隐私政策全部内容。本隐私政策属于《XXX教育用户注册协议》不可分割的一部分。</span></p>
                <p style="font-size:14px;text-align:left;"><span>1. 适用范围</span></p>

                <p style="font-size:14px;text-align:left;"><span>&nbsp;&nbsp; &nbsp;&nbsp;a) 在您注册或激活可以登录XXX教育平台的账户时，您在XXX教育平台提供的个人注册信息（应法律法规要求需公示的企业名称等相关工商注册信息以及自然人经营者的信息除外）；</span></p>

                <p style="font-size:14px;text-align:left;"><span>&nbsp;&nbsp; &nbsp;&nbsp;b）在您使用XXX教育平台服务，或访问XXX教育平台网页时，XXX教育自动接收并记录的您的浏览器和计算机上的信息，包括但不限于您的IP地址、浏览器的类型、使用的语言、访问日期和时间、软硬件特征信息及您需求的网页记录等数据；如您下载或使用XXX教育或其关联公司移动客户端软件，或访问移动网页使用XXX教育平台服务时，XXX教育可能会读取与您位置和移动设备相关的信息，包括但不限于设备型号、设备识别码、操作系统、分辨率、电信运营商等。</span></p>
                <p style="font-size:14px;text-align:left;"><span>&nbsp;&nbsp; &nbsp;&nbsp;c）XXX教育通过合法途径从商业伙伴处取得的用户个人数据。</span></p>
                <p style="font-size:14px;text-align:left;"><span>&nbsp;&nbsp; &nbsp;&nbsp;d）在您使用部分平台的功能时，向我们提供的相关个人信息，例如电话号码、电子邮件或银行卡号，个人通讯录等；</span></p>

                <p style="font-size:14px;text-align:left;"><span>&nbsp;&nbsp; &nbsp;&nbsp;e）除上述信息外，为保证您能够正常使用XXX教育或其关联公司移动客户端软件的全部功能（包括但不限于您在使用XXX教育平台服务时能够与后台服务器保持即时通信、您能够及时收到个性化内容推送等），XXX教育可能会i）向您获取及调用您的开机广播用于启动XXX教育或其关联公司移动客户端软件，ii）采用第三方消息推送服务为您生成标识ID用于区分您的设备的唯一性。</span></p>

                <p style="font-size:14px;text-align:left;"><span>您了解并同意，以下信息不适用本隐私政策：</span></p>

                <p style="font-size:14px;text-align:left;"><span>&nbsp;&nbsp; &nbsp;&nbsp;a）您在使用XXX教育平台提供的搜索服务时输入的关键字信息；</span></p>

                <p style="font-size:14px;text-align:left;"><span>&nbsp;&nbsp; &nbsp;&nbsp;b）在您未选择“匿名购买”和/或“匿名评价”功能时，XXX教育收集到的您在XXX教育进行交易的有关数据，包括但不限于出价、成交信息及评价详情；</span></p>
                <p style="font-size:14px;text-align:left;"><span>&nbsp;&nbsp; &nbsp;&nbsp;c）信用评价、违反法律规定或违反XXX教育规则行为及XXX教育已对您采取的措施。</span></p>
 
                <p style="font-size:14px;text-align:left;"><span>2. 信息使用</span></p>

                <p style="font-size:14px;text-align:left;"><span>&nbsp;&nbsp; &nbsp;&nbsp;a) XXX教育不会向任何无关第三方提供、出售、出租、分享或交易您的个人信息，除非事先得到您的许可，或该第三方和XXX教育单独或共同为</span></p>
              </div>
</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.push({
          path: '/register'
      })
    },
  },
};
</script>
<style scoped>
#main_div {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
}
#u181_text{
    border-width: 0px;
    margin-left: 20px;
    margin-right: 20px;
}
</style>