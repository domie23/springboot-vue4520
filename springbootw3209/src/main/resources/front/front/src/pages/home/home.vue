<template>
<div class="home-preview" :style='{"width":"100%","margin":"10px auto","flexWrap":"wrap","justifyContent":"space-around","display":"flex"}'>




	


<div class="lists" :style='{"margin":"0 0 10px","position":"relative"}'>
	<div v-if="true" class="idea" :style='{"padding":"20px","alignItems":"center","flexWrap":"wrap","justifyContent":"center","display":"flex","height":"120px"}'>
		<div class="box1" :style='{"width":"20%","borderRadius":"10px","background":"linear-gradient(90deg, #5B7DE8 4%, #19DFD6 100%)","height":"10px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"100%","margin":"10px auto","lineHeight":"54px","position":"absolute","top":"15px","textAlign":"center"}'>
	  <span :style='{"color":"#000","fontSize":"28px"}'>招聘信息展示</span>
	</div>
	
	
	<!-- 样式一 -->
	<div class="list list1 index-pv1" :style='{"width":"100%","padding":"0 260px","flexWrap":"wrap","display":"flex","height":"auto"}'>
		<div :style='{"boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.302)","padding":"8px","margin":"10px","textAlign":"center","background":"#fff","width":"18%","height":"auto"}' v-for="(item,index) in zhaopinxinxiList" :key="index" @click="toDetail('zhaopinxinxiDetail', item)" class="list-item animation-box">
			<img :style='{"objectFit":"cover","width":"100%","height":"250px"}' v-if="preHttp(item.gangweitupian)" :src="item.gangweitupian.split(',')[0]" alt="" />
			<img :style='{"objectFit":"cover","width":"100%","height":"250px"}' v-else :src="baseUrl + (item.gangweitupian?item.gangweitupian.split(',')[0]:'')" alt="" />
			<div class="name line1" :style='{"padding":"10px","lineHeight":"32px","fontSize":"14px","color":"#9E9E9E"}'>{{item.gangweimingcheng}}</div>
		</div>
	</div>
	
	
	
	
	
	
	
	
	
	<div @click="moreBtn('zhaopinxinxi')" :style='{"border":"0","margin":"10px auto","borderRadius":"20px","textAlign":"center","background":"linear-gradient(-90deg, #5B7DE8 4%, #19DFD6 100%)","display":"block","width":"100px","lineHeight":"32px"}'>
		<span :style='{"color":"#f5f5f5","fontSize":"12px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#f5f5f5","fontSize":"12px"}' class="el-icon-d-arrow-right"></i>
	</div>
	

</div>
<div class="lists" :style='{"margin":"0 0 10px","position":"relative"}'>
	<div v-if="true" class="idea" :style='{"padding":"20px","alignItems":"center","flexWrap":"wrap","justifyContent":"center","display":"flex","height":"120px"}'>
		<div class="box1" :style='{"width":"20%","borderRadius":"10px","background":"linear-gradient(90deg, #5B7DE8 4%, #19DFD6 100%)","height":"10px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"100%","margin":"10px auto","lineHeight":"54px","position":"absolute","top":"15px","textAlign":"center"}'>
	  <span :style='{"color":"#000","fontSize":"28px"}'>人才库展示</span>
	</div>
	
	
	<!-- 样式一 -->
	<div class="list list1 index-pv1" :style='{"width":"100%","padding":"0 260px","flexWrap":"wrap","display":"flex","height":"auto"}'>
		<div :style='{"boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.302)","padding":"8px","margin":"10px","textAlign":"center","background":"#fff","width":"18%","height":"auto"}' v-for="(item,index) in rencaikuList" :key="index" @click="toDetail('rencaikuDetail', item)" class="list-item animation-box">
			<img :style='{"objectFit":"cover","width":"100%","height":"250px"}' v-if="preHttp(item.zhaopian)" :src="item.zhaopian.split(',')[0]" alt="" />
			<img :style='{"objectFit":"cover","width":"100%","height":"250px"}' v-else :src="baseUrl + (item.zhaopian?item.zhaopian.split(',')[0]:'')" alt="" />
			<div class="name line1" :style='{"padding":"10px","lineHeight":"32px","fontSize":"14px","color":"#9E9E9E"}'>{{item.biaotimingcheng}}</div>
		</div>
	</div>
	
	
	
	
	
	
	
	
	
	<div @click="moreBtn('rencaiku')" :style='{"border":"0","margin":"10px auto","borderRadius":"20px","textAlign":"center","background":"linear-gradient(-90deg, #5B7DE8 4%, #19DFD6 100%)","display":"block","width":"100px","lineHeight":"32px"}'>
		<span :style='{"color":"#f5f5f5","fontSize":"12px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#f5f5f5","fontSize":"12px"}' class="el-icon-d-arrow-right"></i>
	</div>
	

</div>
<div class="lists" :style='{"margin":"0 0 10px","position":"relative"}'>
	<div v-if="true" class="idea" :style='{"padding":"20px","alignItems":"center","flexWrap":"wrap","justifyContent":"center","display":"flex","height":"120px"}'>
		<div class="box1" :style='{"width":"20%","borderRadius":"10px","background":"linear-gradient(90deg, #5B7DE8 4%, #19DFD6 100%)","height":"10px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"100%","margin":"10px auto","lineHeight":"54px","position":"absolute","top":"15px","textAlign":"center"}'>
	  <span :style='{"color":"#000","fontSize":"28px"}'>招聘新闻展示</span>
	</div>
	
	
	<!-- 样式一 -->
	<div class="list list1 index-pv1" :style='{"width":"100%","padding":"0 260px","flexWrap":"wrap","display":"flex","height":"auto"}'>
		<div :style='{"boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.302)","padding":"8px","margin":"10px","textAlign":"center","background":"#fff","width":"18%","height":"auto"}' v-for="(item,index) in zhaopinxinwenList" :key="index" @click="toDetail('zhaopinxinwenDetail', item)" class="list-item animation-box">
			<img :style='{"objectFit":"cover","width":"100%","height":"250px"}' v-if="preHttp(item.fengmiantupian)" :src="item.fengmiantupian.split(',')[0]" alt="" />
			<img :style='{"objectFit":"cover","width":"100%","height":"250px"}' v-else :src="baseUrl + (item.fengmiantupian?item.fengmiantupian.split(',')[0]:'')" alt="" />
			<div class="name line1" :style='{"padding":"10px","lineHeight":"32px","fontSize":"14px","color":"#9E9E9E"}'>{{item.xinwenbiaoti}}</div>
			<div class="name line1" :style='{"padding":"10px","lineHeight":"32px","fontSize":"14px","color":"#9E9E9E"}'>{{item.biaotileixing}}</div>
		</div>
	</div>
	
	
	
	
	
	
	
	
	
	<div @click="moreBtn('zhaopinxinwen')" :style='{"border":"0","margin":"10px auto","borderRadius":"20px","textAlign":"center","background":"linear-gradient(-90deg, #5B7DE8 4%, #19DFD6 100%)","display":"block","width":"100px","lineHeight":"32px"}'>
		<span :style='{"color":"#f5f5f5","fontSize":"12px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#f5f5f5","fontSize":"12px"}' class="el-icon-d-arrow-right"></i>
	</div>
	

</div>


</div>
</template>

<script>
  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        newsList: [],

        zhaopinxinxiList: [],
        rencaikuList: [],
        zhaopinxinwenList: [],
      }
    },
    created() {
      this.baseUrl = this.$config.baseUrl;
      this.getList();
    },
    //方法集合
    methods: {
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
		getList() {
          let autoSortUrl = "";
			
			this.$http.get('zhaopinxinxi/list', {params: {
				sfsh: '是',
				sort : 'fabushijian',
				order: 'desc',
				page: 1,
				limit: 5,
			}}).then(res => {
				if (res.data.code == 0) {
					this.zhaopinxinxiList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
			this.$http.get('rencaiku/list', {params: {
				sfsh: '是',
				page: 1,
				limit: 5,
			}}).then(res => {
				if (res.data.code == 0) {
					this.rencaikuList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
			this.$http.get('zhaopinxinwen/list', {params: {
				sort : 'faburiqi',
				order: 'desc',
				page: 1,
				limit: 5,
			}}).then(res => {
				if (res.data.code == 0) {
					this.zhaopinxinwenList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {detailObj: JSON.stringify(item)}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
	
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: scale(0.95) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: scale(1.1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	}
</style>
