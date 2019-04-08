import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {path:'/',redirect:'/home'},
    {path:'/home',component: () => import('views/Home/Home')},
    {path:'/order',component: () => import('views/Order/Order')},
    {path:'/profile',component: () => import('views/Profile/Profile')},
    {path:'/search',component: () => import('views/Search/Search')},
    {path:'/register',component:() => import('views/Profile/common/register/register')}
]

export default new VueRouter({
    mode:'history',
    routes
})