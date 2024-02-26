import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/AtividadesRouter.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        
        {
            path: '/professores',
            component: () => import('../views/ProfessoresRoute.vue')
        },
        {
            path: '/addAtividades',
            component: () => import('../views/AddAtividades.vue')
        }
    ]
})

export default router