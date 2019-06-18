<template>
  <div id="app">
    <navs id="fly"></navs>
      <router-view id="views"></router-view>
      <i class="el-icon-top tops" @click="back_top" v-show="toshow"></i>
    <foots></foots>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      toshow : false
    }
  },
  methods : {
    // 返回顶部的方法  setinterval()增加过渡时间 平滑返回顶部
    back_top(){
      let that = this;
     let timer = setInterval(() => {
       let ispeed = Math.floor(-that.scrollTop/5);
       document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed;
       if(that.scrollTop === 0){
         clearInterval(timer);
       }
     }, 40);
    },
    // 计算滑动条和顶部的距离 当距离大于**时 显示 返回顶部标签
    scrolltotop(){
      let that = this;
      let scrotop = window.pageXOffset || document.body.scrollTop || document.documentElement.scrollTop;
      that.scrollTop = scrotop;
      if(that.scrollTop > 150){
        that.toshow = true;
      }else{
        that.toshow = false;
      }
    }
  },
  mounted(){
    window.addEventListener('scroll',this.scrolltotop);
  },
  destroyed(){
    window.removeEventListener('scroll',this.scrolltotop);
  }
}
</script>

<style>
body,html{
  margin: 0%;
  padding: 0%;
  background: #f8faFa;
  transition: .6s;
}
ul{
  list-style: none;
  padding: 0%;
}
*{
  font-size: 14px;
}
#views{
  margin: .2rem 1.2rem;
  overflow: hidden;
}
@media only screen and (min-device-width:480px){
  #views{
    margin: .2rem 30%;
    transition: .6s;
    overflow: hidden;
  }
}
</style>

<style lang="scss" scoped>
/deep/ .el-image__inner{
  border-radius: 5px;
}
.tops{
    text-decoration: none;
    color: white;
    position: fixed;
    bottom: 40px;
    right:50px;
    background: #85c1ff;
    padding: 10px;
    transition: .6s;
    cursor: pointer;
    border-radius: 50%;
}
@media only screen and (max-device-width:480px){
  .tops{
    right: 10px;
  }
}
</style>

