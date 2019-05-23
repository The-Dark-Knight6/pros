<template>
    <div class="some">
        <div class="some_cont">
            <span><big>自</big>定义：</span>
            <p>When：2019-05-12 00：00 夜</p>
            <p>Where：深圳市龙岗区甘李二路中海信创新产业城</p>
            <p>Who：个人</p>
            <p>What：简约博客</p>
            <p>Why：加强vue理解、学习全栈式编程、探索更多知识</p>
        </div>
        <div id="container"></div> 
        <div class="some_cont">
            <span><big>风</big>格简述：</span>
            <p>· 少即是多</p>
            <p>· 没有消息就是最好的消息</p>
            <p>· 音乐是一种生活方式</p> 
            <img v-lazy="img1" title="风格简述" alt="mui">
        </div>
        <div class="some_cont">
            <span><big>A</big>bout me：</span>
            <p>邮箱：645865839@qq.com</p>
            <p>Github: <a href="http://github.com/The-Dark-Knight6" target="_blank">@Classmate_Fu</a></p>
            <p>weibo：<a href="https://weibo.com/u/6096309423?is_all=1" target="_blank">@老付一枚</a></p>
            <p>网易：<a href="https://music.163.com/#/user/home?id=535760156" target="_blank">@老付一枚</a></p>
            <img v-lazy="img2" title="About me" alt="self">
        </div>
        <div class="some_cont">
            <span><big>友</big>情链接：</span>
            <p>- -><a href="https://www.zzhihong.com/" target="_blank">秘密基地</a></p>
            <p>- -><a href="https://www.shenzilong.cn/" target="_blank">崮生</a></p>
            <img v-lazy="img3" title="友情链接" alt="contact">
        </div>
        <div class="some_cont">
            <span><big>彩</big>蛋：</span>
            <p><a href="http://www.mvcat.com/music/" target="_blank">+ 全网音乐</a></p>
            <p><a href="http://yunkus.com/front-end-web-develoment/" target="_blank">+ 前端宝典</a></p>
            <p><a href="https://developer.mozilla.org/zh-CN/">+ MDN</a></p>
        </div>
        <div class="real_com">
            <span>真知灼见：</span><br>
            <p v-if="obj.length == 0">还没有高人指点呢~马上抢沙发吧~</p>
            <ul>
                <li v-for="(com,index) in obj" :key="index">
                    <div class="li_span">
                        <span>#{{index+1}}楼：{{com.name}}</span>
                        <span>{{com.times | formatDate}}</span>
                    </div>
                    <p>{{com.comments}}</p>
                </li>
            </ul>
        </div>
        <div class="some_commend">
            <span>留下足迹：</span><br>
            <input type="text" v-model="yourname" placeholder="您的昵称" maxlength="10">
            <p>{{error_name}}</p>
            <textarea name="comment" v-model="yourcommend" rows="3" maxlength="100" placeholder="您的想法"></textarea>
            <p>{{error_text}}</p>
            <button @click="com">评论</button>
        </div>
    </div>
</template>

<script>
import {formatDate} from '../assets/formatDate.js'
export default {
    // 处理数据库时间戳 在页面中规范显示
     filters: {
        formatDate(times) {
            var times = times * 1000 //由于获取的时间戳为毫秒需要*1000
            var date = new Date(times);
            return formatDate(date, 'yyyy-MM-dd hh:mm');
        }
    },
    data(){
        return { 
            obj : [],
            yourname : '',
            yourcommend : '',
            error_text : '',
            error_name :'',
            img1 : require('../assets/323888.jpg'),
            img2 : require('../assets/280745.jpg'),
            img3 : require('../assets/318553.jpg'),
        }
    },
    methods : {
        the_com(){
            this.$http.get('api/users').then(res => {
                this.obj = res.data.data
            })
        },
        com(){
            var the_text = /^[\u4E00-\u9FA5A-Za-z0-9，。,.?？!！\s]{1,100}$/
            var that = this
            if(this.yourname.trim() == '' && this.yourcommend.trim() == ''){
                this.error_name = '请输入昵称哦'
                this.error_text = '请输入表达的内容哦'
            }else if(this.yourname.trim() == ''){
                this.error_name = '请输入昵称哦'
                this.error_text = ''
            }else if(this.yourcommend.trim() == ''){
                this.error_text = '请输入表达的内容哦'
                this.error_name = ''
            }else if(!this.yourcommend.match(the_text)){
                this.error_text = '评论为1-100的汉字、英文、数字、逗号、句号、感叹号、问号还有空格哦'
                this.error_name = ''
            }else{
                // this.obj.push({
                //     name : this.yourname,
                //     commend : this.yourcommend  
                // })
                 this.$http.post('api/reply',{params:{
                 name : that.yourname,
                 comment : that.yourcommend
            }}).then(res => {       
                console.log(res)
            })
                this.yourname = ''
                this.yourcommend = ''
                this.error_text = ''
                this.error_name = ''
                this.the_com()               
            }           
        },
    },
 mounted(){
     //高德地图的引入和使用
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
    map.add(circleMarker)
    // 评论数据的载入
    this.the_com()
 }
}
</script>

<style lang="scss" scoped>
@mixin commend {
    outline: none;
    border: .02rem solid #72adfb;
    padding: .15rem;
    background: transparent;
    margin: .2rem 0;
    display: inline-block;
}
 #container{
     height: 5rem;
     overflow: hidden;
     margin-bottom: .2rem;
 }
.some{
    .amap-demo{
        height: 300px;
    }
    .real_com{
        margin-top: .15rem ;
        >span{
            border-bottom: .06rem solid gainsboro;
            margin-top: .2rem;
            display: inline-block;
        }
        >p{
            color: gray;
            text-indent: .3rem;
            font-size: .14rem;
        }
        li{
            margin: .15rem 0;
            font-size: .15rem;
            .li_span{
                display: flex;
                justify-content: space-between;
                span{
                    font-size: .3rem;
                    display: inline-block;
                }
            }
            span{
                color: #92c1ff;
            }
            p{
                margin: 0%;
                text-indent: 12px;
                word-break: break-all;
            }
        }
    }
    .some_commend{      
        p{
            margin: 0;
            color: red;
            font-size: .15rem;
        }
        button{
            display: inline-block;
            padding: .07rem;
            width: 2rem;
            outline: none;
            background: #b9d2f3;
            border-radius: .2rem;
            border: .01rem solid #a4a4fd;
            margin-top: .2rem;
            font-size: .25rem;
        }
        span{
            border-bottom: .06rem solid gainsboro;
            margin: .1rem 0;
            display: inline-block;
        }
        input{
            width: 5rem;
            font-size: .3rem;
            @include commend;
        }
        textarea{
            width: 97%;
            font-size: .3rem;
            @include commend;
            resize: none; //禁止拖拉
        }
    }
    .some_cont{
        text-align: left;
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
            color: #72adfb;
            letter-spacing: .02rem;
            margin: .2rem 0;
            word-break: break-all; //允许在单词内部换行 长单词换行
            font-size: .14rem;
            a{
                -webkit-tap-highlight-color: transparent;
                text-decoration: none;
                color: #72adfb;
            }
        }
    }
}
</style>


