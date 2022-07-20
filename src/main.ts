import { createApp } from 'vue'
import { registerAPP } from './global'
// 全局引入
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import rootApp from './App.vue'
import router from './router'
import store from './store'
import hyRequest from './service'
const app = createApp(rootApp)
registerAPP(app)
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')

hyRequest.request({ url: '/home/multidata', method: 'GET' })
