import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Loging from '../views/Loging.vue'
import Store from '../views/Store.vue'
import NoEncontrada from '../views/NoEncontrada.vue'
import Game from '../views/Game.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/loging',
        name: 'Loging',
        component: Loging
    },
    {
        path: '/store',
        name: 'Store',
        component: Store
    },
    {
        path: '/game/:id',
        name: 'Game',
        component: Game
    },
    {
        path: "/:catchAll(.*)",
        name: 'NoEncontrada',
        component: NoEncontrada,

    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router