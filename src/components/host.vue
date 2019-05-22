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
            <p>@Tencent服务器centos操作系統，nginx反向代理，xshell操作，winscp傳輸...</p>
            <p>@nodejs环境，vue全家桶，mysql数据库，express后端框架，sass预处理...</p>
            <p>#文章：博客主要内容，记录点滴。</p>
            <p>#辞海：撰写优秀的诗、歌、词文化。</p>
            <p>#关于：本站尾声，提供评论、友链、彩蛋。</p>
            <img v-lazy="img1" alt="loading" title="写在之前">
        </div>
        <div class="host_cont">
            <span><big>文</big>章检索：</span>
            <div v-for="(v,i) in obj_txt" :key="i">
                <p>{{v.titles}}</p>
            </div>
        </div>
        <div class="host_cont">
            <img v-lazy="img2" alt="loading" title="总镖">
        </div>
        <div class="host_cont">
            <span><big>辞</big>海检索：</span>
            <div v-for="(v,i) in obj_poem" :key="i">
                <p>{{v.titles}}</p>
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
        font-size: .18rem;
        >img{
            width: 100%;
            border-radius: .12rem;
        }
        span{
            border-bottom: .06rem solid gainsboro;
            font-size: .3rem;
            display: inline-block;
            margin: .1rem 0;
            letter-spacing: .1rem;
            big{
                font-size: .6rem;
            }
        }
        p{
            color: #1c385d;
            letter-spacing: .02rem;
            margin: .2rem 0;
            word-break: break-all; //允许在单词内部换行 长单词换行
            font-size: .14rem;
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


