<template>
	<div>
		<div class="container" :style='{"minHeight":"100vh","backgroundAttachment":"fixed","alignItems":"center","background":"url(http://codegen.caihongy.cn/20220722/a5a9809d7bce4ca795483bb67cfd60c8.png)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"repeat","justifyContent":"center"}'>
			<el-form v-if="pageFlag=='register'" :style='{"padding":"20px","boxShadow":"0 0px 0px rgba(64, 158, 255, .8)","margin":"0 0 0 660px","borderRadius":"0","background":"transparent","width":"calc(100vw - 660px)","height":"auto"}' ref="rgsForm" class="rgs-form" :model="rgsForm">
				<div v-if="true" :style='{"margin":"0 0 10px 0","color":"#000","textAlign":"center","width":"100%","lineHeight":"44px","fontSize":"24px","textShadow":"4px 4px 2px rgba(0, 0, 0, .2)"}' class="title">基于Web的就业管理系统注册</div>
				<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"color":"#31ae88","left":"-160px","textAlign":"right","background":"none","width":"150px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable">学生账号</div>
					<el-input  v-model="ruleForm.xueshengzhanghao"  autocomplete="off" placeholder="学生账号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"color":"#31ae88","left":"-160px","textAlign":"right","background":"none","width":"150px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable">学生姓名</div>
					<el-input  v-model="ruleForm.xueshengxingming"  autocomplete="off" placeholder="学生姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"color":"#31ae88","left":"-160px","textAlign":"right","background":"none","width":"150px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable">密码</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"color":"#31ae88","left":"-160px","textAlign":"right","background":"none","width":"150px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable">确认密码</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"color":"#31ae88","left":"-160px","textAlign":"right","background":"none","width":"150px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable">性别</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in xueshengxingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"color":"#31ae88","left":"-160px","textAlign":"right","background":"none","width":"150px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable">年龄</div>
					<el-input  v-model="ruleForm.nianling"  autocomplete="off" placeholder="年龄"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"color":"#31ae88","left":"-160px","textAlign":"right","background":"none","width":"150px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable">籍贯</div>
					<el-input  v-model="ruleForm.jiguan"  autocomplete="off" placeholder="籍贯"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"color":"#31ae88","left":"-160px","textAlign":"right","background":"none","width":"150px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable">头像</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="xueshengtouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"color":"#31ae88","left":"-160px","textAlign":"right","background":"none","width":"150px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable">文化程度</div>
					<el-input  v-model="ruleForm.wenhuachengdu"  autocomplete="off" placeholder="文化程度"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"color":"#31ae88","left":"-160px","textAlign":"right","background":"none","width":"150px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable">联系方式</div>
					<el-input  v-model="ruleForm.lianxifangshi"  autocomplete="off" placeholder="联系方式"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"color":"#31ae88","left":"-160px","textAlign":"right","background":"none","width":"150px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable">身份证</div>
					<el-input  v-model="ruleForm.shenfenzheng"  autocomplete="off" placeholder="身份证"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='qiye'">
					<div v-if="true" :style='{"color":"#31ae88","left":"-160px","textAlign":"right","background":"none","width":"150px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable">企业账号</div>
					<el-input  v-model="ruleForm.qiyezhanghao"  autocomplete="off" placeholder="企业账号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='qiye'">
					<div v-if="true" :style='{"color":"#31ae88","left":"-160px","textAlign":"right","background":"none","width":"150px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable">企业名称</div>
					<el-input  v-model="ruleForm.qiyemingcheng"  autocomplete="off" placeholder="企业名称"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='qiye'">
					<div v-if="true" :style='{"color":"#31ae88","left":"-160px","textAlign":"right","background":"none","width":"150px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable">密码</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='qiye'">
					<div v-if="true" :style='{"color":"#31ae88","left":"-160px","textAlign":"right","background":"none","width":"150px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable">确认密码</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='qiye'">
					<div v-if="true" :style='{"color":"#31ae88","left":"-160px","textAlign":"right","background":"none","width":"150px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable">企业类型</div>
					<el-input  v-model="ruleForm.qiyeleixing"  autocomplete="off" placeholder="企业类型"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='qiye'">
					<div v-if="true" :style='{"color":"#31ae88","left":"-160px","textAlign":"right","background":"none","width":"150px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable">联系电话</div>
					<el-input  v-model="ruleForm.lianxidianhua"  autocomplete="off" placeholder="联系电话"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='qiye'">
					<div v-if="true" :style='{"color":"#31ae88","left":"-160px","textAlign":"right","background":"none","width":"150px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable">企业邮箱</div>
					<el-input  v-model="ruleForm.qiyeyouxiang"  autocomplete="off" placeholder="企业邮箱"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='qiye'">
					<div v-if="true" :style='{"color":"#31ae88","left":"-160px","textAlign":"right","background":"none","width":"150px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable">企业地址</div>
					<el-input  v-model="ruleForm.qiyedizhi"  autocomplete="off" placeholder="企业地址"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='qiye'">
					<div v-if="true" :style='{"color":"#31ae88","left":"-160px","textAlign":"right","background":"none","width":"150px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable">图片</div>
                    <file-upload
                        tip="点击上传图片"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.tupian?ruleForm.tupian:''"
                        @change="qiyetupianUploadChange"
                    ></file-upload>
				</el-form-item>
				<button :style='{"border":"0","cursor":"pointer","padding":"0 10px","boxShadow":"0 0 0px rgba(64, 158, 255, .5)","margin":"20px auto 5px","color":"#fff","display":"block","outline":"none","borderRadius":"5px","background":"#67D4B2","width":"30%","fontSize":"16px","height":"44px"}' type="button" class="r-btn" @click="login()">注册</button>
				<div :style='{"cursor":"pointer","color":"rgba(159, 159, 159, 1)","textAlign":"center","display":"inline-block","width":"100%","lineHeight":"1","fontSize":"12px","textDecoration":"underline"}' class="r-login" @click="close()">已有账号，直接登录</div>
			</el-form>
			
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			ruleForm: {
                xingbie: '',
			},

            pageFlag : '',
			tableName:"",
			rules: {},
            xueshengxingbieOptions: [],
		};
	},
	mounted(){
        this.pageFlag = this.$storage.get("pageFlag");
		let table = this.$storage.get("loginTable");
		this.tableName = table;
        this.xueshengxingbieOptions = "男,女".split(',')
	},
	created() {
    
	},
	destroyed() {
		  	},
	methods: {
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		close(){
			this.$router.push({ path: "/login" });
		},
        xueshengtouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },
        qiyetupianUploadChange(fileUrls) {
            this.ruleForm.tupian = fileUrls;
        },

        // 多级联动参数


		// 注册
		login() {
			var url=this.tableName+"/register";
					if((!this.ruleForm.xueshengzhanghao) && `xuesheng` == this.tableName){
						this.$message.error(`学生账号不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((!this.ruleForm.xueshengxingming) && `xuesheng` == this.tableName){
						this.$message.error(`学生姓名不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((!this.ruleForm.mima) && `xuesheng` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `xuesheng` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					
					if(`xuesheng` == this.tableName && this.ruleForm.nianling&&(!this.$validate.isIntNumer(this.ruleForm.nianling))){
						this.$message.error(`年龄应输入整数`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					if(`xuesheng` == this.tableName && this.ruleForm.lianxifangshi&&(!this.$validate.isMobile(this.ruleForm.lianxifangshi))){
						this.$message.error(`联系方式应输入手机格式`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					if(`xuesheng` == this.tableName && this.ruleForm.shenfenzheng&&(!this.$validate.checkIdCard(this.ruleForm.shenfenzheng))){
						this.$message.error(`身份证应输入身份证格式`);
						return
					}
					
					
				
					if((!this.ruleForm.qiyezhanghao) && `qiye` == this.tableName){
						this.$message.error(`企业账号不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((!this.ruleForm.qiyemingcheng) && `qiye` == this.tableName){
						this.$message.error(`企业名称不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((!this.ruleForm.mima) && `qiye` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `qiye` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
            if(this.ruleForm.tupian!=null) {
                this.ruleForm.tupian = this.ruleForm.tupian.replace(new RegExp(this.$base.url,"g"),"");
            }
					
					
					
					
					
					
					
					
					
					
				
			
			this.$http({
				url: url,
				method: "post",
				data:this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "注册成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.$router.replace({ path: "/login" });
						}
					});
				} else {
					this.$message.error(data.msg);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
	.container {
	  position: relative;
	  background: url(http://codegen.caihongy.cn/20220722/a5a9809d7bce4ca795483bb67cfd60c8.png);

		.el-date-editor.el-input {
		  width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border: 1px solid #67D4B2;
						border-radius: 0;
						padding: 0 10px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #000;
						width: 100%;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 1px solid #67D4B2;
						border-radius: 0;
						padding: 0 10px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #000;
						width: 500px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 1px solid #67D4B2;
						border-radius: 0;
						padding: 0 10px 0 30px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #000;
						width: 100%;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 1px solid #67D4B2;
						border-radius: 0;
						padding: 0 10px 0 30px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #000;
						width: 100%;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 1px dashed #67D4B2;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #67D4B2;
		  		  width: 100px;
		  		  font-size: 32px;
		  		  line-height: 100px;
		  		  text-align: center;
		  		  height: 100px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 1px dashed #67D4B2;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #67D4B2;
		  		  width: 100px;
		  		  font-size: 32px;
		  		  line-height: 100px;
		  		  text-align: center;
		  		  height: 100px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 1px dashed #67D4B2;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #67D4B2;
		  		  width: 100px;
		  		  font-size: 32px;
		  		  line-height: 100px;
		  		  text-align: center;
		  		  height: 100px;
		  		}
	}
</style>
