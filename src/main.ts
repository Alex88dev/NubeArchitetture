import './assets/main.sass'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { galleryState } from '../src/stores/galleryState'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.provide('galleryState', galleryState)

app.mount('#app')
