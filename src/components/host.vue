<template>
    <div class="host">
        <div class="host_content">
            <p>简介</p>
            <p>asdfsadfasldfjadskfjlasdfjlsadkf
                asdkfljaskldfjklsadjflkadsjfklasdkjfl
                lasdjfklasdjflasjdfaksdjf;asdkfljaskldfjklsadjflkadsjfklasdkjflajsdlflj
                jklasdjfkasdjfadsjf;sadf
                alskdfjkladsjfkladsjfladsjf
            </p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.host{
    margin: .2rem 1.2rem;
    text-align: center;
    .host_content{
        margin: .4rem 0;
        background: white;
        padding: .15rem .2rem;
        border-radius: .2rem;
        border:.01rem solid #6896a3;
        text-align: left;
        p{
            margin: .2rem 0;
            word-break: break-all; //允许在单词内部换行 长单词换行
        }
    }
}
</style>


