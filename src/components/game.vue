<template>
    <div class="coins">
        <i class="spaci">to do or not to do,that's a question...</i>
        <!-- 抛硬币 -->
        <div class="iconpart">
            <div class="leftCircle" ref="lefticon"></div>
            <div class="topCircle" ref="topicon"></div>
            <div class="infotext"><span @click="random" title="点击掷硬币">{{msg}}</span></div>
            <div class="bottoms">
                <div class="bo_yes"></div>
                <div class="bo_no"></div>
            </div>
        </div>
         <div class="game_cont">
            <i class="spaci">Choice is more important than effort</i>
            <img v-lazy="img1" title="choice" alt="mui">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg : 'click',
            img1 : require('../assets/323822.jpg')
        }
    },
    methods : {
        random(){
            this.msg = 'wait'
            let num = Math.random()
            let leftcoin = this.$refs.lefticon
            let rightcoin = this.$refs.topicon
            if(leftcoin.classList.contains('rightS')){
                leftcoin.classList.remove('rightS')
                rightcoin.classList.remove('rightT')
            }
            if(leftcoin.classList.contains('leftS')){
                leftcoin.classList.remove('leftS')
                rightcoin.classList.remove('leftT')
            }
            setTimeout(() => {
                if (num > 0.5) {
                    leftcoin.classList.add('leftS')
                    rightcoin.classList.add('leftT')
                } else {
                    leftcoin.classList.add('rightS')
                    rightcoin.classList.add('rightT')
                }
            }, 20)
            setTimeout(() => {
                this.msg = 'click'
            },3000)
        }
    }
}
</script>

<style lang="scss" scoped>
i.spaci{
    font-size: .35rem;
    color: gray;
    margin: .45rem 0;
    text-align: center;
    display: block;
    animation: deng  2.5s forwards;
}
@keyframes deng{
    from{
        transform: translateY(6rem) rotate(360deg);
        opacity: .2;
    }to{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }
}
.game_cont{
        text-align: left;
        >img{
            width: 100%;
            border-radius: .12rem;
        }
    }
.iconpart{
    position: relative;
    width:100%;
    height: 10rem;
    text-align: center;
    padding-top: .8rem;
    .leftCircle{       
        // clip裁剪属性需要配合position来使用 具体参见关于此属性的博客或文档
        width: 5rem;
        height: 5rem;
        border: .8rem solid #72adfb;
        position: absolute;
        border-radius: 50%;
        left: 50%;
        clip: rect(0,3rem,7rem,0);
        margin-left: -3rem;
    }
    .topCircle{
        position: absolute;
        width: 3rem;
        height: 3rem;
        left: 50%;
        border-radius: 50%;
        border: .8rem solid black;
        margin-left: -2rem;
        clip: rect(0, 2rem, 5rem, 0);
        margin-top: 1rem;
        transform: rotate(90deg);
    }
    .infotext{
        text-align: center;
        margin-top: 2.5rem;
        font-size: 1rem;
        margin-left: .6rem;       
        >span{
            padding: .5rem;
            cursor: pointer;
            font-size: 20px;
        }
    }
    // 这是滑动到左边的过渡动画
    .leftS{
        transform: rotate(1080deg);
        transition: transform 3s ease;
    }
    .leftT{
        transform: rotate(-1080deg);
        transition: transform 3s ease;
    }
    //这是滑动到右边的过渡动画
    .rightS{
        transform: rotate(1260deg);
        transition: transform 3s ease;
    }
    .rightT{
        transform: rotate(-1260deg);
        transition: transform 3s ease;
    }
}
.bottoms{
    position: absolute;
    bottom: 15%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
        border-radius: 50%;
        width: .8rem;
        height: .8rem;
        display: inline-block;
        text-align: center;
        span{
            font-size: .25rem;
            padding-top: .25rem;
            display: inline-block;
        }
    }
    .bo_yes{
        background: #72adfb;
        margin-left: .7rem;
    }
    .bo_no{
        background: black;
        margin-right: .7rem;
    }
}
</style>


