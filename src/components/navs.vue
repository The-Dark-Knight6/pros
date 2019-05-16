<template>
  <div class="navs">
    <div class="usr_img">
        <img src="../assets/13.png" 
            alt="myworld" oncontextmenu="return false;" ondragstart="return false;"
            title="welcome to myworld"
            @click="tohost()">
        <div class="back_music">
            <audio class="mui" loop>
                <source src="../assets/qing.mp3">
            </audio>
            <div class="back_control">
                <img :src="before_music" oncontextmenu="return false;" ondragstart="return false;"
                    alt="music" class="music">
                <span class="plays" @click="play_mu">music</span>
            </div>
        </div>
    </div>
    <div class="nav">
        <div class="nav_para">
            <router-link :to="{path : '/'}">总镖</router-link>
            <router-link :to="{path : '/text'}">文章</router-link>          
            <router-link :to="{path : '/poem'}">辞海</router-link>          
            <router-link :to="{path : '/some'}">关于</router-link>    
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
          before_music : require('../assets/mi6us.png')
      }
  },
  methods : {
      play_mu(){
          var musi = document.querySelector('.mui')
          var pla = document.querySelector('.plays')
          if(pla.innerHTML === 'music'){
              musi.play()
              pla.innerHTML = 'pause'
              this.before_music = require('../assets/mi02.gif')
          }else{
              musi.pause()
              pla.innerHTML = 'music'
              this.before_music = require('../assets/mi6us.png')
          }
      },
      tohost(){
          this.$router.push({
              path : './'
          })
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
//当选中<router-link>时会自动带有这个class属性
.router-link-exact-active{
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
        position: relative;
            >img{
                width: 4.5rem;
                &:hover{
                    cursor: pointer;
                    animation: 1.6s img_act;
                }
            }
            .back_music{
                position: absolute;
                right: 0%;top:.26rem;
                .back_control{
                    *{
                        vertical-align: middle;
                    }
                    .music{
                        height: .5rem;
                    } 
                    >span{
                        margin-right: .5rem;
                        &:hover{
                            cursor: pointer;
                        }
                    }
                }
            }
    }
    .nav{
        padding: .1rem 1.2rem;
        background: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: #eef2f3 .03rem dotted;
        @media only screen and (min-width: 1200px){
            padding: .1rem 30% !important;
            transition: .6s;
        }
        .nav_para{
            text-align: center;
            a{
                -webkit-tap-highlight-color: transparent;
                text-decoration: none;
                display: inline-block;
                font-size: .35rem;
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


