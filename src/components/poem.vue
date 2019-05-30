<template>
    <div class="poem">
        <div class="poem_con" v-for="(v,i) in obj" :key="i">
            <p>{{v.titles}}</p>
            <div v-html="v.words"></div>
        </div>
        <div class="block">
            <el-pagination
                layout="prev, pager, next"
                :page-size="5"
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
            currentPage1: 5,
            the : {
                b_pages : 0,
                a_pages : 5
            }
        }
    },
    methods : {
         handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
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
        p{
            color: #259;
            margin: .2rem 0;
            word-break: break-all; //允许在单词内部换行 长单词换行
        }
        pre{
            margin: 0%;
            line-height: .5rem;
        }
    }
}
</style>


