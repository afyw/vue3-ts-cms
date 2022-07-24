import { createApp } from 'vue'
import { registerAPP } from './global'
import 'normalize.css'
import './assets/css/index.less'
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

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

// hyRequest
//   .get<DataType>({
//     url: '/home/multidata'
//   })
//   .then((res) => {
//     console.log(res.data)
//   })
