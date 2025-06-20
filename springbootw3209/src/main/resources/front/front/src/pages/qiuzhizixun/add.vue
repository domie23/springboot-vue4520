<template>
<div :style='{"width":"1000px","padding":"20px","margin":"10px auto","position":"relative","borderRadius":"20px","background":"#fff"}'>
    <el-form
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="110px"
    >
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#f6f6f6"}' label="咨询标题" prop="zixunbiaoti">
            <el-input v-model="ruleForm.zixunbiaoti" 
                placeholder="咨询标题" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#f6f6f6"}' label="咨询内容" prop="zixunneirong">
            <el-input v-model="ruleForm.zixunneirong" 
                placeholder="咨询内容" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#f6f6f6"}' label="岗位名称" prop="gangweimingcheng">
            <el-input v-model="ruleForm.gangweimingcheng" 
                placeholder="岗位名称" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#f6f6f6"}' label="企业账号" prop="qiyezhanghao">
            <el-input v-model="ruleForm.qiyezhanghao" 
                placeholder="企业账号" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#f6f6f6"}' label="企业名称" prop="qiyemingcheng">
            <el-input v-model="ruleForm.qiyemingcheng" 
                placeholder="企业名称" clearable ></el-input>
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
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#f6f6f6"}' label="咨询时间" prop="zixunshijian" >
              <el-date-picker
                  value-format="yyyy-MM-dd HH:mm:ss"
                  v-model="ruleForm.zixunshijian" 
                  type="datetime"
                  placeholder="咨询时间">
              </el-date-picker>
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
            zixunbiaoti : false,
            zixunneirong : false,
            gangweimingcheng : false,
            qiyezhanghao : false,
            qiyemingcheng : false,
            xueshengzhanghao : false,
            xueshengxingming : false,
            lianxifangshi : false,
            zixunshijian : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          zixunbiaoti: '',
          zixunneirong: '',
          gangweimingcheng: '',
          qiyezhanghao: '',
          qiyemingcheng: '',
          xueshengzhanghao: '',
          xueshengxingming: '',
          lianxifangshi: '',
          zixunshijian: '',
        },
        rules: {
          zixunbiaoti: [
          ],
          zixunneirong: [
          ],
          gangweimingcheng: [
          ],
          qiyezhanghao: [
          ],
          qiyemingcheng: [
          ],
          xueshengzhanghao: [
            { required: true, message: '学生账号不能为空', trigger: 'blur' },
          ],
          xueshengxingming: [
            { required: true, message: '学生姓名不能为空', trigger: 'blur' },
          ],
          lianxifangshi: [
          ],
          zixunshijian: [
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
      this.ruleForm.zixunshijian = this.getCurDateTime()
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
            if(o=='zixunbiaoti'){
              this.ruleForm.zixunbiaoti = obj[o];
              this.ro.zixunbiaoti = true;
              continue;
            }
            if(o=='zixunneirong'){
              this.ruleForm.zixunneirong = obj[o];
              this.ro.zixunneirong = true;
              continue;
            }
            if(o=='gangweimingcheng'){
              this.ruleForm.gangweimingcheng = obj[o];
              this.ro.gangweimingcheng = true;
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
            if(o=='zixunshijian'){
              this.ruleForm.zixunshijian = obj[o];
              this.ro.zixunshijian = true;
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
        this.$http.get('qiuzhizixun/detail/${id}', {emulateJSON: true}).then(res => {
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
                 this.$http.get('qiuzhizixun/list', {
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


                          this.$http.post('qiuzhizixun/add', this.ruleForm).then(res => {
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


                  this.$http.post('qiuzhizixun/add', this.ruleForm).then(res => {
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
