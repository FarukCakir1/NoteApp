import {createRouter, createWebHashHistory} from "vue-router"

const routes = [
    {
        name: "Home",
        path: "/",
        component: () => import("../views/Home.vue")
    },
    {
        name: "Create",
        path: "/create",
        component: () => import("../views/Create.vue")
    },
    {
        name: "Login",
        path: "/login",
        component: () => import("../views/Login.vue")
    },
    {
        name: "Register",
        path: "/register",
        component: () => import("../views/Register.vue")
    },
    {
        name: "Account",
        path: "/account",
        component: () => import("../views/Account.vue")
    },
    {
        name: "SingleNote",
        path: "/single",
        component: () => import("../views/Single.vue")
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})


export default router