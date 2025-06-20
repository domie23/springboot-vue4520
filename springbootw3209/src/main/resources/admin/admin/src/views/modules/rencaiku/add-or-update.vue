<template>
	<div class="addEdit-block" style="width: 100%;">
		<el-form
			:style='{"padding":"30px","boxShadow":"0 0px 0px rgba(64, 158, 255, .3)","margin":"-30px 0 0","borderRadius":"0 0 30px 30px","flexWrap":"wrap","background":"#F8F6F7","display":"flex","width":"100%"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="120px"
		>
			<template >
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="标题名称" prop="biaotimingcheng">
					<el-input v-model="ruleForm.biaotimingcheng" placeholder="标题名称" clearable  :readonly="ro.biaotimingcheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="标题名称" prop="biaotimingcheng">
					<el-input v-model="ruleForm.biaotimingcheng" placeholder="标题名称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="学生账号" prop="xueshengzhanghao">
					<el-input v-model="ruleForm.xueshengzhanghao" placeholder="学生账号" clearable  :readonly="ro.xueshengzhanghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="学生账号" prop="xueshengzhanghao">
					<el-input v-model="ruleForm.xueshengzhanghao" placeholder="学生账号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="学生姓名" prop="xueshengxingming">
					<el-input v-model="ruleForm.xueshengxingming" placeholder="学生姓名" clearable  :readonly="ro.xueshengxingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="学生姓名" prop="xueshengxingming">
					<el-input v-model="ruleForm.xueshengxingming" placeholder="学生姓名" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="性别" prop="xingbie">
					<el-input v-model="ruleForm.xingbie" placeholder="性别" clearable  :readonly="ro.xingbie"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="性别" prop="xingbie">
					<el-input v-model="ruleForm.xingbie" placeholder="性别" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="年龄" prop="nianling">
					<el-input v-model="ruleForm.nianling" placeholder="年龄" clearable  :readonly="ro.nianling"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="年龄" prop="nianling">
					<el-input v-model="ruleForm.nianling" placeholder="年龄" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="籍贯" prop="jiguan">
					<el-input v-model="ruleForm.jiguan" placeholder="籍贯" clearable  :readonly="ro.jiguan"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="籍贯" prop="jiguan">
					<el-input v-model="ruleForm.jiguan" placeholder="籍贯" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="联系方式" prop="lianxifangshi">
					<el-input v-model="ruleForm.lianxifangshi" placeholder="联系方式" clearable  :readonly="ro.lianxifangshi"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="联系方式" prop="lianxifangshi">
					<el-input v-model="ruleForm.lianxifangshi" placeholder="联系方式" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="upload" v-if="type!='info' && !ro.zhaopian" label="照片" prop="zhaopian">
					<file-upload
						tip="点击上传照片"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.zhaopian?ruleForm.zhaopian:''"
						@change="zhaopianUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="upload" v-else-if="ruleForm.zhaopian" label="照片" prop="zhaopian">
					<img v-if="ruleForm.zhaopian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.zhaopian.split(',')[0]" width="100" height="100">
					<img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.zhaopian.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="专业" prop="zhuanye">
					<el-input v-model="ruleForm.zhuanye" placeholder="专业" clearable  :readonly="ro.zhuanye"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="专业" prop="zhuanye">
					<el-input v-model="ruleForm.zhuanye" placeholder="专业" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="学历" prop="xueli">
					<el-input v-model="ruleForm.xueli" placeholder="学历" clearable  :readonly="ro.xueli"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="学历" prop="xueli">
					<el-input v-model="ruleForm.xueli" placeholder="学历" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="期望岗位" prop="qiwanggangwei">
					<el-input v-model="ruleForm.qiwanggangwei" placeholder="期望岗位" clearable  :readonly="ro.qiwanggangwei"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="期望岗位" prop="qiwanggangwei">
					<el-input v-model="ruleForm.qiwanggangwei" placeholder="期望岗位" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="期望薪资" prop="qiwangxinzi">
					<el-input v-model="ruleForm.qiwangxinzi" placeholder="期望薪资" clearable  :readonly="ro.qiwangxinzi"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="期望薪资" prop="qiwangxinzi">
					<el-input v-model="ruleForm.qiwangxinzi" placeholder="期望薪资" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="upload" v-if="type!='info'&& !ro.gerenziliao" label="个人资料" prop="gerenziliao">
					<file-upload
						tip="点击上传个人资料"
						action="file/upload"
						:limit="1"
						:multiple="true"
						:fileUrls="ruleForm.gerenziliao?ruleForm.gerenziliao:''"
						@change="gerenziliaoUploadChange"
					></file-upload>
				</el-form-item>  
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else-if="ruleForm.gerenziliao" label="个人资料" prop="gerenziliao">
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 25px","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"0","background":"#67D4B2","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' type="text" size="small" @click="download($base.url+ruleForm.gerenziliao)">下载</el-button>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else-if="!ruleForm.gerenziliao" label="个人资料" prop="gerenziliao">
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 25px","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"0","background":"#67D4B2","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' type="text" size="small">无</el-button>
				</el-form-item>
			</template>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-if="type!='info'"  label="获奖证书" prop="huojiangzhengshu">
					<editor 
						style="min-width: 200px; max-width: 600px;"
						v-model="ruleForm.huojiangzhengshu" 
						class="editor" 
						action="file/upload">
					</editor>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else-if="ruleForm.huojiangzhengshu" label="获奖证书" prop="huojiangzhengshu">
                    <span :style='{"fontSize":"14px","lineHeight":"40px","color":"#000","fontWeight":"500","display":"inline-block"}' v-html="ruleForm.huojiangzhengshu"></span>
                </el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0"}' class="btn">
				<el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"0","background":"#67D4B2","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
				<el-button :style='{"border":"0px solid rgba(64, 158, 255, 1)","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#fff","borderRadius":"0","background":"#67D4B2","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
				<el-button :style='{"border":"0px solid rgba(64, 158, 255, 1)","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#fff","borderRadius":"0","background":"#67D4B2","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				biaotimingcheng : false,
				xueshengzhanghao : false,
				xueshengxingming : false,
				xingbie : false,
				nianling : false,
				jiguan : false,
				lianxifangshi : false,
				zhaopian : false,
				zhuanye : false,
				xueli : false,
				qiwanggangwei : false,
				qiwangxinzi : false,
				huojiangzhengshu : false,
				gerenziliao : false,
				sfsh : false,
				shhf : false,
			},
			
			
			ruleForm: {
				biaotimingcheng: '',
				xueshengzhanghao: '',
				xueshengxingming: '',
				xingbie: '',
				nianling: '',
				jiguan: '',
				lianxifangshi: '',
				zhaopian: '',
				zhuanye: '',
				xueli: '',
				qiwanggangwei: '',
				qiwangxinzi: '',
				huojiangzhengshu: '',
				gerenziliao: '',
				shhf: '',
			},
		
			
			rules: {
				biaotimingcheng: [
					{ required: true, message: '标题名称不能为空', trigger: 'blur' },
				],
				xueshengzhanghao: [
				],
				xueshengxingming: [
				],
				xingbie: [
				],
				nianling: [
				],
				jiguan: [
				],
				lianxifangshi: [
				],
				zhaopian: [
				],
				zhuanye: [
				],
				xueli: [
				],
				qiwanggangwei: [
				],
				qiwangxinzi: [
				],
				huojiangzhengshu: [
				],
				gerenziliao: [
				],
				sfsh: [
				],
				shhf: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {



	},
	created() {
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='biaotimingcheng'){
							this.ruleForm.biaotimingcheng = obj[o];
							this.ro.biaotimingcheng = true;
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
						if(o=='xingbie'){
							this.ruleForm.xingbie = obj[o];
							this.ro.xingbie = true;
							continue;
						}
						if(o=='nianling'){
							this.ruleForm.nianling = obj[o];
							this.ro.nianling = true;
							continue;
						}
						if(o=='jiguan'){
							this.ruleForm.jiguan = obj[o];
							this.ro.jiguan = true;
							continue;
						}
						if(o=='lianxifangshi'){
							this.ruleForm.lianxifangshi = obj[o];
							this.ro.lianxifangshi = true;
							continue;
						}
						if(o=='zhaopian'){
							this.ruleForm.zhaopian = obj[o];
							this.ro.zhaopian = true;
							continue;
						}
						if(o=='zhuanye'){
							this.ruleForm.zhuanye = obj[o];
							this.ro.zhuanye = true;
							continue;
						}
						if(o=='xueli'){
							this.ruleForm.xueli = obj[o];
							this.ro.xueli = true;
							continue;
						}
						if(o=='qiwanggangwei'){
							this.ruleForm.qiwanggangwei = obj[o];
							this.ro.qiwanggangwei = true;
							continue;
						}
						if(o=='qiwangxinzi'){
							this.ruleForm.qiwangxinzi = obj[o];
							this.ro.qiwangxinzi = true;
							continue;
						}
						if(o=='huojiangzhengshu'){
							this.ruleForm.huojiangzhengshu = obj[o];
							this.ro.huojiangzhengshu = true;
							continue;
						}
						if(o=='gerenziliao'){
							this.ruleForm.gerenziliao = obj[o];
							this.ro.gerenziliao = true;
							continue;
						}
				}
				
















			}
			
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
					if(json.xueshengzhanghao!=''&&json.xueshengzhanghao && this.$storage.get("role")!="管理员"){
						this.ruleForm.xueshengzhanghao = json.xueshengzhanghao
						this.ro.xueshengzhanghao = true;
					}
					if(json.xueshengxingming!=''&&json.xueshengxingming && this.$storage.get("role")!="管理员"){
						this.ruleForm.xueshengxingming = json.xueshengxingming
						this.ro.xueshengxingming = true;
					}
					if(json.xingbie!=''&&json.xingbie && this.$storage.get("role")!="管理员"){
						this.ruleForm.xingbie = json.xingbie
						this.ro.xingbie = true;
					}
					if(json.nianling!=''&&json.nianling && this.$storage.get("role")!="管理员"){
						this.ruleForm.nianling = json.nianling
						this.ro.nianling = true;
					}
					if(json.jiguan!=''&&json.jiguan && this.$storage.get("role")!="管理员"){
						this.ruleForm.jiguan = json.jiguan
						this.ro.jiguan = true;
					}
					if(json.lianxifangshi!=''&&json.lianxifangshi && this.$storage.get("role")!="管理员"){
						this.ruleForm.lianxifangshi = json.lianxifangshi
						this.ro.lianxifangshi = true;
					}
				} else {
					this.$message.error(data.msg);
				}
			});
			
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `rencaiku/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        this.ruleForm.huojiangzhengshu = this.ruleForm.huojiangzhengshu.replace(reg,'../../../springbootw3209/upload');
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {
















	if(this.ruleForm.zhaopian!=null) {
		this.ruleForm.zhaopian = this.ruleForm.zhaopian.replace(new RegExp(this.$base.url,"g"),"");
	}












	if(this.ruleForm.gerenziliao!=null) {
		this.ruleForm.gerenziliao = this.ruleForm.gerenziliao.replace(new RegExp(this.$base.url,"g"),"");
	}





var objcross = this.$storage.getObj('crossObj');

      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
       this.$refs["ruleForm"].validate(valid => {
         if (valid) {
		 if(crossrefid && crossuserid) {
			 this.ruleForm.crossuserid = crossuserid;
			 this.ruleForm.crossrefid = crossrefid;
			let params = { 
				page: 1, 
				limit: 10, 
				crossuserid:this.ruleForm.crossuserid,
				crossrefid:this.ruleForm.crossrefid,
			} 
			this.$http({ 
				url: "rencaiku/page", 
				method: "get", 
				params: params 
			}).then(({ 
				data 
			}) => { 
				if (data && data.code === 0) { 
				       if(data.data.total>=crossoptnum) {
					     this.$message.error(this.$storage.get('tips'));
					       return false;
				       } else {
					 this.$http({
					   url: `rencaiku/${!this.ruleForm.id ? "save" : "update"}`,
					   method: "post",
					   data: this.ruleForm
					 }).then(({ data }) => {
					   if (data && data.code === 0) {
					     this.$message({
					       message: "操作成功",
					       type: "success",
					       duration: 1500,
					       onClose: () => {
						 this.parent.showFlag = true;
						 this.parent.addOrUpdateFlag = false;
						 this.parent.rencaikuCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
					   } else {
					     this.$message.error(data.msg);
					   }
					 });

				       }
				} else { 
				} 
			});
		 } else {
			 this.$http({
			   url: `rencaiku/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.rencaikuCrossAddOrUpdateFlag = false;
				 this.parent.search();
				 this.parent.contentStyleChange();
			       }
			     });
			   } else {
			     this.$message.error(data.msg);
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
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.rencaikuCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    zhaopianUploadChange(fileUrls) {
	    this.ruleForm.zhaopian = fileUrls;
    },
    gerenziliaoUploadChange(fileUrls) {
	    this.ruleForm.gerenziliao = fileUrls;
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: #666;
	  	  font-weight: 500;
	  	  width: 120px;
	  	  font-size: 14px;
	  	  line-height: 40px;
	  	  text-align: center;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 120px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 0;
	  	  padding: 0 12px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: #000;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 0;
	  	  padding: 0 10px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: #000;
	  	  width: 300px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 0;
	  	  padding: 0 10px 0 30px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: #000;
	  	  width: 300px;
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
	  	  border: 2px solid #797979;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #797979;
	  	  width: 90px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 2px solid #797979;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #797979;
	  	  width: 90px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 2px solid #797979;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #797979;
	  	  width: 90px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 0;
	  	  padding: 12px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: #000;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 120px;
	  	}
</style>
