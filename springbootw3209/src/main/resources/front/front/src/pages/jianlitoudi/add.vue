<template>
<div :style='{"width":"1000px","padding":"20px","margin":"10px auto","position":"relative","borderRadius":"20px","background":"#fff"}'>
    <el-form
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="110px"
    >
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#f6f6f6"}' label="岗位名称" prop="gangweimingcheng">
            <el-input v-model="ruleForm.gangweimingcheng" 
                placeholder="岗位名称" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#f6f6f6"}' label="工作地点" prop="gongzuodidian">
            <el-input v-model="ruleForm.gongzuodidian" 
                placeholder="工作地点" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#f6f6f6"}' label="薪资待遇" prop="xinzidaiyu">
            <el-input v-model="ruleForm.xinzidaiyu" 
                placeholder="薪资待遇" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#f6f6f6"}' label="行业类型" prop="xingyeleixing">
            <el-input v-model="ruleForm.xingyeleixing" 
                placeholder="行业类型" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#f6f6f6"}' label="学历要求" prop="xueliyaoqiu">
            <el-input v-model="ruleForm.xueliyaoqiu" 
                placeholder="学历要求" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#f6f6f6"}' label="招聘人数" prop="zhaopinrenshu">
            <el-input v-model="ruleForm.zhaopinrenshu" 
                placeholder="招聘人数" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#f6f6f6"}' label="企业账号" prop="qiyezhanghao">
            <el-input v-model="ruleForm.qiyezhanghao" 
                placeholder="企业账号" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#f6f6f6"}' label="企业名称" prop="qiyemingcheng">
            <el-input v-model="ruleForm.qiyemingcheng" 
                placeholder="企业名称" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#f6f6f6"}' label="企业类型" prop="qiyeleixing">
            <el-input v-model="ruleForm.qiyeleixing" 
                placeholder="企业类型" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#f6f6f6"}' label="联系电话" prop="lianxidianhua">
            <el-input v-model="ruleForm.lianxidianhua" 
                placeholder="联系电话" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#f6f6f6"}' label="学生账号" prop="xueshengzhanghao">
            <el-input v-model="ruleForm.xueshengzhanghao" 
                placeholder="学生账号" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#f6f6f6"}' label="学生姓名" prop="xueshengxingming">
            <el-input v-model="ruleForm.xueshengxingming" 
                placeholder="学生姓名" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#f6f6f6"}' label="联系方式" prop="lianxifangshi">
            <el-input v-model="ruleForm.lianxifangshi" 
                placeholder="联系方式" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#f6f6f6"}' label="个人资料" prop="gerenziliao">
            <file-upload
            tip="点击上传个人资料"
            action="file/upload"
            :limit="1"
            :multiple="true"
            :fileUrls="ruleForm.gerenziliao?ruleForm.gerenziliao:''"
            @change="gerenziliaoUploadChange"
            ></file-upload>
          </el-form-item>  
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#f6f6f6"}' label="头像" v-if="type!='cross' || (type=='cross' && !ro.touxiang)" prop="touxiang">
            <file-upload
            tip="点击上传头像"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
            @change="touxiangUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#f6f6f6"}' class="upload" v-else label="头像" prop="touxiang">
                <img v-if="ruleForm.touxiang.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.touxiang.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.touxiang.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"#00ae9d","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"0px solid rgba(64, 158, 255, 1)","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#fff","borderRadius":"4px","background":"#999","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        id: '',
        baseUrl: '',
        ro:{
            gangweimingcheng : false,
            gongzuodidian : false,
            xinzidaiyu : false,
            xingyeleixing : false,
            xueliyaoqiu : false,
            zhaopinrenshu : false,
            qiyezhanghao : false,
            qiyemingcheng : false,
            qiyeleixing : false,
            lianxidianhua : false,
            xueshengzhanghao : false,
            xueshengxingming : false,
            lianxifangshi : false,
            gerenziliao : false,
            touxiang : false,
            sfsh : false,
            shhf : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          gangweimingcheng: '',
          gongzuodidian: '',
          xinzidaiyu: '',
          xingyeleixing: '',
          xueliyaoqiu: '',
          zhaopinrenshu: '',
          qiyezhanghao: '',
          qiyemingcheng: '',
          qiyeleixing: '',
          lianxidianhua: '',
          xueshengzhanghao: '',
          xueshengxingming: '',
          lianxifangshi: '',
          gerenziliao: '',
          touxiang: '',
        },
        rules: {
          gangweimingcheng: [
            { required: true, message: '岗位名称不能为空', trigger: 'blur' },
          ],
          gongzuodidian: [
          ],
          xinzidaiyu: [
          ],
          xingyeleixing: [
          ],
          xueliyaoqiu: [
          ],
          zhaopinrenshu: [
          ],
          qiyezhanghao: [
          ],
          qiyemingcheng: [
          ],
          qiyeleixing: [
          ],
          lianxidianhua: [
          ],
          xueshengzhanghao: [
            { required: true, message: '学生账号不能为空', trigger: 'blur' },
          ],
          xueshengxingming: [
            { required: true, message: '学生姓名不能为空', trigger: 'blur' },
          ],
          lianxifangshi: [
          ],
          gerenziliao: [
          ],
          touxiang: [
          ],
          sfsh: [
          ],
          shhf: [
          ],
        },
      };
    },
    computed: {



    },
    created() {
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='gangweimingcheng'){
              this.ruleForm.gangweimingcheng = obj[o];
              this.ro.gangweimingcheng = true;
              continue;
            }
            if(o=='gongzuodidian'){
              this.ruleForm.gongzuodidian = obj[o];
              this.ro.gongzuodidian = true;
              continue;
            }
            if(o=='xinzidaiyu'){
              this.ruleForm.xinzidaiyu = obj[o];
              this.ro.xinzidaiyu = true;
              continue;
            }
            if(o=='xingyeleixing'){
              this.ruleForm.xingyeleixing = obj[o];
              this.ro.xingyeleixing = true;
              continue;
            }
            if(o=='xueliyaoqiu'){
              this.ruleForm.xueliyaoqiu = obj[o];
              this.ro.xueliyaoqiu = true;
              continue;
            }
            if(o=='zhaopinrenshu'){
              this.ruleForm.zhaopinrenshu = obj[o];
              this.ro.zhaopinrenshu = true;
              continue;
            }
            if(o=='qiyezhanghao'){
              this.ruleForm.qiyezhanghao = obj[o];
              this.ro.qiyezhanghao = true;
              continue;
            }
            if(o=='qiyemingcheng'){
              this.ruleForm.qiyemingcheng = obj[o];
              this.ro.qiyemingcheng = true;
              continue;
            }
            if(o=='qiyeleixing'){
              this.ruleForm.qiyeleixing = obj[o];
              this.ro.qiyeleixing = true;
              continue;
            }
            if(o=='lianxidianhua'){
              this.ruleForm.lianxidianhua = obj[o];
              this.ro.lianxidianhua = true;
              continue;
            }
            if(o=='xueshengzhanghao'){
              this.ruleForm.xueshengzhanghao = obj[o];
              this.ro.xueshengzhanghao = true;
              continue;
            }
            if(o=='xueshengxingming'){
              this.ruleForm.xueshengxingming = obj[o];
              this.ro.xueshengxingming = true;
              continue;
            }
            if(o=='lianxifangshi'){
              this.ruleForm.lianxifangshi = obj[o];
              this.ro.lianxifangshi = true;
              continue;
            }
            if(o=='gerenziliao'){
              this.ruleForm.gerenziliao = obj[o];
              this.ro.gerenziliao = true;
              continue;
            }
            if(o=='touxiang'){
              this.ruleForm.touxiang = obj[o].split(",")[0];
              this.ro.touxiang = true;
              continue;
            }
          }
        }
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
            if(json.xueshengzhanghao!=''&&json.xueshengzhanghao){
                this.ruleForm.xueshengzhanghao = json.xueshengzhanghao
            }
            if(json.xueshengxingming!=''&&json.xueshengxingming){
                this.ruleForm.xueshengxingming = json.xueshengxingming
            }
            if(json.lianxifangshi!=''&&json.lianxifangshi){
                this.ruleForm.lianxifangshi = json.lianxifangshi
            }
          }
        });
      },

    // 多级联动参数
      // 多级联动参数
      info(id) {
        this.$http.get('jianlitoudi/detail/${id}', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

        //更新跨表属性
        var crossuserid;
        var crossrefid;
        var crossoptnum;
        this.$refs["ruleForm"].validate(valid => {
          if(valid) {
            if(this.type=='cross'){
                 var statusColumnName = localStorage.getItem('statusColumnName');
                 var statusColumnValue = localStorage.getItem('statusColumnValue');
                 if(statusColumnName && statusColumnName!='') {
                     var obj = JSON.parse(localStorage.getItem('crossObj'));
                     if(!statusColumnName.startsWith("[")) {
                         for (var o in obj){
                             if(o==statusColumnName){
                                 obj[o] = statusColumnValue;
                             }
                         }
                         var table = localStorage.getItem('crossTable');
                         this.$http.post(table+'/update', obj).then(res => {});
                     } else {
                            crossuserid=Number(localStorage.getItem('userid'));
                            crossrefid=obj['id'];
                            crossoptnum=localStorage.getItem('statusColumnName');
                            crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                     }
                 }
            }
            if(crossrefid && crossuserid) {
                 this.ruleForm.crossuserid=crossuserid;
                 this.ruleForm.crossrefid=crossrefid;
                 var params = {
                     page: 1,
                     limit: 10,
                     crossuserid:crossuserid,
                     crossrefid:crossrefid,
                 }
                 this.$http.get('jianlitoudi/list', {
                  params: params
                 }).then(res => {
                     if(res.data.data.total>=crossoptnum) {
                         this.$message({
                          message: localStorage.getItem('tips'),
                          type: 'success',
                          duration: 1500,
                         });
                          return false;
                     } else {
                         // 跨表计算


                          this.$http.post('jianlitoudi/add', this.ruleForm).then(res => {
                              if (res.data.code == 0) {
                                  this.$message({
                                      message: '操作成功',
                                      type: 'success',
                                      duration: 1500,
                                      onClose: () => {
                                          this.$router.go(-1);
                                      }
                                  });
                              } else {
                                  this.$message({
                                      message: res.data.msg,
                                      type: 'error',
                                      duration: 1500
                                  });
                              }
                          });
                     }
                 });
             } else {


                  this.$http.post('jianlitoudi/add', this.ruleForm).then(res => {
                     if (res.data.code == 0) {
                          this.$message({
                              message: '操作成功',
                              type: 'success',
                              duration: 1500,
                              onClose: () => {
                                  this.$router.go(-1);
                              }
                          });
                      } else {
                          this.$message({
                              message: res.data.msg,
                              type: 'error',
                              duration: 1500
                          });
                      }
                  });
             }
          }
        });
      },
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
      // 返回
      back() {
        this.$router.go(-1);
      },
      gerenziliaoUploadChange(fileUrls) {
          this.ruleForm.gerenziliao = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
      touxiangUploadChange(fileUrls) {
          this.ruleForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 110px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: center;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 110px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 2px solid #01AE9D;
	  border-radius: 4px;
	  padding: 0 12px;
	  outline: none;
	  color: #000;
	  width: 300px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border: 2px solid #01AE9D;
	  border-radius: 4px;
	  padding: 0 10px;
	  outline: none;
	  color: #000;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border: 2px solid #01AE9D;
	  border-radius: 4px;
	  padding: 0 10px 0 30px;
	  outline: none;
	  color: #000;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  border: 1px dashed #999;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #000;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  border: 1px dashed #999;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #000;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  border: 1px dashed #999;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #000;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 2px solid #01AE9D;
	  border-radius: 4px;
	  padding: 12px;
	  outline: none;
	  color: #000;
	  width: 400px;
	  font-size: 14px;
	  height: 120px;
	}
</style>
