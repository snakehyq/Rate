# star

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 评分组件

### 使用

```js
<template>
  <div class="home">
   <Star v-model="starModel" disabled score-template="{value}分" void-color="#C6D1DE" icon-class="icon-face" :max="5" size="30" text-color="#ff9900" show-text show-score @change="starChange"></Star>
  </div>
</template>

<script lang="ts" setup>
import { Star } from '@/components/Stars'
import { ref } from 'vue'
const disabled = true
const starModel = ref(1)
function starChange (num: number) {
  console.log(num, starModel)
}
</script>

<style lang="less" scoped>
.home {
  width: 300px;
  margin: 100px auto;
}
</style>

```

![image-20231020153707951](https://github.com/snakehyq/areaSelect/blob/master/public/static/img/image-20231020153707951.png)

#### 属性

| 属性名              | 类型    | 默认值                                   | 说明                                                         |
| ------------------- | ------- | ---------------------------------------- | ------------------------------------------------------------ |
| v-model             | number  | 0                                        | 绑定值                                                       |
| show-score          | boolean | false                                    | 是否显示当前分数，show-score 和 show-text 不能同时为真       |
| show-text           | boolean | false                                    | 是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容 |
| texts               | array   | ['极差', '失望', '一般', '满意', '惊喜'] | 辅助文字数组                                                 |
| text-color          | string  | \#1F2D3D                                 | 辅助文字的颜色                                               |
| disabled            | boolean | false                                    | 是否为只读                                                   |
| icon-class          | string  | icon-star                                | icon 的类名 目前只支持两种icon, 'icon-star', 'icon-face',如需再添加，请自行添加阿里字体并更换阿里字体。 |
| void-color          | string  | \#C6D1DE                                 | 未选中 icon 的颜色                                           |
| disabled-void-color | string  | \#EFF2F7                                 | 只读时未选中 icon 的颜色                                     |
| score-template      | string  | {value}                                  | 分数显示模板                                                 |
| max                 | number  | 最大分值                                 | 5                                                            |
| size                | string  | 16                                       | 图标大小                                                     |

#### 事件

| 事件名  | 说明           | 返回值       |
| ------- | -------------- | ------------ |
| @change | 分值改变时触发 | 改变后的分值 |

#### 字体

```js
@font-face {
  font-family: "iconfont"; /* Project id 4111710 */
  src: url('//at.alicdn.com/t/c/font_4111710_tfu4xz6dkss.woff2?t=1697783650703') format('woff2'),
       url('//at.alicdn.com/t/c/font_4111710_tfu4xz6dkss.woff?t=1697783650703') format('woff'),
       url('//at.alicdn.com/t/c/font_4111710_tfu4xz6dkss.ttf?t=1697783650703') format('truetype');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: v-bind(voidColor);
  font-size: v-bind(fontSize);
  cursor: pointer;
    &.icon-star:before {
      content: "\e693";
    }
    &.icon-face:before {
      content: "\e6ae";
    }
}
```

