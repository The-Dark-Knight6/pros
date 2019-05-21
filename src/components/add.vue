<template>
    <div class="add">
        <div class="login" v-if="!myself">
            <input type="text" v-model="myname" placeholder="主人名"><br>
            <input type="password" v-model="mypass" placeholder="主人密码">
            <button @click="toadd">show time</button>
        </div>
        <div class="realme" v-if="myself">
            <input type="text" name="title" v-model="title" maxlength="15" placeholder="文章标题">
            <textarea name="content" v-model="content" rows="15" placeholder="文章内容"></textarea>
            <button @click="pub">发布</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            myself : false,
            obj : [],
            title : '',
            content : '',   
            myname : '',
            mypass : ''
        }
    },
    methods : {
        //判断 当前发布文章的用户是否为本人
        toadd(){
            if(this.myname === this.obj.realname && this.mypass === this.obj.realpass){
                this.myself = !this.myself
                this.myname = ''
                this.mypass = ''
            }else{
                console.log('你不是主人啊...')
            }
        },
        // 获取用户列表
        toin(){
            this.$http.get('api/real').then(res => {
                this.obj = res.data.data[0]
            })
        },
        // 发布文章 传送数据到数据库
        pub(){
            var that = this
            if(this.title.trim() != '' && this.content.trim() != ''){
                    this.$http.post('api/addtext',{params:{
                        title : that.title,
                        article : that.content
                    }})
                    this.title = ''
                    this.content = ''          
                    console.log('发布成功了，老兄...')   
            }else{
                console.log('不要输入空的啊，兄弟...')
            }
        }
    },
     mounted(){
        this.toin()
    }
}
</script>

<style lang="scss" scoped>
@mixin same{
background: transparent;
padding: .2rem;
-webkit-tap-highlight-color: transparent;
border-color: #03A9F4;
font-size: .3rem;
width: 95%;
outline: none;
}
.realme,.login{
    padding: .4rem .25rem;
    font-size: .25rem;
    text-align: left;
    input{
        margin-top: .2rem;
        @include same;
    }
    textarea{
        margin-top: .3rem;
        @include same;
    }
    button{
        margin-top: .2rem;
        padding: .15rem;
        display: block;
        font-size: .3rem;
    }
}
</style>


