<template>
  <div class="navs">
    <div class="usr_img">
        <img src="../assets/13.png" 
        alt="myworld" 
        title="welcome to myworld"
        @click="tohost(0)" :class="{stys : sty == 0}">
    </div>
    <div class="nav">
        <div class="nav_para">
            <span @click="tohost(0)" :class="{stys : sty == 0}">总镖</span>
            <span @click="totext(1)" :class="{stys : sty == 1}">文渊阁</span>
            <span @click="topoem(2)" :class="{stys : sty == 2}">寄情山水</span>
            <span @click="tosome(3)" :class="{stys : sty == 3}">东厂</span>
        </div>
        <div class="nav_git">
            <span><a href="http://github.com/The-Dark-Knight6" target="_blank">Github</a></span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return{
          sty : 0
      }
  },
  props : ['change'],
  methods : {
      tohost(e){
          this.$router.push({
              path : './host'
          })
          this.sty = e
      },
      totext(e){
          this.$router.push({
              path : './text'
          })
          this.sty = e
      },
      topoem(e){
          this.$router.push({
              path : './poem'
          })
          this.sty = e
      },
      tosome(e){
          this.$router.push({
              path : './some'
          })
          this.sty = e
      },
  }
}
</script>

<style lang="scss" scoped>
@mixin hover_border{
    border-width: 3px 0;
    border-color: white;
    border-style: solid;
}
.stys{
    border-color: black !important;
    color: black !important;
}
@keyframes img_act{
    from{
        transform: rotateY(0deg)
    }
    to{
        transform: rotateY(360deg)
    }
}
.navs{
    .usr_img{
        background: white;
        text-align: center;
        padding: .2rem;
            img{
                width: 3rem;
                &:hover{
                    cursor: pointer;
                    animation: 1.6s img_act;
                }
            }
    }
    .nav{
        padding:.1rem .6rem;
        background: white;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-top: #eef2f3 .03rem dotted;
        .nav_para{
            text-align: center;
            span{
                display: inline-block;
                font-size: .3rem;
                color: #ccc;
                padding: .1rem;
                @include hover_border;
                &:hover{
                    transition: .6s;
                    border-color: black;
                    color: black;
                    cursor: pointer;
                }
            }
        }
        .nav_git{
            span{
                color: #689ca5;
                border: 1px solid #689ca5;
                display: inline-block;
                padding:.08rem;
                text-align: center;
                font-size: .3rem;
                a{
                    -webkit-tap-highlight-color: transparent;
                    text-decoration: none;  
                    color: #689ca5;
                }
            }
        }
    }
}
</style>


