<template>
    <div class="poem">
        <div class="poem_con" v-for="(v,i) in obj.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="i">
            <h3>{{v.titles}}</h3>
            <div v-html="v.words"></div>
        </div>
        <div class="block">
            <el-pagination
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
export default {
    data(){
        return{
            obj : [],
            currentPage: 1, // 初始的页数
            pagesize : 5 // 每页的显示数量
        }
    },
    methods : {
        handleSizeChange(val) {
            this.pagesize = val
        },
        handleCurrentChange(val) {
            this.currentPage = val
        },
        getpoems(){
            this.$http.get('api/findpoems').then(res => {
                this.obj = res.data.data
            })
        }
    },
    mounted(){
        this.getpoems()
    }
}
</script>

<style lang="scss" scoped>
$border_bor : .02rem solid #6896a3;
.poem{
    text-align: center;
    .poem_con{
        margin: .4rem 0;
        border-top: $border_bor;
        text-align: center;
        word-break: break-all;
        h3{
           color: #259;
            margin:.15rem 0%;
            font-size: 20px;
            text-align: center;
            cursor: pointer; 
        }
        p{
            color: #259;
            margin: .18rem 0;
            word-break: break-all; //允许在单词内部换行 长单词换行
        }
        pre{
            margin: 0%;
            line-height: .5rem;
        }
    }
}
</style>


