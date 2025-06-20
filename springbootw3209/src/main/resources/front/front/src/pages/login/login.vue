<template>
<div>
	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20221021/f75c84ac8af04c5b96a2d6e5a317e3c4.png)","display":"flex","width":"100%","backgroundSize":"100% 100%","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
		<el-form ref="loginForm" :model="loginForm" :style='{"padding":"40px 250px 20px 50px","margin":"0","borderRadius":"10px","left":"70px","background":"#fff","width":"600px","position":"absolute","height":"auto"}' :rules="rules">
			<div v-if="false" :style='{"margin":"0 0 10px 0","color":"rgba(64, 158, 255, 1)","textAlign":"center","width":"100%","lineHeight":"44px","fontSize":"20px","textShadow":"4px 4px 2px rgba(64, 158, 255, .5)"}'>USER / LOGIN</div>
			<div v-if="true" :style='{"width":"100%","margin":"0 0 10px 0","lineHeight":"44px","fontSize":"22px","color":"#000000","height":"auto"}'>基于Web的就业管理系统登录</div>
			<el-form-item v-if="loginType==1" class="list-item" :style='{"width":"100%","margin":"0 auto 10px"}' prop="username">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>账号：</div>
				<input :style='{"padding":"0 10px","borderColor":"#CDCDCD","color":"#000","outlineOffset":"4px","borderWidth":"0 0 2px","width":"100%","fontSize":"14px","borderStyle":"solid","height":"44px"}' v-model="loginForm.username" placeholder="请输入账户">
			</el-form-item>
			<el-form-item v-if="loginType==1" class="list-item" :style='{"width":"100%","margin":"0 auto 10px"}' prop="password">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>密码：</div>
				<input :style='{"padding":"0 10px","borderColor":"#CDCDCD","color":"#000","outlineOffset":"4px","borderWidth":"0 0 2px","width":"100%","fontSize":"14px","borderStyle":"solid","height":"44px"}' v-model="loginForm.password" placeholder="请输入密码" type="password">
			</el-form-item>
			<el-form-item v-if="roles.length>1" class="list-type" :style='{"width":"100%","textAlign":"center","margin":"20px auto"}' prop="role">
				<el-radio v-model="loginForm.tableName" :label="item.tableName" v-for="(item, index) in roles" :key="index" @change.native="getCurrentRow(item)">{{item.roleName}}</el-radio>
			</el-form-item>
			<el-form-item :style='{"width":"100%","margin":"20px auto"}'>
				<el-button v-if="loginType==1" :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"0px 5px 0","outline":"none","color":"#000","borderRadius":"4px","background":"linear-gradient(270deg, #01AE9D 0%, #6077E9 100%)","width":"100%","fontSize":"20px","fontWeight":"600","height":"44px"}' @click="submitForm('loginForm')">登录</el-button>
				<el-button v-if="loginType==1" :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"0 5px","outline":"none","color":"#fff","borderRadius":"4px","background":"rgba(64, 158, 255, 1)","display":"none","width":"auto","fontSize":"14px","height":"44px"}' @click="resetForm('loginForm')">重置</el-button>
                <el-upload v-if="loginType==2" :action="baseUrl + 'file/upload'" :show-file-list="false" :on-success="faceLogin">
                    <el-button :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"0px 5px 0","outline":"none","color":"#000","borderRadius":"4px","background":"linear-gradient(270deg, #01AE9D 0%, #6077E9 100%)","width":"100%","fontSize":"20px","fontWeight":"600","height":"44px"}'>人脸识别登录</el-button>
                </el-upload>
			</el-form-item>
			<div :style='{"margin":"20px auto","textAlign":"center","flexWrap":"wrap","display":"flex"}'>
			<router-link :style='{"cursor":"pointer","padding":"2px 0","margin":"3px 5px","color":"#000","background":"#F2FAFF","width":"31%","fontSize":"12px","textDecoration":"none"}' :to="{path: '/register', query: {role: item.tableName,pageFlag:'register'}}" v-if="item.hasFrontRegister=='是'" v-for="(item, index) in roles" :key="index">注册{{item.roleName.replace('注册','')}}</router-link>
			</div>
		</el-form>
    </div>
</div>
</template>

<script>

export default {
	//数据集合
	data() {
		return {
            baseUrl: this.$config.baseUrl,
            loginType: 1,
			roleMenus: [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["新增","查看","修改","删除"],"menu":"企业","menuJump":"列表","tableName":"qiye"}],"menu":"企业管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["新增","查看","修改","删除","审核"],"menu":"招聘信息","menuJump":"列表","tableName":"zhaopinxinxi"}],"menu":"招聘信息管理"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["新增","查看","修改","删除"],"menu":"行业类型","menuJump":"列表","tableName":"xingyeleixing"}],"menu":"行业类型管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除","审核"],"menu":"人才库","menuJump":"列表","tableName":"rencaiku"}],"menu":"人才库管理"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看","审核"],"menu":"简历投递","menuJump":"列表","tableName":"jianlitoudi"}],"menu":"简历投递管理"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看"],"menu":"面试邀请","menuJump":"列表","tableName":"mianshiyaoqing"}],"menu":"面试邀请管理"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看","回复"],"menu":"求职咨询","menuJump":"列表","tableName":"qiuzhizixun"}],"menu":"求职咨询管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看"],"menu":"企业回复","menuJump":"列表","tableName":"qiyehuifu"}],"menu":"企业回复管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["新增","查看","修改","删除"],"menu":"招聘新闻","menuJump":"列表","tableName":"zhaopinxinwen"}],"menu":"招聘新闻管理"},{"child":[{"appFrontIcon":"cuIcon-message","buttons":["查看","修改","回复","删除"],"menu":"投诉建议","tableName":"messages"}],"menu":"投诉建议"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看","投递","咨询"],"menu":"招聘信息列表","menuJump":"列表","tableName":"zhaopinxinxi"}],"menu":"招聘信息模块"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看"],"menu":"招聘新闻列表","menuJump":"列表","tableName":"zhaopinxinwen"}],"menu":"招聘新闻模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除"],"menu":"人才库","menuJump":"列表","tableName":"rencaiku"}],"menu":"人才库管理"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看","修改","删除"],"menu":"简历投递","menuJump":"列表","tableName":"jianlitoudi"}],"menu":"简历投递管理"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看"],"menu":"面试邀请","menuJump":"列表","tableName":"mianshiyaoqing"}],"menu":"面试邀请管理"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看","修改","删除"],"menu":"求职咨询","menuJump":"列表","tableName":"qiuzhizixun"}],"menu":"求职咨询管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看"],"menu":"企业回复","menuJump":"列表","tableName":"qiyehuifu"}],"menu":"企业回复管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看","投递","咨询"],"menu":"招聘信息列表","menuJump":"列表","tableName":"zhaopinxinxi"}],"menu":"招聘信息模块"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看"],"menu":"招聘新闻列表","menuJump":"列表","tableName":"zhaopinxinwen"}],"menu":"招聘新闻模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["新增","查看","修改","删除"],"menu":"招聘信息","menuJump":"列表","tableName":"zhaopinxinxi"}],"menu":"招聘信息管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看","修改","删除","邀请"],"menu":"人才库","menuJump":"列表","tableName":"rencaiku"}],"menu":"人才库管理"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看","审核"],"menu":"简历投递","menuJump":"列表","tableName":"jianlitoudi"}],"menu":"简历投递管理"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","修改","删除"],"menu":"面试邀请","menuJump":"列表","tableName":"mianshiyaoqing"}],"menu":"面试邀请管理"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看","回复"],"menu":"求职咨询","menuJump":"列表","tableName":"qiuzhizixun"}],"menu":"求职咨询管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看","修改","删除"],"menu":"企业回复","menuJump":"列表","tableName":"qiyehuifu"}],"menu":"企业回复管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看"],"menu":"招聘新闻","menuJump":"列表","tableName":"zhaopinxinwen"}],"menu":"招聘新闻管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看","投递","咨询"],"menu":"招聘信息列表","menuJump":"列表","tableName":"zhaopinxinxi"}],"menu":"招聘信息模块"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看"],"menu":"招聘新闻列表","menuJump":"列表","tableName":"zhaopinxinwen"}],"menu":"招聘新闻模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"企业","tableName":"qiye"}],
			loginForm: {
				username: '',
				password: '',
				tableName: '',
				code: '',
			},
			role: '',
            roles: [],
			rules: {
				username: [
					{ required: true, message: '请输入账户', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' }
				]
			},
			codes: [{
				num: 1,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 2,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 3,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 4,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}]
		}
	},
	created() {
        for(let item in this.roleMenus) {
            if(this.roleMenus[item].hasFrontLogin=='是') {
                this.roles.push(this.roleMenus[item]);
            }
        }
	},
	mounted() {
	},
    //方法集合
    methods: {
		randomString() {
			var len = 4;
			var chars = [
			  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
			  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
			  'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
			  'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
			  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2',
			  '3', '4', '5', '6', '7', '8', '9'
			]
			var colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
			var sizes = ['14', '15', '16', '17', '18']
			
			var output = []
			for (var i = 0; i < len; i++) {
			  // 随机验证码
			  var key = Math.floor(Math.random() * chars.length)
			  this.codes[i].num = chars[key]
			  // 随机验证码颜色
			  var code = '#'
			  for (var j = 0; j < 6; j++) {
			    var key = Math.floor(Math.random() * colors.length)
			    code += colors[key]
			  }
			  this.codes[i].color = code
			  // 随机验证码方向
			  var rotate = Math.floor(Math.random() * 45)
			  var plus = Math.floor(Math.random() * 2)
			  if (plus == 1) rotate = '-' + rotate
			  this.codes[i].rotate = 'rotate(' + rotate + 'deg)'
			  // 随机验证码字体大小
			  var size = Math.floor(Math.random() * sizes.length)
			  this.codes[i].size = sizes[size] + 'px'
			}
		},
      getCurrentRow(row) {
        this.role = row.roleName;
      },
      submitForm(formName) {
        if (this.roles.length!=1) {
            if (!this.role) {
                this.$message.error("请选择登录用户类型");
                return false;
            }
        } else {
            this.role = this.roles[0].roleName;
            this.loginForm.tableName = this.roles[0].tableName;
        }
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.get(`${this.loginForm.tableName}/login`, {params: this.loginForm}).then(res => {
              if (res.data.code === 0) {
                localStorage.setItem('Token', res.data.token);
                localStorage.setItem('UserTableName', this.loginForm.tableName);
                localStorage.setItem('username', this.loginForm.username);
                localStorage.setItem('adminName', this.loginForm.username);
                localStorage.setItem('sessionTable', this.loginForm.tableName);
                localStorage.setItem('role', this.role);
                localStorage.setItem('keyPath', this.$config.indexNav.length+2);
                this.$router.push('/index/center');
                this.$message({
                  message: '登录成功',
                  type: 'success',
                  duration: 1500,
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
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

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20221021/f75c84ac8af04c5b96a2d6e5a317e3c4.png);
		
		.el-form-item {
		  & /deep/ .el-form-item__content {
		    width: 100%;
		  }
		}
		
		.list-item /deep/ .el-input .el-input__inner {
			padding: 0 10px;
			color: #000;
			width: 100%;
			font-size: 14px;
			border-color: #CDCDCD;
			outline-offset: 4px;
			border-width: 0 0 2px;
			border-style: solid;
			height: 44px;
		}
		
		.list-code /deep/ .el-input .el-input__inner {
			border: 1px solid #CDCDCD;
			padding: 0 10px;
			outline: none;
			color: #000;
			display: inline-block;
			vertical-align: middle;
			width: calc(100% - 80px);
			font-size: 14px;
			height: 44px;
		}
		
		.list-type /deep/ .el-radio__input .el-radio__inner {
			background: rgba(53, 53, 53, 0);
			border-color: #666666;
		}
		.list-type /deep/ .el-radio__input.is-checked .el-radio__inner {
			background: #19E0D6;
			border-color: #19E0D6;
		}
		.list-type /deep/ .el-radio__label {
			color: #666666;
			font-size: 12px;
		}
		.list-type /deep/ .el-radio__input.is-checked+.el-radio__label {
			color: #19E0D6;
			font-size: 12px;
		}
	}
</style>
