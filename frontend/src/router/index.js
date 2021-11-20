import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import introduce from '@/components/introduce'
const Home ={template:'<p>home</p>'};
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
	{
      path: '/home',
      name: 'Home',
      component: Home
    },
	{
      path: '/login',
      name: 'login',
      component: login
    },
	{
      path: '/introduce',
      name: 'introduce',
      component: introduce
    },
  ]
})
