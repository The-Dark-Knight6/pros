<template>
    <div class="some">
        <div class="some_cont">
            <span><big>自</big>定义：</span>
            <p>When：2019-05-11 13：14 晴</p>
            <p>Where：深圳市龙岗区甘李二路中海信创新产业城</p>
            <p>Who：个人</p>
            <p>What：简约博客</p>
            <p>Why：JUST DO IT,TRY YOUR BEST.</p>  
        </div>
        <div id="container"></div> 
        <div class="some_cont">
            <span><big>风</big>格简述：</span>
            <p>· 少即是多</p>
            <p>· 没有消息就是最好的消息</p>
            <p>· 音乐是一种生活方式</p> 
            <img v-lazy="imgs[0]" title="风格简述"/>
        </div>
        <div class="some_cont">
            <span><big>A</big>bout me：</span>
            <p>邮箱：<a href="mailto:645865839@qq.com">645865839@qq.com</a></p>
            <p>Github: <a href="https://github.com/The-Dark-Knight6" target="_blank">@Classmate_Fu</a></p>
            <p>weibo：<a href="https://weibo.com/u/6096309423?is_all=1" target="_blank">@老付一枚</a></p>
            <p>网易：<a href="https://music.163.com/#/user/home?id=535760156" target="_blank">@老付一枚</a></p>
            <img v-lazy="imgs[1]" title="About me"/>
        </div>
        <div class="some_cont">
            <span><big>友</big>情链接：</span>
            <p>- -><a href="https://www.zzhihong.com/" target="_blank">秘密基地</a></p>
            <p>- -><a href="https://www.shenzilong.cn/" target="_blank">崮生</a></p>
            <img v-lazy="imgs[2]" title="友情链接"/>
        </div>
        <div class="some_cont">
            <span><big>彩</big>蛋：</span>
            <p><a href="http://www.mvcat.com/music/" target="_blank">+ 全网音乐</a></p>
            <p><a href="http://yunkus.com/front-end-web-develoment/" target="_blank">+ 前端宝典</a></p>
            <p><a href="https://developer.mozilla.org/zh-CN/" target="_blank">+ MDN</a></p>
        </div>
        <div class="some_cont">
            <span><big>玩</big>意儿：</span>
            <p><a href="javascript:;" @click="cub(0)"># 掷硬币</a></p>
            <p><a href="javascript:;" @click="cub(1)"># 神祗视角督查</a></p>
        </div>
        <div class="real_com">
            <span>真知灼见：</span><br>
            <p v-if="obj.length == 0">还没有高人指点呢~马上抢沙发吧~</p>
            <ul>
                <li v-for="(com,index) in obj.slice((currentPage-1)*pagesize,pagesize*currentPage)" :key="index">
                    <div class="li_span">
                        <span>#{{index+1}}楼：{{com.name}}</span>
                        <span>{{com.times | formatDate}}</span>
                    </div>
                    <p>{{com.comments}}</p>
                </li>
            </ul>
        </div>
        <div style="text-align:center">
            <el-pagination
                pager-count="5"
                layout="prev, pager, next"
                :page-size="pagesize"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :total="obj.length">
            </el-pagination>
        </div>
        <div class="some_commend">
            <span>留下足迹：</span><br>
            <input type="text" v-model="yourname" placeholder="您的昵称" maxlength="10">
            <p>{{error_name}}</p>
            <textarea name="comment" v-model="yourcommend" rows="5" maxlength="100" placeholder="您的想法"></textarea>
            <p>{{error_text}}</p>
            <input type="button" @click="com()" 
            ref="add_commned" :plain="true" :value="public_text" :class="{button:hol}">
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
            hol : false, //改变发布按钮的style
            imgs : [
                require('../assets/323888.jpg'),
                require('../assets/280745.jpg'),
                require('../assets/318553.jpg')
            ],
            currentPage : 1, // 当前评论页码
            pagesize : 10, // 每页评论显示的数量
            public_text : '发 布'
        }
    },
    methods : {
        // 关于切换不同的 “玩意儿” 页面
        cub(e){
            switch(e){
                case 0 : this.$router.push({
                    path : '/game',
                })
                break;
                case 1 : this.$router.push({
                    path : '/kidding'
                })
                break;
            }    
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        handleSizeChange(e){
            this.pagesize = e
        },
        handleCurrentChange(e){
            this.currentPage = e
        },
        the_com(){
            this.$http.get('api/users').then(res => {
                this.obj = res.data.data
            })
        },
        // 评论延迟时间限定
        control_com(ti){
            if(ti == 0){
                this.public_text = '发 布';
                this.$refs.add_commned.disabled = '';
                this.hol = false;
                return ;
            }else{
                this.$refs.add_commned.disabled = 'disabled';
                this.public_text = `${ti}s后再次发布`;
                this.hol = true;
                ti --;
            }
            setTimeout(()=>{
                this.control_com(ti)
            },1000)
        },
        // 提交评论 和 相应反馈
        com(){
            var the_text = /^[\u4E00-\u9FA5A-Za-z0-9，。,.?？!！';\s]{1,100}$/
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
                this.error_text = '评论为1-100的汉字、英文、数字、逗号、句号、感叹号、问号、分号还有空格哦'
                this.error_name = ''
            }else{
                 this.$http.post('api/reply',{params:{
                 name : that.yourname,
                 comment : that.yourcommend
            }})
                this.yourname = ''
                this.yourcommend = ''
                this.error_text = ''
                this.error_name = ''
                that.the_com()          
                this.$message({
                    message: '发布成功了哟~',
                    type: 'success'
                })
               this.control_com(66);     
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
        }
        li{
            margin: .15rem 0;
            .li_span{
                display: flex;
                justify-content: space-between;
                span{
                    font-size: 13px;
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
            font-size: 12px;
        }
        input[type='button']{
            border-radius: 20px;
            padding: 9px 2px;
            display: inline-block;
            color: #FFF;
            background-color: #409EFF;
            border-color: #409EFF;
            width: 2rem;
            outline: none;
            cursor:pointer;
        }
        input.button{
            cursor: wait;
            color: gray;
            background-color: gainsboro;
            border-color: gainsboro;
        }
        span{
            border-bottom: .06rem solid gainsboro;
            margin: .1rem 0;
            display: inline-block;
        }
        input{
            width: 5rem;
            @include commend;
        }
        textarea{
            width: 95%;
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
            display: inline-block;
            margin: .1rem 0;
            letter-spacing: .1rem;
            big{
                font-size: 25px;
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


