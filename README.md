# 使用 Taro3 + Vue3 + NutUi + Pinia 开发微信小程序


## 如何使用

1. 进入项目目录安装依赖

```bash
cd ycb_minprogram
npm install
```

2. 运行小程序开发编译

```bash
npm dev:weapp
```

3. 打开微信开发工具 项目目录指向 dist 目录 填写自己的 AppId 或者使用测试 AppId


## 小程序分包配置

随着业务代码和组件的引入越来越多，主包的大小一定会越来越大，超过 2m 的主包以后微信开发工具就无法使用预览的功能，为了提前做好准备在一开始就进行分包处理，主包只包含公共组件和公共代码，分包里放入业务代码和业务代码

```
export default {
  pages: ['pages/index/index'],
  window: {
    backgroundColor: '#fff',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  subpackages: [
    {
      root: 'pages/index',
      pages: ['index/index'],
    },
  ],
}
```
## 实现功能
-  axios请求封装
-  使用pinia做状态管理
-  组件库实现按需加载
-  组件库实现主题修改
-  项目支持vue3开发
-  引入vue-devtools调试工具


## 相关资源地址
- [Taro 文档](https://taro-docs.jd.com/taro/docs/GETTING-STARTED)
- [Pinia](https://pinia.web3doc.top/) 进行状态管理
- [nutui](https://nutui.jd.com/) 组件库
- [vue3](https://v3.cn.vuejs.org/) 框架文档


## 注意事项
- 项目一定要放根目录

### 目录结构
```
├─config 配置文件目录
├─dist 项目输出目录
└─src
    ├─api  api存放目录
    ├─components 组件
    ├─pages 页面
    │  ├─index
    │  └─second
    ├─stores store
    ├─styles 样式文件
    └─utils 公用工具文件

```
### 小程序配置细节

需要注意开发者工具的项目设置：

- 需要设置关闭 ES6 转 ES5 功能，开启可能报错
- 需要设置关闭上传代码时样式自动补全，开启可能报错
- 需要设置关闭代码压缩上传，开启可能报错

### 其他限制

- 小程序中不支持 `<style scoped>`，建议使用 cssModules 代替。
- 不能在页面组件的 DOM 树之外插入元素，因此不支持 `<teleport>`
- Vue 3 内部实现使用了 Proxy ，在 iOS 9 及以下操作系统无法运行。但 Vue 官方团队在正式版发布后会推出兼容版本。
- 在 H5 端使用 ref 获取基础组件的 DOM 节点，现在只能得到适配层的 Vue 组件实例，而不是对应的 webComponent 根节点。在 Vue2 里可以通过修改父元素的 refs 属性实现，但 Vue3 中组件间初始化顺序有变化，因此暂时不能支持。
- 小程序端非类似 HTML 表单标签规范的表单组件，如 Picker，暂不兼容 v-model。Vue3 的 v-model 绑定属性改为了 modelValue，事件绑定改为了 update:modelValue。对于 HTML 表单标签会自动对接表单的值与事件，例如 input 会自动对应 modelValue 与 value、update:modelValue 与 @input。但对于 Picker 这种小程序特有表单则无法对应，建议这种情况不使用 v-model。
- 所有组件的 id 必须在整个应用中保持唯一（即使他们在不同的页面），否则可能导致事件不触发的问题