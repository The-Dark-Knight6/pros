<template>
    <div class="text">
        <div class="text_con">
            <h3>构建网站</h3>
            <p>个人建造网站对于程序员来讲应该是比较基础的操作，不迁就丝毫的商业利益,
                这是一种纯碎的热爱，源于对代码世界的探索，也是应了一句古老的话语：
                因为热爱，所以行动。
            </p>            
        </div>
        <div class="text_con" v-for="(v,i) in obj" :key="i">
            <h3>{{v.titles}}</h3>
            <span>{{v.times | formatDate}}</span>
            <div v-html="v.contents"></div>
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
        }
    },
    methods : {
        gettext(){
            this.$http.get('api/findtext').then(res => {
                this.obj = res.data.data
            })
        },     
    },
    mounted() {
        this.gettext()
    }
}
</script>

<style lang="scss" scoped>
$border_bor : .02rem solid #6896a3;
.text{
    text-align: center;
    .text_con{
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


