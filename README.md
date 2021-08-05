## 小程序悬浮按钮

> 悬浮按钮（Floating Action Button，简称 FAB）是 APP 应用中常见的 UI 元件。它轻盈、优雅、便捷又高效，是 Google 设计语言中一颗璀璨的明珠。悬浮按钮往往都会独立出现在界面之上，提升整体的导航，拓展页面的功能，使应用的操作更加便捷。

基于小程序组件 movable-area、movable-view 封装。

<details>
  <summary>查看效果</summary>
  
  <img src="./docs/2021-06-09-13.52.34.gif" />
</details>

## 运行

- 克隆仓库，导入到微信开发者工具

- 安装依赖 `npm i`

- 开发者工具中的菜单栏：`工具` -> `构建 npm`

## 代码示例

```html
<floating-button
  options="{{ options }}"
  bind:select="onSelect"
/>
```

```js
Page({
  data: {
    options: [
      { value: 1, label: '选项一' },
      { value: 2, label: '选项二' },
    ]
  },

  onSelect (e) {
    console.log(e.detail)
  }
})
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 可选项数据 | array | - |
| openText | 触发按钮开启文字描述 | string | - |
| closeText | 触发按钮关闭文字描述 | string | - |
| x | 定义 x 轴方向的偏移 | number | - |
| y | 定义 y 轴方向的偏移 | number | - |
| zIndex | 元素 z-index | number | 999 |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| select | 点击选项回调 | 点击项的 value |
