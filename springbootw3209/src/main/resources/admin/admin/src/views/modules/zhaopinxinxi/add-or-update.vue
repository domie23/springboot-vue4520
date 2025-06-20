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
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="岗位名称" prop="gangweimingcheng">
					<el-input v-model="ruleForm.gangweimingcheng" placeholder="岗位名称" clearable  :readonly="ro.gangweimingcheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="岗位名称" prop="gangweimingcheng">
					<el-input v-model="ruleForm.gangweimingcheng" placeholder="岗位名称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="upload" v-if="type!='info' && !ro.gangweitupian" label="岗位图片" prop="gangweitupian">
					<file-upload
						tip="点击上传岗位图片"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.gangweitupian?ruleForm.gangweitupian:''"
						@change="gangweitupianUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="upload" v-else-if="ruleForm.gangweitupian" label="岗位图片" prop="gangweitupian">
					<img v-if="ruleForm.gangweitupian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.gangweitupian.split(',')[0]" width="100" height="100">
					<img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.gangweitupian.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="工作地点" prop="gongzuodidian">
					<el-input v-model="ruleForm.gongzuodidian" placeholder="工作地点" clearable  :readonly="ro.gongzuodidian"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="工作地点" prop="gongzuodidian">
					<el-input v-model="ruleForm.gongzuodidian" placeholder="工作地点" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="薪资待遇" prop="xinzidaiyu">
					<el-input v-model="ruleForm.xinzidaiyu" placeholder="薪资待遇" clearable  :readonly="ro.xinzidaiyu"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="薪资待遇" prop="xinzidaiyu">
					<el-input v-model="ruleForm.xinzidaiyu" placeholder="薪资待遇" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="select" v-if="type!='info'"  label="行业类型" prop="xingyeleixing">
					<el-select :disabled="ro.xingyeleixing" v-model="ruleForm.xingyeleixing" placeholder="请选择行业类型" >
						<el-option
							v-for="(item,index) in xingyeleixingOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="行业类型" prop="xingyeleixing">
					<el-input v-model="ruleForm.xingyeleixing"
						placeholder="行业类型" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="学历要求" prop="xueliyaoqiu">
					<el-input v-model="ruleForm.xueliyaoqiu" placeholder="学历要求" clearable  :readonly="ro.xueliyaoqiu"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="学历要求" prop="xueliyaoqiu">
					<el-input v-model="ruleForm.xueliyaoqiu" placeholder="学历要求" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="招聘人数" prop="zhaopinrenshu">
					<el-input v-model="ruleForm.zhaopinrenshu" placeholder="招聘人数" clearable  :readonly="ro.zhaopinrenshu"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="招聘人数" prop="zhaopinrenshu">
					<el-input v-model="ruleForm.zhaopinrenshu" placeholder="招聘人数" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="企业账号" prop="qiyezhanghao">
					<el-input v-model="ruleForm.qiyezhanghao" placeholder="企业账号" clearable  :readonly="ro.qiyezhanghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="企业账号" prop="qiyezhanghao">
					<el-input v-model="ruleForm.qiyezhanghao" placeholder="企业账号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="企业名称" prop="qiyemingcheng">
					<el-input v-model="ruleForm.qiyemingcheng" placeholder="企业名称" clearable  :readonly="ro.qiyemingcheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="企业名称" prop="qiyemingcheng">
					<el-input v-model="ruleForm.qiyemingcheng" placeholder="企业名称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="企业类型" prop="qiyeleixing">
					<el-input v-model="ruleForm.qiyeleixing" placeholder="企业类型" clearable  :readonly="ro.qiyeleixing"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="企业类型" prop="qiyeleixing">
					<el-input v-model="ruleForm.qiyeleixing" placeholder="企业类型" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="联系电话" prop="lianxidianhua">
					<el-input v-model="ruleForm.lianxidianhua" placeholder="联系电话" clearable  :readonly="ro.lianxidianhua"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="联系电话" prop="lianxidianhua">
					<el-input v-model="ruleForm.lianxidianhua" placeholder="联系电话" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="date" v-if="type!='info'" label="发布时间" prop="fabushijian">
					<el-date-picker
						value-format="yyyy-MM-dd HH:mm:ss"
						v-model="ruleForm.fabushijian" 
						type="datetime"
						:readonly="ro.fabushijian"
						placeholder="发布时间"
					></el-date-picker>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-else-if="ruleForm.fabushijian" label="发布时间" prop="fabushijian">
					<el-input v-model="ruleForm.fabushijian" placeholder="发布时间" readonly></el-input>
				</el-form-item>
			</template>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-if="type!='info'"  label="任职要求" prop="renzhiyaoqiu">
					<editor 
						style="min-width: 200px; max-width: 600px;"
						v-model="ruleForm.renzhiyaoqiu" 
						class="editor" 
						action="file/upload">
					</editor>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else-if="ruleForm.renzhiyaoqiu" label="任职要求" prop="renzhiyaoqiu">
                    <span :style='{"fontSize":"14px","lineHeight":"40px","color":"#000","fontWeight":"500","display":"inline-block"}' v-html="ruleForm.renzhiyaoqiu"></span>
                </el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-if="type!='info'"  label="企业介绍" prop="qiyejieshao">
					<editor 
						style="min-width: 200px; max-width: 600px;"
						v-model="ruleForm.qiyejieshao" 
						class="editor" 
						action="file/upload">
					</editor>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else-if="ruleForm.qiyejieshao" label="企业介绍" prop="qiyejieshao">
                    <span :style='{"fontSize":"14px","lineHeight":"40px","color":"#000","fontWeight":"500","display":"inline-block"}' v-html="ruleForm.qiyejieshao"></span>
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
				gangweimingcheng : false,
				gangweitupian : false,
				gongzuodidian : false,
				xinzidaiyu : false,
				xingyeleixing : false,
				xueliyaoqiu : false,
				zhaopinrenshu : false,
				qiyezhanghao : false,
				qiyemingcheng : false,
				qiyeleixing : false,
				lianxidianhua : false,
				renzhiyaoqiu : false,
				qiyejieshao : false,
				fabushijian : false,
				sfsh : false,
				shhf : false,
			},
			
			
			ruleForm: {
				gangweimingcheng: '',
				gangweitupian: '',
				gongzuodidian: '',
				xinzidaiyu: '',
				xingyeleixing: '',
				xueliyaoqiu: '',
				zhaopinrenshu: '',
				qiyezhanghao: '',
				qiyemingcheng: '',
				qiyeleixing: '',
				lianxidianhua: '',
				renzhiyaoqiu: '',
				qiyejieshao: '',
				fabushijian: '',
				shhf: '',
			},
		
			xingyeleixingOptions: [],
			
			rules: {
				gangweimingcheng: [
					{ required: true, message: '岗位名称不能为空', trigger: 'blur' },
				],
				gangweitupian: [
					{ required: true, message: '岗位图片不能为空', trigger: 'blur' },
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
				renzhiyaoqiu: [
				],
				qiyejieshao: [
				],
				fabushijian: [
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
		this.ruleForm.fabushijian = this.getCurDateTime()
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
						if(o=='gangweimingcheng'){
							this.ruleForm.gangweimingcheng = obj[o];
							this.ro.gangweimingcheng = true;
							continue;
						}
						if(o=='gangweitupian'){
							this.ruleForm.gangweitupian = obj[o];
							this.ro.gangweitupian = true;
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
						if(o=='renzhiyaoqiu'){
							this.ruleForm.renzhiyaoqiu = obj[o];
							this.ro.renzhiyaoqiu = true;
							continue;
						}
						if(o=='qiyejieshao'){
							this.ruleForm.qiyejieshao = obj[o];
							this.ro.qiyejieshao = true;
							continue;
						}
						if(o=='fabushijian'){
							this.ruleForm.fabushijian = obj[o];
							this.ro.fabushijian = true;
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
					if(json.qiyezhanghao!=''&&json.qiyezhanghao && this.$storage.get("role")!="管理员"){
						this.ruleForm.qiyezhanghao = json.qiyezhanghao
						this.ro.qiyezhanghao = true;
					}
					if(json.qiyemingcheng!=''&&json.qiyemingcheng && this.$storage.get("role")!="管理员"){
						this.ruleForm.qiyemingcheng = json.qiyemingcheng
						this.ro.qiyemingcheng = true;
					}
					if(json.qiyeleixing!=''&&json.qiyeleixing && this.$storage.get("role")!="管理员"){
						this.ruleForm.qiyeleixing = json.qiyeleixing
						this.ro.qiyeleixing = true;
					}
					if(json.lianxidianhua!=''&&json.lianxidianhua && this.$storage.get("role")!="管理员"){
						this.ruleForm.lianxidianhua = json.lianxidianhua
						this.ro.lianxidianhua = true;
					}
					if(json.renzhiyaoqiu!=''&&json.renzhiyaoqiu && this.$storage.get("role")!="管理员"){
						this.ruleForm.renzhiyaoqiu = json.renzhiyaoqiu
						this.ro.renzhiyaoqiu = true;
					}
					if(json.qiyejieshao!=''&&json.qiyejieshao && this.$storage.get("role")!="管理员"){
						this.ruleForm.qiyejieshao = json.qiyejieshao
						this.ro.qiyejieshao = true;
					}
				} else {
					this.$message.error(data.msg);
				}
			});
			
            this.$http({
				url: `option/xingyeleixing/xingyeleixing`,
				method: "get"
            }).then(({ data }) => {
				if (data && data.code === 0) {
					this.xingyeleixingOptions = data.data;
				} else {
					this.$message.error(data.msg);
				}
            });
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `zhaopinxinxi/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        this.ruleForm.renzhiyaoqiu = this.ruleForm.renzhiyaoqiu.replace(reg,'../../../springbootw3209/upload');
        this.ruleForm.qiyejieshao = this.ruleForm.qiyejieshao.replace(reg,'../../../springbootw3209/upload');
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {




	if(this.ruleForm.gangweitupian!=null) {
		this.ruleForm.gangweitupian = this.ruleForm.gangweitupian.replace(new RegExp(this.$base.url,"g"),"");
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
				url: "zhaopinxinxi/page", 
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
					   url: `zhaopinxinxi/${!this.ruleForm.id ? "save" : "update"}`,
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
						 this.parent.zhaopinxinxiCrossAddOrUpdateFlag = false;
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
			   url: `zhaopinxinxi/${!this.ruleForm.id ? "save" : "update"}`,
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
				 this.parent.zhaopinxinxiCrossAddOrUpdateFlag = false;
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
      this.parent.zhaopinxinxiCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    gangweitupianUploadChange(fileUrls) {
	    this.ruleForm.gangweitupian = fileUrls;
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
