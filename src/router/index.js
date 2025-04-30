import {createRouter,createWebHistory} from 'vue-router'
const routes = [
    {
        path:'/',
        name:'DefaultLayout',
        component:()=>import('@/layouts/DefaultLayout.vue'),
        children:[
            {
                path:'',
                name:'Index',
                component:()=>import('@/views/index.vue')
            },
            {
                path:'users',
                name:'Users',
                component:()=>import('@/views/Users.vue')
            }

        ]
    },
    {
        path:'/home',
        name:'Home',
        component:()=>import('@/views/Home.vue')

    },
    {
        path:'/about',
        name:'About',
        component:()=>import('@/views/About.vue')
    },
    {
        path:'/:pathMatch(.*)*',
        name:'NotFound',
        component:()=>import('@/views/NotFound.vue')
    }
]

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router