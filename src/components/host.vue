<template>
    <div class="host">
        <div class="host_content">
<pre>
滚滚长江东逝水，浪花淘尽英雄。
是非成败转头空。
青山依旧在，几度夕阳红。

白发渔樵江渚上，惯看秋月春风。
一壶浊酒喜相逢。
古今多少事，都付笑谈中。
</pre>
        </div>
        <div class="host_cont">
            <span><big>写</big>在之前：</span>
            <!-- 手风琴文案 -->
            <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="总镖 General Administration" name="1">
                <div>从这往北出发300m，可窥隽永清澈的行文，听寻朗朗诵读声，亦能嗅到人间绝味...</div>
                <div>博客首页，如你所见，见者非凡。</div>
                <u>不如你就在此地不要走动，我去买几个橘子？</u>
            </el-collapse-item>
            <el-collapse-item title="文章 Article" name="2">
                <div>博客记载的主要内容。</div>
                <div>包囊不同类型的原创文章，记录学习编程生活感悟。</div>
                <u>我横竖都睡不着，仔细看了半夜，才从字缝里看出字来，满篇都写着两个字是“精彩”。</u>
            </el-collapse-item>
            <el-collapse-item title="辞海 Poetry" name="3">
                <div>这是用来撰写诗歌的。</div>
                <div>摘抄经典诗歌词，也有原创加持。</div>
                <u>老骥伏枥，志在千里。烈士暮年，壮心不已。</u>
            </el-collapse-item>
            <el-collapse-item title="关于 About" name="4">
                <div>本站的详细介绍和一些奇门遁甲。</div>
                <div>包括了五个W、风格的阐述、与我相关的链接、还有狐朋好友的链接、以及所看到的一些好网站的链接、还有自制的玩意儿、最后还可以评论喔。</div>
                <u>我的心里住着一个，苍老的小孩，如果世界听不明白，对影子表白...</u>
            </el-collapse-item>
            </el-collapse>
            <!-- <p>^环境：centos,nginx,nodejs</p>
            <p>^框架：vue,express</p>
            <p>^语言：h5,css3,ecmascript6,mysql</p>
            <p>^工具：vs code,winscp,xshell,navicat</p>
            <p>#文章：博客主要内容，记录点滴。</p>
            <p>#辞海：摘录诗、歌、词。</p>
            <p>#关于：尾声，提供评论、友链、彩蛋。</p>            -->
            <img v-lazy="img[0]" title="写在之前"/>
        </div>
        <div class="host_cont">
            <span><big>最</big>热文章：</span>
            <div v-for="(v,i) in obj_txt" :key="i">
                <p @click="totext(v.id)" class="hot_title">{{v.titles}}</p>
            </div>
        </div>
        <div class="host_cont">
            <img v-lazy="img[1]" title="总镖"/>
        </div>
        <div class="host_cont">
            <span><big>最</big>新辞藻：</span>
            <div v-for="(v,i) in obj_poem.slice(0,5)" :key="i">
                <p>{{v.titles}}</p>
            </div>
        </div>
        <el-divider><i class="el-icon-mobile-phone"></i>我是有底线的</el-divider>
    </div>
</template>

<script>
export default {
    data(){
        return{
            activeName: '1',
            img : [
                require('../assets/212287.jpg'),
                require('../assets/315441.jpg'),
            ],
            obj_txt : [],
            obj_poem : [],
        }
    },
    methods : {
        gettext(){
            this.$http.get('api/hottext').then(res => {
                this.obj_txt = res.data.data
            })
        },
        getpoem(){
            this.$http.get('api/findpoems').then(res => {
                this.obj_poem = res.data.data
            })
        },
        totext(e){
            this.$router.push({
                path : '/details',
                query : {
                    id : e
                }
            })
            // 点击回到页面顶部 防止滚动条停留在 底部
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0   
        }
    },
    mounted(){
        this.gettext()
        this.getpoem()
    }
}
</script>

<style>
/* 关于element组件的相关style修改 */
  .el-carousel{
      margin-top: 20px;
  }
  .el-carousel__indicators--outside{
      display: none;
  }
  .el-carousel__item:nth-child(2n),.el-collapse-item__header,.el-carousel__item:nth-child(2n+1),.el-collapse-item__wrap {
    background-color: transparent;
  }
</style>

<style lang="scss" scoped>
$border_bor : .02rem dotted #6896a3;
.host{
    text-align: center;
    .host_cont{
        text-align: left;
        div{
            text-align: center;
        }
        >img{
            width: 100%;
            border-radius: .12rem;
        }
        >span{
            border-bottom: .06rem solid gainsboro;
            display: inline-block;
            margin: .1rem 0;
            letter-spacing: .1rem;
            big{
                font-size: 25px;
            }
        }
        p.showmore{
            cursor: pointer;
            color:#6896a3;
        }
        p{
            color: #1c385d;
            letter-spacing: .02rem;
            margin: .25rem 0;
            word-break: break-all; //允许在单词内部换行 长单词换行
            a{
                text-decoration: none;
            }
            &.hot_title:hover{
                display: inline-block;
                cursor: pointer;
                color: rgb(55, 55, 231);
                transition: .2s;
            }
        }
    }
    .host_content{
        margin: .2rem 0;
        border-radius: .13rem;
        text-align: left;
        position: relative;
        overflow: hidden;
        background-image: url('../assets/309617.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        filter: opacity(70%);
        p{
            margin: .2rem 0;
            word-break: break-all; //允许在单词内部换行 长单词换行
        }
        pre{
            line-height: .5rem;
            margin: 0%;
            padding: .3rem;
            font-family: '楷体';
            text-align: center;
        }
    }
}
</style>


