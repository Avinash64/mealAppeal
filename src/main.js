import { createApp } from 'vue'
import './style.css'

import {createRouter, createWebHistory, useRouter} from 'vue-router'
import App from './App.vue'
import Result from './Result.vue'
import Search from './Search.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Search
        },
        {
            path: '/result',
            component: Result
        }
        
    ]
})

createApp(App).use(router).mount('#app')

