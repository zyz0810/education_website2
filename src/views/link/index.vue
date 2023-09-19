<template>
  <div class="link_cont text-center">
    <el-row type="flex" justify="center" class="link_box">
        <el-col :span="8" class="link_item" :class="{active:activeIndex == 0}" @mouseenter.native="enters(0)">
          <a href="https://omc.kyaoduo.com/#/">
            <img src="./../../assets/img/link_01.png"/>
            <div class="f20">康药多运营中心后台</div>
            <p>多样化的开放业务场景，共建良好的电商行业生态，为海量商家提供电商业务场景中的内容优化、店铺经营或咨询类服务。</p>
            <span class="span_btn">进入</span>
          </a>
        </el-col>
        <el-col :span="8" class="link_item" :offset="1" :class="{active:activeIndex == 1}" @mouseenter.native="enters(1)">
          <a href="https://shop.kyaoduo.com/#/">
            <img src="./../../assets/img/link_02.png"/>
            <div class="f20">康药多商家后台</div>
            <p> 商家可随时随地关注店铺销售数据，并迅速对店铺商品及促销做出调整，提醒即将超时订单及违规数量，提升商家工作效率及销售业绩。</p>
            <span class="span_btn">进入</span>
          </a>
        </el-col>
        <el-col :span="8" class="link_item" :offset="1" :class="{active:activeIndex == 2}" @mouseenter.native="enters(2)">
          <a href="https://crm.kyaoduo.com/#/">
            <img src="./../../assets/img/link_03.png"/>
            <div class="f20">康药麦麦管理后台</div>
            <p>实现全方位连接销售管理，根治企业管理3大顽疾，6大功能赢得客户，SaaS模式引领未来，新一代智能化外勤行为管理方案，专注解决企业营销问题。</p>
            <span class="span_btn">进入</span>
          </a>
        </el-col>
    </el-row>
  </div>
</template>

<script>



export default {
  name: 'linkIndex',
  data() {
    return {
      activeIndex:1,
      // activeStatus:[false,true,false],
    }
  },
  methods:{
    enters(index) {
      this.activeIndex = index;
      // this.activeStatus[index] = true;  // 当前鼠标悬浮所在的放大
      // for (let m = 0; m < this.activeStatus.length; m++) { // 循环数组
      //   if (m === index) {
      //     this.activeStatus[m] = true;  // 当前鼠标悬浮所在的放大
      //   } else {
      //     this.activeStatus[m] = false;
      //   }
      // }
    },
  }
}
</script>

<style lang="scss" scoped>
  .f20{
    font-size: 20px;
  }
  .link_cont{
    padding: 2%;
    box-sizing: border-box;
    width: 100%;
    min-width: 1400px;
    height: 100%;
    color: #fff;
    overflow: auto;
    background: rgb(35,80,225);
    position: relative;
    .link_box{
      /*max-width: 2000px;*/
      /*min-width: 550px;*/
      /*width: 1500px;*/
      width: 1220px;
      margin: 0 auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    img{
      /*width: 8vw;*/
      width: 110px;
      margin: 10px 0;
    }
    /*&>div{*/
    /*  flex-wrap:wrap;*/
    /*}*/
    .link_item{
      /*height: 100vh;*/
      position: relative;
      border-radius: 50%;
      background: rgb(35,80,225);
      position: relative;
      &.active{
        z-index: 9999;
        display: inline-block;
        box-shadow: 2px 2px 20px #fff;
        transform: scale(1.4,1.4);
        transition: all 0.5s;
        .span_btn{
          color: rgb(35,80,225);
          background: #fff;
        }
      }
      a{
        width: 100%;
        height: 100%;
        /*padding: 20px 20px 50px;*/
        padding: 30px 20px 80px;
        border-radius: 50%;
        display: block;
      }
      p{
        font-size: 14px;
        line-height: 1.8;
        color: rgb(211,215,246);
      }
      .span_btn{
        display: inline-block;
        width: 74px;
        font-size: 14px;
        padding: 5px 20px;
        margin-top: 20px;
        border: 1px solid #fff;
        border-radius: 30px;
        position: absolute;
        bottom: 20px;
        /*left: 10px;*/
        left: 50%;
        transform: translate(-50%, 0);
      }
    }
  }
</style>
