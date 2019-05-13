<template>
  <div class="navs">
    <div class="usr_img">
        <img src="../assets/13.png" 
        alt="myworld" 
        title="welcome to myworld"
        @click="tohost()">
        <div class="back_music">
            <audio class="mui" loop>
                <source src="../assets/qing.mp3">
            </audio>
            <div class="back_control">
                <img :src="before_music" alt="muisic" class="music">
                <span class="plays" @click="play_mu">play_music</span>
            </div>
        </div>
    </div>
    <div class="nav">
        <div class="nav_para">
            <!-- <span @click="tohost(0)" :class="{stys : sty == 0}">总镖</span>
            <span @click="totext(1)" :class="{stys : sty == 1}">文章</span>
            <span @click="topoem(2)" :class="{stys : sty == 2}">辞海</span> -->
            <!-- <span @click="tosome(3)" :class="{stys : sty == 3}">关于</span> -->
            <!-- <router-link :to="{path : 'some'}">
                <span :class="{stys : sty == 'router-link-exact-active'}">关于</span>
            </router-link> -->
                <router-link :to="{path : '/'}">总镖</router-link>

                <router-link :to="{path : 'text'}">文章</router-link>
          
                <router-link :to="{path : 'poem'}">辞海</router-link>
          
                <router-link :to="{path : 'some'}">关于</router-link>
            
            
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
          sty : 0,
          before_music : require('../assets/mi6us.png')
      }
  },
  methods : {
      play_mu(){
          var musi = document.querySelector('.mui')
          var pla = document.querySelector('.plays')
          if(pla.innerHTML === 'play_music'){
              musi.play()
              pla.innerHTML = 'pause_music'
              this.before_music = require('../assets/mi02.gif')
          }else{
              musi.pause()
              pla.innerHTML = 'play_music'
              this.before_music = require('../assets/mi6us.png')
          }
      },
      tohost(){
          this.$router.push({
              path : './'
          })
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
                width: 3rem;
                &:hover{
                    cursor: pointer;
                    animation: 1.6s img_act;
                }
            }
            .back_music{
                position: absolute;
                right: 0%;top:.2rem;
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
        padding:.1rem .6rem;
        background: white;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-top: #eef2f3 .03rem dotted;
        .nav_para{
            text-align: center;
            a{
                -webkit-tap-highlight-color: transparent;
                text-decoration: none;
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


