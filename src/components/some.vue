<template>
    <div class="some">
        <div class="some_cont">
            <span><big>个</big>人博客自定义：</span>
            <p>起点：2019-05-20 00：00 夜</p>
            <p>起址：深圳市龙岗区甘李二路创新产业城人才公寓</p>
            <p>起司：深圳市点滴互联网络有限公司</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.some{
    margin: .2rem 1.2rem;
    text-align: center;
    .amap-demo{
        height: 300px;
    }
    .some_cont{
        margin: .4rem 0;
        padding: .15rem .2rem;
        text-align: left;
        span{
            border-bottom: .04rem solid gainsboro;
            font-size: .2rem;
            display: inline-block;
            margin: .1rem 0;
            big{
                font-size: .5rem;
            }
        }
        p{
            color: #72adfb;
            margin: .2rem 0;
            word-break: break-all; //允许在单词内部换行 长单词换行
        }
    }
}
</style>


