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

![image-20231020153707951](https://github.com/snakehyq/Rate/blob/master/src/assets/image-20231020153707951.png)

#### 属性

| 属性名              | 类型                      | 默认值                                   | 说明                                                         |
| ------------------- | ------------------------- | ---------------------------------------- | ------------------------------------------------------------ |
| v-model             | number                    | 0                                        | 选中项绑定值                                                 |
| show-score          | boolean                   | false                                    | 是否显示当前分数，show-score 和 show-text 不能同时为真       |
| show-text           | boolean                   | false                                    | 是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容 |
| texts               | array                     | ['极差', '失望', '一般', '满意', '惊喜'] | 辅助文字数组                                                 |
| text-color          | string                    | \#1F2D3D                                 | 辅助文字的颜色                                               |
| disabled            | boolean                   | false                                    | 是否为只读                                                   |
| icons               | Array<string> \|   Object | ['icon-star', 'icon-face', 'icon-love']  | 图标组件 若传入数组，则需要传入 3 个元素，分别为 3 个部分所对应的类名；若传入对象，则可自定义分段，键名为分段的界限值，键值为对应的类名,目前只支持一下的icon: 'icon-view'，'icon-taiji'，'icon-mok'，'icon-info'，'icon-shit'，'icon-lock'，'icon-map'，'icon-setting'，'icon-love'，‘icon-face’，'icon-star' |
| void-icon           | string                    | 'icon-setting'                           | 未被选中的图标组件                                           |
| disabled-void-icon  | string                    | 'icon-love'                              | 禁用状态的未选择图标                                         |
| void-color          | string                    | \#C6D1DE                                 | 未选中 icon 的颜色                                           |
| disabled-void-color | string                    | \#EFF2F7                                 | 只读时未选中 icon 的颜色                                     |
| score-template      | string                    | {value}                                  | 分数显示模板                                                 |
| max                 | number                    | 最大分值                                 | 5                                                            |
| size                | enum \| string            | -                                        | 尺寸，如果输入的是字符串，请带上单位，如：'16px'，enum的值为：'default', 'small', 'large' |
| allow-half          | boolean                   | false                                    | 是否允许半选                                                 |
| low-threshold       | number                    | 2                                        | 低分和中等分数的界限值， 值本身被划分在低分中                |
| high-threshold      | number                    | 4                                        | 高分和中等分数的界限值， 值本身被划分在高分中                |
| colors              | Array<string>\|Object     | ['#F7BA2A','#F7BA2A','#F7BA2A']          | icon 的颜色。 若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色 |
|                     |                           |                                          |                                                              |

#### 事件

| 事件名  | 说明           | 返回值       |
| ------- | -------------- | ------------ |
| @change | 分值改变时触发 | 改变后的分值 |

#### 字体

```js
@font-face {
  font-family: "iconfont"; /* Project id 4111710 */
  src: url("//at.alicdn.com/t/c/font_4111710_nvtul6we3jg.woff2?t=1698917543250")
      format("woff2"),
    url("//at.alicdn.com/t/c/font_4111710_nvtul6we3jg.woff?t=1698917543250")
      format("woff"),
    url("//at.alicdn.com/t/c/font_4111710_nvtul6we3jg.ttf?t=1698917543250")
      format("truetype");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &.icon-view:before {
    content: "\e62d";
  }

  &.icon-taiji:before {
    content: "\e6b8";
  }

  &.icon-mok:before {
    content: "\e63b";
  }

  &.icon-info:before {
    content: "\e63d";
  }

  &.icon-shit:before {
    content: "\e607";
  }

  &.icon-lock:before {
    content: "\e639";
  }

  &.icon-map:before {
    content: "\e637";
  }

  &.icon-setting:before {
    content: "\e602";
  }

  &.icon-love:before {
    content: "\e618";
  }

  &.icon-face:before {
    content: "\e6ae";
  }
  &.icon-star:before {
    content: "\e693";
  }
}
```

