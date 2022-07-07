### tsx写组件
- 安装插件 `npm i @vitejs/plugin-vue-jsx -D`
- 在vite.config.js中引入
  ```js
  import vueJsx from '@vitejs/plugin-vue-jsx'
    plugins: [vue(), vueJsx()],
  ```