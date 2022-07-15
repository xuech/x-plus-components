import { App } from 'vue'
import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'
import trend from './trend'
import notification from './notification'
import chooseCity from './chooseCity'
import list from './list'
import menu from './menu'
import './style/base.scss'
import './style/ui.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { toLine } from './utils'

const components = [
  chooseArea,
  chooseIcon,
  trend,
  notification,
  chooseCity,
  list,
  menu,
]
export default {
  install(app: App) {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(`el-icon-${toLine(key)}`, component)
    }
    components.map((item) => {
      app.use(item)
    })
  },
}
