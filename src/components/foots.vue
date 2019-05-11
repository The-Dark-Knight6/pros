<template>
    <div class="foots">
        <p class="desc">寄浮游于天地，渺沧海之一粟</p>
        <p class="tips">
           <span>Copyright ⓒ 2019 小付同学 版权所有</span>
            <img src="../assets/bg6.png" alt="">
           <span>粤ICP备15011178号-3</span>   
        </p>
        <p class="times">北京时间：{{tim}}</p>
    </div>    
</template>

<script>
export default {
  data(){
      return {
          tim : this.$moment().format('MMMM Do YYYY, h:mm:ss a')
      }
  },
  created(){
  }
}
</script>

<style lang="scss" scoped>
.foots{
    background: #eaf1f3;
    padding: .2rem .4rem;
    margin-top: .1rem;
    text-align: center;
    .desc{
        font-size: .16rem;
        color: gray;
        font-family: '楷体';
        margin: .15rem;
    }
    .times{
        font-size: .16rem;
        margin: .15rem;
    }
    .tips{
        margin: .15rem;
        >*{
            vertical-align: middle;
        }
        span{
            padding: 0 .1rem;
            font-size: .16rem;
        }
        img{
            width: .35rem;
        }
    }
}
</style>


