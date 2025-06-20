import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import qiye from '@/views/modules/qiye/list'
    import zhaopinxinxi from '@/views/modules/zhaopinxinxi/list'
    import qiuzhizixun from '@/views/modules/qiuzhizixun/list'
    import jianlitoudi from '@/views/modules/jianlitoudi/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import xingyeleixing from '@/views/modules/xingyeleixing/list'
    import messages from '@/views/modules/messages/list'
    import zhaopinxinwen from '@/views/modules/zhaopinxinwen/list'
    import rencaiku from '@/views/modules/rencaiku/list'
    import qiyehuifu from '@/views/modules/qiyehuifu/list'
    import mianshiyaoqing from '@/views/modules/mianshiyaoqing/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/qiye',
        name: '企业',
        component: qiye
      }
      ,{
	path: '/zhaopinxinxi',
        name: '招聘信息',
        component: zhaopinxinxi
      }
      ,{
	path: '/qiuzhizixun',
        name: '求职咨询',
        component: qiuzhizixun
      }
      ,{
	path: '/jianlitoudi',
        name: '简历投递',
        component: jianlitoudi
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/xingyeleixing',
        name: '行业类型',
        component: xingyeleixing
      }
      ,{
	path: '/messages',
        name: '投诉建议',
        component: messages
      }
      ,{
	path: '/zhaopinxinwen',
        name: '招聘新闻',
        component: zhaopinxinwen
      }
      ,{
	path: '/rencaiku',
        name: '人才库',
        component: rencaiku
      }
      ,{
	path: '/qiyehuifu',
        name: '企业回复',
        component: qiyehuifu
      }
      ,{
	path: '/mianshiyaoqing',
        name: '面试邀请',
        component: mianshiyaoqing
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '系统首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
