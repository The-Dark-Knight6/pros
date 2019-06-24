<template>
    <div class="kidding">
        <p class="pi">全站picture</p>
          <!-- 卡片式的图片轮播 -->
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="(item,v) in img" :key="v">
            <img :src="item" alt="imgs" style="width:100%;border-radius:8px;">
            </el-carousel-item>
        </el-carousel>
        <!-- 时间线 -->
        <p class="pi">网站process</p>
        <div class="block">           
            <el-timeline>
                <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :icon="activity.icon"
                :type="activity.type"
                :color="activity.color"
                :size="activity.size"
                :timestamp="activity.timestamp">
                {{activity.content}}
                </el-timeline-item>
            </el-timeline>
        </div>
        <p class="pi">日子calendar</p>
        <el-calendar v-model="value">
        </el-calendar>
        <div class="ask">
            <p class="pi">问卷investigation</p>
            <!-- element插件的表单 -->
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="您的大名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
             <el-form-item label="您的邮箱" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item label="需要改进" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择板块">
                <el-option label="总镖" value="zongbiao"></el-option>
                <el-option label="文章" value="wenzhang"></el-option>
                <el-option label="辞海" value="cihai"></el-option>
                <el-option label="关于" value="guanyu"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="回复时间" required>
                <el-col :span="11">
                <el-form-item prop="date1">
                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                <el-form-item prop="date2">
                    <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="是否保密" prop="delivery">
                <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="升级建议" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="文案/文字与图片的匹配度" name="type"></el-checkbox>
                <el-checkbox label="全局样式" name="type"></el-checkbox>
                <el-checkbox label="模块划分" name="type"></el-checkbox>
                <el-checkbox label="页眉和页脚" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="网站满意度" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                <el-radio label="满意"></el-radio>
                <el-radio label="just so so"></el-radio>
                <el-radio label="辣鸡"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="金玉良言" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                <el-button @click="$router.back(-1)">取消</el-button>
            </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            value: new Date(),
            img : [
                require('../assets/212287.jpg'),
                require('../assets/315441.jpg'),
                require('../assets/309617.jpg'),
                require('../assets/323888.jpg'),
                require('../assets/280745.jpg'),
                require('../assets/318553.jpg'),
                require('../assets/323822.jpg')
            ],
            ruleForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
             activities: [{
                    content: '购买服务器（大地丰盈，人间并不寂寥）',
                    timestamp: '2019-05-11 13:14',
                    size: 'large',
                    type: 'primary',
                    icon: 'el-icon-more'
                }, {
                    content: '构建体系（不妨不妨，来日方长）',
                    timestamp: '2019-05-20 09:21',
                    color: '#0bbd87'
                }, {
                    content: '备案申请成功（世间 酸甜苦辣 若长良川）',
                    timestamp: '2019-05-31 08:16',
                    color:'yellow'
                }, {
                    content: '网站上线（星芒万里，瞬时毫厘）',
                    timestamp: '2019-06-01 03:14',
                    color:'black'
                },{
                    content: '继续维护更新（身处黑暗 仰望光明 永存希望）',
                    timestamp: '2019-06-11 20:59',
                    color:'red'
                }],
            rules: {
                email : [
                    { required: true, message: '请输入邮箱地址(获奖凭证)', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址(获奖凭证)', trigger: ['blur', 'change'] }
                ],
                name: [
                    { required: true, message: '请输入你的鼎鼎大名哟', trigger: 'blur' },  
                    { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
                ],
                region: [
                    { required: true, message: '请选择您希冀看到更好的板块', trigger: 'change' }
                ],
                date1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                date2: [
                    { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                ],
                type: [
                    { type: 'array', required: true, message: '请至少选择一个升级建议', trigger: 'change' }
                ],
                resource: [
                    { required: true, message: '请选择一个哟', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: '这是伟大的责任，舍你其谁？', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
                message : '提交成功，感谢您的参与，等待好运降临吧~',
                type : 'success'
            })
            this.$refs[formName].resetFields();
          } else {
            this.$message({
                message : '提交失败，看看哪里出错了呗~',
                type : 'warning'
            })
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }    
}
</script>

<style>
/* 关于element的样式修改 */
 .el-carousel{
      margin-top: 20px;
  }
  .el-carousel__indicators--outside{
      display: none;
  }
  .el-calendar{
      background-color: transparent;
  }
</style>

<style lang="scss" scoped>
.pi::before{
    content: '【';
    color:red;
}
.pi::after{
    content: '】';
    color:red;
}
.block{
    padding: 0 30px;
}
</style>


