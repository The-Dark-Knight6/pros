<template>
    <div class="details">
        <div class="details_con">
            <h3>{{obj.titles}}</h3>
            <span>{{obj.times | formatDate}}</span>
            <div v-html="obj.contents"></div>
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
            obj : []
        }
    },
    methods:{
        gettexts(){
            this.$http('api/detail',{params:{
                // $route 当前正在使用的路由对象，$router 全局路由对象 此处获取当前页的id参数
                id : this.$route.query.id
            }}).then(res => {
                this.obj = res.data.data[0]
            })
        }
    },
    mounted(){
        this.gettexts()
    }
}
</script>

<style lang="scss" scoped>
$border_bor : .02rem solid #6896a3;
.details{
    text-align: center;
    .details_con{
        padding: .15rem .2rem;
        border-radius: .2rem;
        border-top: $border_bor;
        text-align: left;
        span{
            font-size: .15rem;
            display: block;
            text-align: center;
        }
        h3{
            color: #259;
            margin: 0%;
            font-size: .26rem;
            text-align: center;
        }
        p,>div{ 
            margin: .2rem 0;
            word-break: break-all; //允许在单词内部换行 长单词换行
            font-size: .24rem;
        }
    }
}
</style>


