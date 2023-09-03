import { createApp } from 'vue'
import 'normalize.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/index.less'
import App from './App.vue'
import router from './roure'
import pina from './store'

const app = createApp(App)

app.use(router)
app.use(pina)
app.use(ElementPlus)

app.mount('#app')
