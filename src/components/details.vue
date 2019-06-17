<template>
    <div class="details">
        <div class="details_con">
            <h3>{{obj.titles}}</h3>
            <div class="con_divs">
                <span>类型：{{obj.types}}</span>
                <span>阅读：{{obj.views}}</span>
                <span>时间：{{obj.times | formatDate}}</span>
            </div>   
            <div v-html="obj.contents"></div>
        </div>
        <div class="details_com">
            <span>真知灼见：</span><br>
            <p v-if="commend_obj.length == 0">还没有高人指点呢~马上抢沙发吧~</p>
            <ul>
                <li v-for="(com,index) in commend_obj" :key="index">
                    <div class="li_span">
                        <span>#{{index+1}}楼：{{com.name}}</span>
                        <span>{{com.times | formatDate}}</span>
                    </div>
                    <p>{{com.commend}}</p>
                </li>
            </ul>
        </div>
        <div class="details_commend">
            <span>留下足迹：</span><br>
            <input type="text" v-model="yourname" placeholder="您的昵称" maxlength="10">
            <p>{{error_name}}</p>
            <textarea name="comment" v-model="yourcommend" rows="5" maxlength="100" placeholder="您的想法"></textarea>
            <p>{{error_text}}</p>
            <input type="button" :class="{button:hol}" ref="put_commend" @click="com" :plain="true" :value="put_text">
        </div>
    </div>    
</template>

<script>
import {formatDate} from '../assets/formatDate.js'
export default {
    filters: {
        formatDate(times) {
            var times = times * 1000 //由于获取的时间戳为毫秒需要*1000
            var date = new Date(times);
            return formatDate(date, 'yyyy-MM-dd hh:mm');
        }
    },
    data(){
        return{
            obj : [],
            commend_obj : [],
            yourname : '',
            yourcommend : '',
            error_text : '',
            error_name :'',
            hol : false, //发布状态改变
            put_text : '发 布'
        }
    },
    methods:{
        control_put(t){
            if(t == 0){
                this.put_text = '发 布';
                this.$refs.put_commend.disabled = '';
                this.hol = false;
                return ;
            }else{
                this.$refs.put_commend.disabled = 'disabled';
                this.put_text = `${t}s后再次发布`;
                this.hol = true;
                t --;
            }
            setTimeout(() => {
                this.control_put(t);
            },1000)
        },
        gettexts(){
            this.$http('api/detail',{params:{
                // $route 当前正在使用的路由对象，$router 全局路由对象 此处获取当前页的id参数
                id : this.$route.query.id
            }}).then(res => {
                this.obj = res.data.data[0]
            })
        },
        com(){
            var the_text = /^[\u4E00-\u9FA5A-Za-z0-9，。,.?？!！；;\s]{1,100}$/
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
                 this.$http.post('api/totext',{params:{
                 name : that.yourname,
                 comment : that.yourcommend,
                 id : that.$route.query.id
            }})
                this.yourname = ''
                this.yourcommend = ''
                this.error_text = ''
                this.error_name = ''
                this.fincom()
                this.$message({
                    message: '发布成功了哟~',
                    type: 'success'
                })
                this.control_put(66);
            }           
        },
        fincom(){
            this.$http('api/fintcom',{params:{
                id : this.$route.query.id
            }}).then(res => {
                this.commend_obj = res.data.data
            })
            // 文章阅读 次数的统计
            this.$http('api/updateview',{params:{
                id : this.$route.query.id
            }})
        }
    },
    mounted(){
        this.gettexts()
        this.fincom()
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
$border_bor : .02rem solid #6896a3;
.details{
    .details_con{
        overflow: hidden;
        padding: .15rem .2rem;
        border-radius: .2rem;
        border-top: $border_bor;
        text-align: left;
        .con_divs{
            display: flex;
            justify-content: space-around;
            align-items: center;
            span{
                font-size: 12.5px;
                font-family: '楷体';
            }
        }
        h3{
            color: #259;
            margin: 0%;
            font-size: 20px;
            text-align: center;
        }
        p,>div{ 
            margin: .2rem 0;
            word-break: break-all; //允许在单词内部换行 长单词换行
        }
    }
    .details_com{
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
                    font-size: 12px;
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
    .details_commend{      
        p{
            margin: 0;
            color: red;
            font-size: 12px;
        }
        input[type="button"]{
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
            width: 90%;
            @include commend;
            resize: none; //禁止拖拉
        }
    }
}
</style>


