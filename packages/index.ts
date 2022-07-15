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
    components.map((item) => {
      app.use(item)
    })
  },
}
