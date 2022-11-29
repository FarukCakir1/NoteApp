import { createApp } from 'vue'
import App from './App.vue'
import {appAxios} from "./utils/appAxios"
import { createPinia } from 'pinia'
import persistedState from "pinia-plugin-persistedstate"
// tailwind style
import './assets/style.css'

//router
import router from "./router/index"

//app level components
import NavBar from "./components/shared/NavBar.vue"

const app = createApp(App)

const pinia = createPinia()
pinia.use(persistedState)
app.component("NavBar", NavBar)
app.use(router)
app.use(pinia)
app.provide("appAxios", appAxios)
app.provide("router", router)
app.mount('#app')
