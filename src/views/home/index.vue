<template>
  <div class="cont">
    <el-row>
      <img src="../../assets/img/banner.png" class="banner"/>
    </el-row>
    <el-row>
      <div class="content">
        <div class="text-center">
          <p class="title">移动大健康医药互联网平台</p>
          <p class="title_english gray">Anhui kangyaoduo Information Technology Co., Ltd</p>
          <div class="box">
            <p>安徽康药多总部位于安徽省合肥市。是一家快速成长的移动互联网大健康医药B2B平台，</p>
            <p>公司立足于安徽省，辐射全国单体店终端市场。</p>
          </div>
        </div>
        <p class="text-center title_two">公司简介</p>
<!--        <p>公司凭借着主营产品康药多，致力于为线下的药房、诊所等类型的终端门店提供便捷的在线订货服务。通过自营和供应商入驻的形式，将药品、保健品及健康食品等大健康领域商品提供给终端，为终端门店提供价格最低、品种最全的商品。</p>-->
        <p>公司凭借着主营产品康药多，致力于为线下的药房、诊所等类型的终端门店提供便捷的在线订货服务。</p>
        <p>安徽康药多凭借强大的技术水平，通过打通上下游。真正做到为供应商解决销售问题，为终端门店解决价格、品种及信息流通化问题。为供应商、终端提供各项安全保障。</p>
        <el-row class="flex">
          <el-col :span="12">
            <div><img src="../../assets/img/img01.png" /></div>
          </el-col>
          <el-col :span="12">
            <div class="f40">丰富的SKU产品线</div>
<!--            <p class="title_english gray">无限的库存量，实时库存保障。</p>-->
          </el-col>
        </el-row>

        <el-row class="flex">
          <el-col :span="10" :offset="2">
            <div class="f40">实时价格优惠</div>
<!--            <p class="title_english gray">促销活动丰富，价格实时变动</p>-->
          </el-col>
          <el-col :span="12" class="text-right">
            <div><img src="../../assets/img/img02.png" /></div>
          </el-col>

        </el-row>
        <el-row class="flex">
          <el-col :span="16">
            <div><img src="../../assets/img/img03.png" /></div>
          </el-col>
          <el-col :span="8">
            <div class="f40">随时随地采购</div>
<!--            <p class="title_english gray">想什么时候采购就什么时候采购</p>-->
          </el-col>
        </el-row>
        <el-row class="flex">
          <el-col :span="10" :offset="2">
            <div class="f40">省时更省心</div>
<!--            <p class="title_english gray">价格公开透明，货比三家，用起来更省心</p>-->
          </el-col>
          <el-col :span="12" class="text-right">
            <div><img src="../../assets/img/img04.png" /></div>
          </el-col>
        </el-row>
        <el-row class="flex">
          <el-col :span="12">
            <div><img src="../../assets/img/img01.png" /></div>
          </el-col>
          <el-col :span="12">
            <div class="f40">充满激情</div>
<!--            <p class="title_english gray">康药多领先的保健品、药品经营模式下，每天都在不断的进步，充满激情。</p>-->
          </el-col>
        </el-row>

      </div>
<!--      <div class="flex content top">-->
<!--        <div class="flex-item text-center">-->
<!--          <img src="../../assets/img/bottom01.png"/>-->
<!--          <p class="bold f18">安全</p>-->
<!--          <div class="gray">每件产品唯一的电子监管码</div>-->
<!--        </div>-->
<!--        <div class="flex-item text-center">-->
<!--          <img src="../../assets/img/bottom02.png"/>-->
<!--          <p class="bold f18">规范</p>-->
<!--          <div class="gray">严格遵循保健品、药品行业规范，实行带票销售，票账货款一致</div>-->
<!--        </div>-->
<!--        <div class="flex-item text-center">-->
<!--          <img src="../../assets/img/bottom03.png"/>-->
<!--          <p class="bold f18">便捷</p>-->
<!--          <div class="gray">轻松一键下单，48小时内送货直达</div>-->
<!--        </div>-->
<!--      </div>-->
    </el-row>

    <el-row class="bottom">
      <div class="content clearfix">
        <ul>
          <li class="f20 mb20">关于我们</li>
          <li>公司简介</li>
          <li>团队介绍</li>
          <li>发展历程</li>
          <li>服务客户</li>
          <li><router-link tag="a" target="_blank" :to="{path:'/license'}">执照公示</router-link></li>
        </ul>
        <ul>
          <li class="f20 mb20">帮助</li>
          <li>APP操作流程</li>
          <li>售后服务</li>
        </ul>
        <ul>
          <li class="f20 mb20">联系我们</li>
          <li>联系我们</li>
          <li>加入我们</li>
        </ul>
        <ul style="width: 350px; float: right;">
          <li class="f20 mb20"><a href="https://beian.miit.gov.cn/#/Integrated/index">备案号：皖ICP备20012200号</a></li>
        </ul>
      </div>
    </el-row>

  </div>
</template>

<script>



export default {
  name: 'Login',
  data() {

    return {

    }
  },
}
</script>



<style lang="scss" scoped>
  .cont{
    width: 100%;
  }
  .banner{
    width: 100%;
  }
  ul,li{
    list-style: none;
    line-height: 2em;
    color: #fff;
    font-size: 14px;
  }
  ul{
    width: 200px;
    float: left;
  }
  .clearfix {
    zoom: 1;
  }
  .top{
    align-items: flex-start !important;
  }

  /*==for IE6/7 Maxthon2==*/
  .clearfix:after {
    clear: both;
    content: '.';
    display: block;
    width: 0;
    height: 0;
    visibility: hidden;
  }
  .bottom{
    background: rgb(49,52,43);
    padding: 50px 0;
    .content{
      padding-bottom: 30px;
      border-bottom: 1px solid rgb(62,65,56);
    }
  }
  .bold{
    font-weight: bold;
  }
  .f18{
    font-size: 18px;
  }
  .mb20{
    margin-bottom: 5px;
  }
  .f20{
    font-size: 20px;
  }
  .f40{
    font-size: 40px;
  }
  .flex{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .flex-item{
    flex:1;
  }
  .flex-center{
    flex: 1;
    justify-content: center;
    align-content: space-between;
    align-items: center;
  }
  .content{
    width: 1200px;
    margin: 0 auto 20px;
  }
  .box{
    padding: 30px 0;
    margin-top: 20px;
    border: 1px solid #e8e4e4ad;
    border-bottom: 5px solid rgb(104,115,81);
    p{
      margin: 0;

    }
  }
  .title{
    font-size: 36px;
    margin-bottom: 0;
  }
  .gray{
    color:#999;
  }
  .title_english{
    font-size: 20px;
    margin-top: 10px;
  }
  .title_two{
    font-size: 26px;
    margin-top: 30px;
  }
  p{
    line-height: 2em;
  }
</style>
