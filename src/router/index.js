import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 解决导航栏或者底部导航tabBar中的vue-router在3.0版本以上频繁点击菜单报错的问题。
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const home = () => import('../views/home/home')
const profile = () => import('../views/profile/profile')
const cart = () => import('../views/cart/cart')
const category = () => import('../views/category/category')
const detail =()=> import('../views/detail/detail')
const routes = [
    {
        path: '',
        // redirect重定向
        redirect: '/home'
    },
    {
        path: '/home',
        component: home,
        meta: {
            keepAlive: true // 需要缓存
        }
    },
    {
        path: '/cart',
        component: cart
    },
    {
        path: '/category',
        component: category
    },
    {
        path: '/profile',
        component: profile
    },
    {
        path: '/detail/:iid',
        component:detail,
        meta: {
            keepAlive: true // 需要缓存
        }
    }

]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
