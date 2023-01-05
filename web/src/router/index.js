import { createRouter, createWebHistory } from 'vue-router'
import PkIndexView from "../views/pk/PkIndexView"
import RecordIndexView from "../views/record/RecordIndexView"
import RanklistIndexView from "../views/ranklist/RanklistIndexView"
import UserBotIndexView from "../views/user/bots/UserBotIndexView"
import NotFound from "../views/error/NotFound"
import UserAccountLoginView from '../views/user/account/UserAccountLoginView'
import UserAccountRegisterView from '../views/user/account/UserAccountRegisterView'
import store from '@/store'
const routes = [
    {
        path:"/",
        name:"home",
        redirect: "/pk/",
        meta:{
            requestAuth:true,   // 是否需要授权
        }
    },


    {
        path:"/pk/",
        name:"pk_index",
        component:PkIndexView,
        meta: {
            requestAuth: true,   // 是否需要授权
        }
    },

    {
        path:"/record/",
        name:"record_index",
        component:RecordIndexView,
        meta: {
            requestAuth: true,   // 是否需要授权
        }
    },

    {
        path:"/ranklist/",
        name:"ranklist_index",
        component:RanklistIndexView,
        meta: {
            requestAuth: true,   // 是否需要授权
        }
    },

    {
        path:"/user/bot",
        name:"UserBot_index",
        component:UserBotIndexView,
        meta: {
            requestAuth: true,   // 是否需要授权
        }
    },

    {
        path:"/404/",
        name:"404",
        component:NotFound,
        meta: {
            requestAuth: false,   // 是否需要授权
        }
    },

    {
        path:"/user/account/login/",
        name:"user_account_login",
        component:UserAccountLoginView,
        meta: {
            requestAuth: false,   // 是否需要授权
        }
    },

    {
        path:"/user/account/register/",
        name:"user_account_register",
        component:UserAccountRegisterView,
        meta: {
            requestAuth: false,   // 是否需要授权
        }
    },

    {
        path:"/:catchALL(.*)",
        redirect:"/404/"
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requestAuth && !store.state.user.is_login) {
        next({ name: "user_account_login" });
    } else {
        next();
    }
})

export default router
