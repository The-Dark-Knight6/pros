<template>
    <div class="poem">
        <div class="poem_con">
            <p>清平调·其一</p>
<pre>
云想衣裳花想容，
春风拂槛露华浓。
若非群玉山头见，
会向瑶台月下逢。
</pre>
        </div>
    </div>
</template>

<script>
export default {
    
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


