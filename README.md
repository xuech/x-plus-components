### tsx写组件
- 安装插件 `npm i @vitejs/plugin-vue-jsx -D`
- 在vite.config.js中引入
  ```js
  import vueJsx from '@vitejs/plugin-vue-jsx'
    plugins: [vue(), vueJsx()],
  ```

### 组件打包
1.新建`package`文件夹，将`components`下的文件移动到`package`文件下
2.将`utils/style/hooks`等内容移动到package文件下
3.修改package文件下引用路径
4.新建一个`vue.d.ts`文件内容是`src/env.d.ts`
5.新建一个command文件下存放打包命令，`"lib": "node ./command/build.js"` ，运行`npm run lib`
