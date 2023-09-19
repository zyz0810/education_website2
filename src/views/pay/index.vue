<template>
  <div>
    <div class="content">
      <el-row>
        <el-col :span="24">
          <div class="title-top"
               @click='getPublicTransferCashierDesk()'>
            <div class="logo-img"><img src="../../assets/img/logo.png" /></div>
            <div class="title-name">康药多收银平台</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="content2">
      <!--(toLiveBtn != "00天00时00分00秒" && !payResult) ||  -->
      <div v-if='payResult  != "0000" && paymentStatus == 0 && toLiveBtn != "00天00时00分00秒"'>
        <el-row class="order-box">
          <el-col :span="24">
            <div class="r-infor">
              <div>订单提交成功，请尽快付款！订单号：{{orderSn || ''}}</div>
              <div class="pay-money red">应付金额 {{payAmount || 0.00}}元</div>
            </div>
            <div class="r-infor">
              <div>请您在<span class="red"> {{toLiveBtn}} </span>内完成支付，否则订单会被自动取消</div>
              <div @click="orderDetail"
                   class='blue'>订单详情
                <img :class="showDetail ? 'transform' :'' "
                     class="icon-more"
                     src="../../assets/img/more.png" />
              </div>
            </div>
          </el-col>
        </el-row>
        <!--订单信息-->
        <el-row v-if='showDetail'
                class="order-detail">
          <el-col :span="24">
            <div class="x-address">
              <span>收货地址：{{receiverAddress}}</span>
              <span>收件人：{{consignee}}</span>
              <span>{{phone}}</span>
            </div>
            <div class="x-goods">商品名称：{{productNameList}}</div>

          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="bank-box">
              <div class="choose-bank"
                   type="primary">请选择银行网银</div>
              <div class="x-list">
                <div v-for='(item,index) in  bankItemList'
                     :key='index'
                     @click="submitPayment(item)"
                     class="t-name">
                  <img alt="暂无图片"
                       :src="item.imgUrl">
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!--支付结果：0000成功，9999待支付，0001失败，0002订单异常-->
      <!--支付状态 0:未支付 1:已支付 2：取消-->
      <div v-if='payResult == "0000" || paymentStatus == 1'
           class="no-data">
        <img class="icon-success"
             src='../../assets/img/icon_success.png'>
        <div>支付成功！您可以进app查看订单详情，关注发货状态</div>
      </div>
      <!--客户取消-->
      <div v-if='paymentStatus == 2 || payResult == "0003" '
           class="no-data">
        <img class="icon-cancel"
             src='../../assets/img/icon_cancel.png'>
        <div>当前链接订单已取消，如需购买请重新在app下单</div>
      </div>
      <!--超时-->
      <div v-if='toLiveBtn == "00天00时00分00秒" && paymentStatus == 0'
           class="no-data">
        <img class="icon-cancel"
             src='../../assets/img/icon_cancel.png'>
        <div>当前链接超出时间已取消，如需购买请重新在app下单</div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  bankList,
  getPublicTransferCashierDesk,
  submitPayment,
  queryPayResult
} from '@/api/pay'
export default {
  name: 'Login',
  data () {
    return {
      orderSn: '',
      payAmount: '0.00',
      bankItemList: [],
      showDetail: false,
      receiverAddress: ' ',
      phone: '',
      consignee: '',
      productNameList: '',
      countDownNum: 0, //倒计时秒
      toLiveBtn: '',
      paymentSn: '',
      publicTransferPayUrl: '',
      payResult: '', //支付结果：0000成功，9999待支付，0001失败，0002订单异常 0003订单取消
      stop: 0,
      paymentStatus: 0, // 支付状态 0:未支付 1:已支付 2：取消
    };
  },
  async mounted () {
    // console.log(this.$route.query)
    this.orderSn = this.$route.query.orderSn  //获取url中的参数
    this.paymentSn = this.$route.query.paymentSn //支付编号 

    if (localStorage.getItem('paymentSn')) {
      window.localStorage.clear();
    }

    this.countdown()
    this.bankList()
    this.getPublicTransferCashierDesk()
    if (this.paymentSn || localStorage.getItem('paymentSn')) {
      this.queryPayResult()
    }
  },
  //当离开页面时，清除倒计时
  beforeDestroy () {
    clearInterval(this._interval)
  },
  methods: {
    // 查询结果
    queryPayResult () {
      const that = this
      queryPayResult({ paymentSn: this.paymentSn || localStorage.getItem('paymentSn') }).then((res) => {
        this.payResult = res.data.payResult
      });
      // that._intervalResult = setInterval(() => {
      // if ((this.paymentSn || localStorage.getItem('paymentSn')) && this.stop == 0) {
      //   queryPayResult({ paymentSn: this.paymentSn || localStorage.getItem('paymentSn') }).then((res) => {
      //     //  payResult: '', //支付结果：0000成功，9999待支付，0001失败，0002订单异常  0003订单取消
      //     this.payResult = res.data.payResult
      //     this.stop = 1  //停止刷新
      //     console.log(this.payResult)
      //   });
      // }
      // }, 1000);
    },
    // 提交订单
    submitPayment (val) {
      submitPayment({ orderSn: this.orderSn, bankId: val.id }).then((res) => {
        this.paymentSn = localStorage.setItem('paymentSn', res.data.paymentSn)
        this.publicTransferPayUrl = res.data.publicTransferPayUrl

        window.open(this.publicTransferPayUrl, '_self')
        // window.open(this.publicTransferPayUrl, '_blank')
        // window.location.replace(val);
      });
    },
    // 订单信息
    getPublicTransferCashierDesk () {
      getPublicTransferCashierDesk({ orderSn: this.orderSn }).then((res) => {
        this.orderSn = res.data.orderSn
        this.payAmount = res.data.payAmount
        this.phone = res.data.phone
        this.consignee = res.data.consignee
        this.productNameList = res.data.productNameList
        this.receiverAddress = res.data.receiverAddress
        this.countDownNum = res.data.countDownNum
        this.paymentStatus = res.data.paymentStatus // 支付状态 0:未支付 1:已支付 2：取消
        // this.paymentStatus = 2 // 支付状态 0:未支付 1:已支付 2：取消
      });
    },
    // 银行列表信息
    bankList () {
      bankList().then((res) => {
        this.bankItemList = res.data;
      });
    },
    // 倒计时事件
    countdown () {
      const that = this
      that._interval = setInterval(() => {
        if (that.countDownNum == 0) {
          clearInterval(that._interval)// 计时结束，清除缓存
          that.toLiveBtn = `00天00时00分00秒`
        } else {
          that.countDownNum--
          let day = parseInt(that.countDownNum / 60 / 60 / 24)
          let hr = parseInt(that.countDownNum / 60 / 60 % 24)
          let min = parseInt(that.countDownNum / 60 % 60)
          let sec = parseInt(that.countDownNum % 60)

          day = day > 9 ? day : '0' + day
          hr = hr > 9 ? hr : '0' + hr
          min = min > 9 ? min : '0' + min
          sec = sec > 9 ? sec : '0' + sec
          that.toLiveBtn = `${day}天${hr}时${min}分${sec}秒`
        }
      }, 1000);
    },

    // 订单详情
    orderDetail () {
      this.showDetail = !this.showDetail
    }
  },
  beforeRouteEnter (to, form, next) {
    window.document.body.style.backgroundColor = '#f2f2f2'
    next()
  },
  beforeRouteLeave (to, form, next) {
    window.document.body.style.backgroundColor = ''
    next()
  },

}
</script>
<style lang="scss" scoped>
.content {
  background: white;
  height: 100px;
  font-size: 14px;
  position: relative;
  border-top: 30px solid #2a82db;
  border-bottom: 1px solid #cccccc;
  box-sizing: border-box;
  width: 1065px;
  min-width: 1065px;
  width: 100%;
}
.content2 {
  background: white;
  height: 100%;
  width: 1065px;
  min-width: 1065px;
  font-size: 14px;
  margin: auto;
}
.title-top {
  width: 1065px;
  min-width: 1065px;
  position: absolute;
  height: 75px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -0%);
  display: flex;
  justify-items: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  .logo-img {
    display: inline-block;
    margin-right: 10px;
    img {
      width: 42px;
    }
  }
  .title-name {
    display: inline-block;
    color: #2a82db;
    font-weight: 600;
    font-size: 30px;
  }
}

.order-box {
  padding: 20px 0px;
  background: #f5f5f5;
  color: #444444;
  .r-infor {
    display: flex;
    justify-content: space-between;
    line-height: 1.8em;
    .pay-money {
      font-size: 18px;
    }
    .icon-more {
      width: 13px;
      vertical-align: middle;
      margin: 0px 0px 0px 4px;
    }
  }
}
.order-detail {
  padding: 10px 0px 20px 0px;
  border-top: 5px solid #2a82db;
  line-height: 1.6em;
  background: #f5f5f5;
  color: #444444;
  .x-address {
    span {
      padding-right: 20px;
    }
  }
}
.bank-box {
  padding: 30px 50px;
  // height: 65vh;
  min-height: 65vh;
  // overflow: hidden;
  .x-list {
    display: flex;
    margin: 0px 0px 0px 0px;
    flex-direction: row;
    flex-wrap: wrap;
    // min-height: 62vh;
    // height: 62vh;
    // height: 100%;
    // overflow-y: scroll;
    padding: 20px 0px 20px 0px;
    .t-name {
      margin: 30px 20px 0px 0px;
      cursor: pointer;
      width: 177px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-items: center;
      &:nth-child(5n) {
        margin: 30px 0px 0px 0px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    // &::-webkit-scrollbar {
    //   display: none;
    // }
  }
}
.red {
  color: red;
}
.blue {
  color: #1890ff;
  cursor: pointer;
}
.transform {
  transform: rotate(90deg);
}
.no-data {
  position: absolute;
  top: 50%;
  text-align: center;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #444444;
  font-size: 15px;
}
.choose-bank {
  width: 100px;
  padding: 10px 0px;
  border-bottom: 2px solid #1890ff;
  color: #444444;
}
.icon-success {
  margin-bottom: 50px;
  width: 100px;
}
.icon-cancel {
  margin-bottom: 50px;
  width: 150px;
}
</style>
