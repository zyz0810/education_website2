<template>
  <div class="cont">
    <div class="content license_content text-center">
      <img src="./../../assets/img/license03.jpg"/>
      <img src="./../../assets/img/license02.jpg"/>
      <img src="./../../assets/img/license01.jpg"/>
    </div>
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
  .license_content{
    img{
      width: 100%;
    }
  }
</style>
