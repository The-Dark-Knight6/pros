<template>
    <div class="host">
        <div class="host_content">
<pre>
滚滚长江东逝水，浪花淘尽英雄。
是非成败转头空。
青山依旧在，几度夕阳红。

白发渔樵江渚上，惯看秋月春风。
一壶浊酒喜相逢。
古今多少事，都付笑谈中。
</pre>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods : {

    }
}
</script>

<style lang="scss" scoped>
$border_bor : .02rem dotted #6896a3;
.host{
    margin: .2rem 1.2rem;
    text-align: center;
    .host_content{
        margin: .4rem 0;
        border-radius: .5rem;
        padding: .15rem .2rem;
        border-left: $border_bor;
        border-right: $border_bor;
        text-align: left;
        p{
            margin: .2rem 0;
            word-break: break-all; //允许在单词内部换行 长单词换行
        }
        pre{
            line-height: .5rem;
            margin: 0%;
            padding: 0 .3rem;
            font-family: cursive;
            text-align: center;
        }
    }
}
</style>


