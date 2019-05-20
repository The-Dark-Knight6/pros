<template>
    <div class="text">
        <div class="text_con">
            <h3>构建网站</h3>
            <p>个人建造网站对于程序员来讲应该是比较基础的操作，不迁就丝毫的商业利益，
                这是一种纯碎的热爱，源于对代码世界的探索，也是应了一句古老的话语：
                因为热爱，所以行动。
            </p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
$border_bor : .02rem solid #6896a3;
.text{
    text-align: center;
    .text_con{
        margin: .4rem 0;
        padding: .15rem .2rem;
        border-radius: .2rem;
        border-top: $border_bor;
        text-align: left;
        font-size: .15rem;
        h3{
            color: #259;
            margin: 0%;
        }
        p{
            margin: .2rem 0;
            word-break: break-all; //允许在单词内部换行 长单词换行
        }
    }
}
</style>


