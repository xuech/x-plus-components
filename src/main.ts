import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { toLine } from './utils'
import mUI from '@/components'
// 全量引入
// import mUI from '../lib/index.es.js'
// import mUI from 'x-plus-components'
// import 'x-plus-components/style.css'

//单独引入
// import chooseIcon from '../lib/chooseIcon/index.es.js'
// import '../lib/chooseIcon/style.css'
// import '../lib/style.css'

const app = createApp(App)
// 全局注册element图标 ？是否合理
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(`el-icon-${toLine(key)}`, component)
}
app.use(router)
app.use(ElementPlus).use(mUI)
app.mount('#app')
