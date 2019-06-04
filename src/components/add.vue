<template>
    <div class="add">
        <div class="login" v-if="!myself">
            <el-input type="text" v-model="myname" maxlength="10" placeholder="主人名"></el-input><br>
            <el-input type="password" v-model="mypass" maxlength="10" placeholder="主人密码"></el-input>
            <el-button @click="toadd">show time</el-button>
        </div>
        <div class="realme" v-if="myself">
            <!-- 选择发布文字的类型   默认为 文章-->
            <div class="chooes">
                <label for="text"><input type="radio" id="text" v-model="types" value="text">文章</label>
                <label for="poem"><input type="radio" id="poem" v-model="types" value="poem">辞海</label>
            </div>
            <el-input type="text" name="title" v-model="title" maxlength="25" placeholder="文章标题"></el-input>
            <el-input type="text" name="type" v-model="art_type" maxlength="6" placeholder="文章类型" v-if="types == 'text'"></el-input>
            <!-- 引入 富文本编辑器 -->
            <div class="edit_container">
                <el-upload
                    class="avatar-uploader"
                    :action="serverUrl"
                    name="img"
                    :headers="header"
                    :show-file-list="false"
                    :on-success="uploadSuccess"
                    :on-error="uploadError"
                    :before-upload="beforeUpload">
                </el-upload>
                <el-row v-loading="uillUpdateImg">
                    <quill-editor
                        v-model="content" 
                        ref="myQuillEditor" 
                        :options="editorOption" 
                        @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                        @change="onEditorChange($event)">
                    </quill-editor>
                 </el-row>
                 
            <el-button @click="pub">发布</el-button>
        </div>
        </div>
    </div>
</template>

<script>
// 工具栏配置
const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{'header': 1}, {'header': 2}],               // custom button values
  [{'list': 'ordered'}, {'list': 'bullet'}],
  [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
  [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
  [{'direction': 'rtl'}],                         // text direction

  [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
  [{'header': [1, 2, 3, 4, 5, 6, false]}],

  [{'color': []}, {'background': []}],          // dropdown with defaults from theme
  [{'font': []}],
  [{'align': []}],
  ['link', 'image', 'video'],
  ['clean']                                         // remove formatting button
]
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
            types : 'text',
            quillUpdateImg: false, // 根据图片上传状态来确定是否显示loading动画，刚开始是false,不显示
            serverUrl: '',  // 这里写你要上传的 图片服务器地址
            header: {token: sessionStorage.token},  // 有的图片服务器要求请求头需要有token之类的参数，写在这里
            detailContent: '', // 富文本内容
            editorOption: {
                placeholder: '',
                theme: 'snow',  // or 'bubble'
                modules: {
                    toolbar: {
                        container: toolbarOptions,  // 工具栏
                         handlers: {
                            'image': function (value) {
                            if (value) {
                                document.querySelector('.avatar-uploader input').click()
                            } else {
                                this.quill.format('image', false);
                            }
                            }
                        }
                    }
                }
            }
        }
    },
     computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        },
    },
    methods : {
        // 上传图片前
        beforeUpload(res, file) {
             this.quillUpdateImg = true
        },
        // 上传图片成功
        uploadSuccess(res, file) {
            // res为图片服务器返回的数据
                // 获取富文本组件实例
                let quill = this.$refs.myQuillEditor.quill
                // 如果上传成功
                if (res.code === '200' && res.info !== null) {
                    // 获取光标所在位置
                    let length = quill.getSelection().index;
                    // 插入图片  res.info为服务器返回的图片地址
                    quill.insertEmbed(length, 'image', res.info)
                    // 调整光标到最后
                    quill.setSelection(length + 1)
                } else {
                    this.$message.error('图片插入失败')
                }
                // loading动画消失
                this.quillUpdateImg = false
        },
        // 上传图片失败
        uploadError(res, file) {
            // loading动画消失
                this.quillUpdateImg = false
                this.$message.error('图片插入失败')
        },
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
                this.$message.error('你不是主人啊...')
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
                this.$message({
                    message: '发布成功，兄弟...',
                    type: 'success'
                });
            }else if(this.types === 'poem' && sure_poem){
                this.$http.post('api/poems',{params:{
                    title : that.title,
                    poem : that.content
                }})
                this.$message({
                    message: '发布成功，兄弟...',
                    type: 'success'
                });
            }else{
                this.$message.error('不要输入空的啊，兄弟...')
            }
        }
    },
     mounted(){
        this.toin()
    }
}
</script>

<style lang="scss" scoped>
/deep/ .el-input{
    margin: 12px 0;
}
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


