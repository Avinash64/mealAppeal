import { createApp } from 'vue'
import './style.css'

import {createRouter, createWebHistory, useRouter} from 'vue-router'
import App from './App.vue'
import Result from './Result.vue'
import Search from './Search.vue'
import Home from './Home.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/result',
            component: Result
        },
        {
            path: '/search',
            component: Search
        }
        
    ]
})

createApp(App).use(router).mount('#app')

