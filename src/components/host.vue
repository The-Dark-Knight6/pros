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
            <p>^环境：centos,nginx,nodejs</p>
            <p>^框架：vue,express</p>
            <p>^语言：h5,css3,ecmascript6,mysql</p>
            <p>^工具：vs code,winscp,xshell,navicat</p>
            <p>#文章：博客主要内容，记录点滴。</p>
            <p>#辞海：摘录诗、歌、词。</p>
            <p>#娱乐：抛硬币</p>
            <p>#关于：尾声，提供评论、友链、彩蛋。</p>           
            <img v-lazy="img1" alt="loading" title="写在之前">
        </div>
        <div class="host_cont">
            <span><big>文</big>章检索：</span>
            <div v-for="(v,i) in obj_txt" :key="i">
                <p @click="totext(v.id)" style="cursor: pointer">{{v.titles}}</p>
                <p v-if="v.length >= 5" class="showmore">
                    <router-link :to="{path:'/text'}">显示更多...</router-link>
                </p>
            </div>
        </div>
        <div class="host_cont">
            <img v-lazy="img2" alt="loading" title="总镖">
        </div>
        <div class="host_cont">
            <span><big>辞</big>海检索：</span>
            <div v-for="(v,i) in obj_poem" :key="i">
                <p>{{v.titles}}</p>
                <p v-if="v.length >= 5" class="showmore">
                    <router-link :to="{path:'/poem'}">显示更多...</router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            img1 : require('../assets/212287.jpg'),
            img2 : require('../assets/315441.jpg'),
            obj_txt : [],
            obj_poem : [],
        }
    },
    methods : {
        gettext(){
            this.$http.get('api/findtext').then(res => {
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

<style lang="scss" scoped>
$border_bor : .02rem dotted #6896a3;
.host{
    text-align: center;
    .host_cont{
        text-align: left;
        >img{
            width: 100%;
            border-radius: .12rem;
        }
        span{
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
            margin: .2rem 0;
            word-break: break-all; //允许在单词内部换行 长单词换行
            a{
                text-decoration: none;
            }
        }
    }
    .host_content{
        margin: .4rem 0;
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


