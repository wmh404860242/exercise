import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home.vue'
import Shop from '../components/shop/shop.vue'
import Mine from '../components/mine/mine.vue'
import GoodsDetails from '../components/shop/goodsDetails.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:  '/',
      redirect: '/shop'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path:'/goodsDetails',
      name:'GoodsDetails',
      component:GoodsDetails
    }
  ]
})
