<template>
    <div class="text">
        <div class="text_con" v-for="(v,i) in obj.slice((currentPage-1)*pagesize,pagesize*currentPage)" :key="i">
            <h3 @click="desc(v.id)">{{v.titles}}</h3>
            <div class="con_divs">
                <span>类型：{{v.types}}</span>
                <span>阅读：{{v.views}}</span>
                <span>时间：{{v.times | formatDate}}</span>
            </div>        
            <div v-html="v.contents" :class="{hiddens : v.contents.length >= 250}"></div>
            <p @click="desc(v.id)" v-if="v.contents.length >= 250" class="showall">显示全部...</p>
        </div>
        <div class="block">
            <el-pagination
                pager-count="5"
                layout="prev, pager, next"
                :page-size="pagesize"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :total="obj.length">
            </el-pagination>
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
            // 利用 slice()函数处理前端的分页
            obj : [],
            currentPage : 1,
            pagesize : 5,
        }
    },
    methods : {
        handleSizeChange(e){
            this.pagesize = e
        },
        handleCurrentChange(e){
            this.currentPage = e;
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;  
        },
        gettext(){
            this.$http.get('api/findtext').then(res => {
                this.obj = res.data.data
            })
        },     
        desc(e){
            // 点击跳转文章详细页面 使用this.$router传递参数url中？后的参数
            this.$router.push({
                path : '/details',
                query : {
                    id : e
                }
            })
            // 点击回到页面顶部 防止滚动条停留在中间
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0            
        }
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
        overflow: hidden;
        padding: .15rem .2rem;
        border-radius: .2rem;
        border-top: $border_bor;
        text-align: left;
        .hiddens{
            height: 6rem;
            overflow: hidden;
        }
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
            cursor: pointer;
        }
        p,>div,.hiddens>p{ 
            margin: .2rem 0;
            word-break: break-all; //允许在单词内部换行 长单词换行
        }
        p.showall{
            font-size: 12.6px;
            cursor: pointer;
            color:#6896a3;
        }
    }
}
</style>


