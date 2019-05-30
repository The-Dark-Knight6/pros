<template>
    <div class="add">
        <div class="login" v-if="!myself">
            <input type="text" v-model="myname" placeholder="主人名"><br>
            <input type="password" v-model="mypass" placeholder="主人密码">
            <button @click="toadd">show time</button>
        </div>
        <div class="realme" v-if="myself">
            <!-- 选择发布文字的类型   默认为 文章-->
            <div class="chooes">
                <label for="text"><input type="radio" id="text" v-model="types" value="text">文章</label>
                <label for="poem"><input type="radio" id="poem" v-model="types" value="poem">辞海</label>
            </div>
            <input type="text" name="title" v-model="title" maxlength="25" placeholder="文章标题">
            <input type="text" name="type" v-model="art_type" maxlength="6" placeholder="文章类型" v-if="types == 'text'">
            <!-- 引入 富文本编辑器 -->
            <div class="edit_container">
                <quill-editor
                    v-model="content" 
                    ref="myQuillEditor" 
                    :options="editorOption" 
                    @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                    @change="onEditorChange($event)">
                </quill-editor>
            <button @click="pub">保存</button>
        </div>
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
            mypass : '',
            art_type : '',
            editorOption: {},
            types : 'text'
        }
    },
     computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        },
    },
    methods : {
        onEditorReady(editor) { // 准备编辑器
        },
        onEditorBlur(){}, // 失去焦点事件
        onEditorFocus(){}, // 获得焦点事件
        onEditorChange(){}, // 内容改变事件
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
        // 发布文字(文章或者词句) 传送数据到数据库
        pub(){
            var that = this
            var sure_text = this.title.trim() != '' && this.content.trim() != '' && this.art_type.trim()
            var sure_poem = this.title.trim() != '' && this.content.trim()
            if(this.types === 'text' && sure_text){
                this.$http.post('api/addtext',{params:{
                    title : that.title,
                    article : that.content,
                    type : that.art_type
                }})
                alert('发布成功，兄弟...')
            }else if(this.types === 'poem' && sure_poem){
                this.$http.post('api/poems',{params:{
                    title : that.title,
                    poem : that.content
                }})
                alert('发布成功，兄弟...')
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
border:.02rem solid gray;
font-size: .3rem;
outline: none;
width: 90%;
display: inline-block;
}
.realme,.login{
    padding: .4rem .25rem;
    font-size: .25rem;
    text-align: left;
    .chooes{
        margin:.25rem 0;
        >input{
            margin: .2rem .25rem;
        }
    }
    .edit_container{
        margin-top: .2rem ;
    }
    >input{
        margin-top: .2rem;
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


