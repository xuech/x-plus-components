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
6.给lib目录下的每个组件添加一个index.d.ts申明文件
### 组件发布
1.cd /lib目录下然后 
2.npm init -y 生成package.json文件，输入组件名、版本号、等信息
3.npm login
4.npm publish

### 组件更新
1.复制index.d.ts和package.json文件，这两个文件是不需要动的
2.npm run lib重新打包生成组件目录
3.重复组件发布的流程

### 组件使用
项目依赖elemen-plus
```json
"dependencies": {
    "@element-plus/icons-vue": "^2.0.6",
    "element-plus": "^2.2.9",
    "vue": "^3.2.37",
    "x-plus-components": "^1.0.1"
  },
```

## github pages