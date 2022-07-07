import { App } from 'vue'
import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'
import trend from './trend'
import notification from './notification'
import chooseCity from './chooseCity'
import list from './list'
import menu from './menu'

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
