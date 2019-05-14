<template>
    <div class="some">
        <div class="some_cont">
            <span><big>自</big>定义：</span>
            <p>When：2019-05-20 00：00 夜</p>
            <p>Where：深圳市龙岗区甘李二路中海信创新产业城</p>
            <p>Who：个人</p>
            <p>What：简约博客</p>
            <p>Why：加强vue理解、学习全栈式编程、探索更多知识</p>
            <p>How：nodejs + nginx + mysql + vue + vue-cli + webpack + vue-router + ...</p>
        </div>
        <div id="container"></div> 
        <div class="some_cont">
            <span><big>风</big>格简述：</span>
            <p>· 少即是多</p>
            <p>· 没有消息就是最好的消息</p>
            <p>· 音乐是一种生活方式</p>
            <img src="../assets/323888.jpg" title="风格简述"
            oncontextmenu="return false;" ondragstart="return false;" alt="mui">
        </div>
        <div class="some_cont">
            <span><big>A</big>bout me：</span>
            <p>邮箱：645865839@qq.com</p>
            <p>weibo：<a href="https://weibo.com/u/6096309423?is_all=1" target="_blank">@老付一枚</a></p>
            <p>网易：<a href="https://music.163.com/#/user/home?id=535760156" target="_blank">@老付一枚</a></p>
            <img src="../assets/280745.jpg" title="About me"
            oncontextmenu="return false;" ondragstart="return false;" alt="self">
        </div>
        <div class="some_cont">
            <span><big>友</big>情链接：</span>
            <p>- -><a href="https://www.zzhihong.com/" target="_blank">秘密基地</a></p>
            <p>- -><a href="https://www.shenzilong.cn/" target="_blank">崮生</a></p>
            <p>- -><a href="http://www.ukwuhanyu.cn/" target="_blank">Home</a></p>
            <img src="../assets/318553.jpg" title="友情链接"
            oncontextmenu="return false;" ondragstart="return false;" alt="contact">
        </div>
    </div>
</template>

<script>
export default {
 mounted(){
     var map = new AMap.Map('container', {
        zoom:12,//级别
        center: [114.122034,22.655371],//中心点坐标
    })
    var circleMarker = new AMap.CircleMarker({
        center: new AMap.LngLat(114.11755,22.65),  // 圆心位置
        radius: 14, // 圆半径
        fillColor: '#72adfb',   // 圆形填充颜色
        strokeColor: 'blue', // 描边颜色
        strokeWeight: 1.5, // 描边宽度
    })
    map.add(circleMarker);
 }
}
</script>

<style lang="scss" scoped>
 #container{
     height: 5.6rem;
     overflow: hidden;
     margin: 0 .2rem .4rem .2rem;
 }
.some{
    text-align: center;
    .amap-demo{
        height: 300px;
    }
    .some_cont{
        padding: .15rem .2rem;
        text-align: left;
        >img{
            width: 100%;
        }
        span{
            border-bottom: .06rem solid gainsboro;
            font-size: .2rem;
            display: inline-block;
            margin: .1rem 0;
            letter-spacing: .1rem;
            big{
                font-size: .5rem;
            }
        }
        p{
            color: #72adfb;
            letter-spacing: .02rem;
            margin: .2rem 0;
            word-break: break-all; //允许在单词内部换行 长单词换行
            a{
                -webkit-tap-highlight-color: transparent;
                text-decoration: none;
                color: #72adfb;
            }
        }
    }
}
</style>


