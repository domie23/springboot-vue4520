import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Messages from '../pages/messages/list'
import xueshengList from '../pages/xuesheng/list'
import xueshengDetail from '../pages/xuesheng/detail'
import xueshengAdd from '../pages/xuesheng/add'
import qiyeList from '../pages/qiye/list'
import qiyeDetail from '../pages/qiye/detail'
import qiyeAdd from '../pages/qiye/add'
import zhaopinxinxiList from '../pages/zhaopinxinxi/list'
import zhaopinxinxiDetail from '../pages/zhaopinxinxi/detail'
import zhaopinxinxiAdd from '../pages/zhaopinxinxi/add'
import xingyeleixingList from '../pages/xingyeleixing/list'
import xingyeleixingDetail from '../pages/xingyeleixing/detail'
import xingyeleixingAdd from '../pages/xingyeleixing/add'
import rencaikuList from '../pages/rencaiku/list'
import rencaikuDetail from '../pages/rencaiku/detail'
import rencaikuAdd from '../pages/rencaiku/add'
import jianlitoudiList from '../pages/jianlitoudi/list'
import jianlitoudiDetail from '../pages/jianlitoudi/detail'
import jianlitoudiAdd from '../pages/jianlitoudi/add'
import mianshiyaoqingList from '../pages/mianshiyaoqing/list'
import mianshiyaoqingDetail from '../pages/mianshiyaoqing/detail'
import mianshiyaoqingAdd from '../pages/mianshiyaoqing/add'
import qiuzhizixunList from '../pages/qiuzhizixun/list'
import qiuzhizixunDetail from '../pages/qiuzhizixun/detail'
import qiuzhizixunAdd from '../pages/qiuzhizixun/add'
import qiyehuifuList from '../pages/qiyehuifu/list'
import qiyehuifuDetail from '../pages/qiyehuifu/detail'
import qiyehuifuAdd from '../pages/qiyehuifu/add'
import zhaopinxinwenList from '../pages/zhaopinxinwen/list'
import zhaopinxinwenDetail from '../pages/zhaopinxinwen/detail'
import zhaopinxinwenAdd from '../pages/zhaopinxinwen/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'messages',
					component: Messages
				},
				{
					path: 'xuesheng',
					component: xueshengList
				},
				{
					path: 'xueshengDetail',
					component: xueshengDetail
				},
				{
					path: 'xueshengAdd',
					component: xueshengAdd
				},
				{
					path: 'qiye',
					component: qiyeList
				},
				{
					path: 'qiyeDetail',
					component: qiyeDetail
				},
				{
					path: 'qiyeAdd',
					component: qiyeAdd
				},
				{
					path: 'zhaopinxinxi',
					component: zhaopinxinxiList
				},
				{
					path: 'zhaopinxinxiDetail',
					component: zhaopinxinxiDetail
				},
				{
					path: 'zhaopinxinxiAdd',
					component: zhaopinxinxiAdd
				},
				{
					path: 'xingyeleixing',
					component: xingyeleixingList
				},
				{
					path: 'xingyeleixingDetail',
					component: xingyeleixingDetail
				},
				{
					path: 'xingyeleixingAdd',
					component: xingyeleixingAdd
				},
				{
					path: 'rencaiku',
					component: rencaikuList
				},
				{
					path: 'rencaikuDetail',
					component: rencaikuDetail
				},
				{
					path: 'rencaikuAdd',
					component: rencaikuAdd
				},
				{
					path: 'jianlitoudi',
					component: jianlitoudiList
				},
				{
					path: 'jianlitoudiDetail',
					component: jianlitoudiDetail
				},
				{
					path: 'jianlitoudiAdd',
					component: jianlitoudiAdd
				},
				{
					path: 'mianshiyaoqing',
					component: mianshiyaoqingList
				},
				{
					path: 'mianshiyaoqingDetail',
					component: mianshiyaoqingDetail
				},
				{
					path: 'mianshiyaoqingAdd',
					component: mianshiyaoqingAdd
				},
				{
					path: 'qiuzhizixun',
					component: qiuzhizixunList
				},
				{
					path: 'qiuzhizixunDetail',
					component: qiuzhizixunDetail
				},
				{
					path: 'qiuzhizixunAdd',
					component: qiuzhizixunAdd
				},
				{
					path: 'qiyehuifu',
					component: qiyehuifuList
				},
				{
					path: 'qiyehuifuDetail',
					component: qiyehuifuDetail
				},
				{
					path: 'qiyehuifuAdd',
					component: qiyehuifuAdd
				},
				{
					path: 'zhaopinxinwen',
					component: zhaopinxinwenList
				},
				{
					path: 'zhaopinxinwenDetail',
					component: zhaopinxinwenDetail
				},
				{
					path: 'zhaopinxinwenAdd',
					component: zhaopinxinwenAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
