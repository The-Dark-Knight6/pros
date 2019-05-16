<template>
    <div class="foots">
        <p class="desc"> - - 寄浮游于天地，渺沧海之一粟 - - </p>
        <p class="tips">
           <span>Copyright ⓒ {{the_year}} 小付同学 版权所有</span>
            <img src="../assets/bg6.png" alt="backgournd_img">
           <span>粤ICP备15011178号-3</span>   
        </p>
        <p class="times"></p>
    </div>    
</template>

<script>
export default {
  data(){
      return {
          the_year : new Date().getFullYear()
      }
  },
  methods : {
    //   实时显示当前时间
   now(){
       var nowtime = new Date()
       var year = nowtime.getFullYear()
       var month = nowtime.getMonth() + 1
       var day = nowtime.getDate()
       document.querySelector('.times').innerHTML = '北京时间：' +
       year + '-' + month + '-' + day + ' ' + nowtime.toLocaleTimeString()
   },
  },
  mounted(){
    this.now()
    setInterval(this.now,1000)
  }
}
</script>

<style lang="scss" scoped>
.foots{
    background: #eaf1f3;
    padding:.4rem;
    margin-top: .1rem;
    text-align: center;
    font-family: '楷体';
    >*{
        font-size: 12px;
    }
    .desc{
        color: gray;
        margin: .15rem;
    }
    .times{
        margin: .15rem;
    }
    .tips{
        margin: .15rem;
        *{
            vertical-align: middle;
        }
        span{
            padding: 0 .1rem;
        }
        img{
            width: .35rem;
        }
    }
}
</style>


