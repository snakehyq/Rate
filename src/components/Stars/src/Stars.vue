<template>
  <div class="stars">
    <span
      v-for="(item,index) in max"
      :key="index"
      :class="[
        'iconfont',
        iconClasse,
        item <= starNum ? 'icon-star-active' : '',
        disabled ? '' : 'icon-hover',
        disabled && item > starNum ? 'icon-disabled-void-color' : ''
      ]"
      @click="setStarNum(item)"
    ></span>
    <span v-if="showScore" class="show-text" :style="{color: textColor}">{{ startScore }}</span>
    <span v-else-if="showText" class="show-text" :style="{color: textColor}">{{ startText }}</span>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { basicProps } from '../config/props'
import { useStars } from '../hooks/index'
const props = defineProps(basicProps)
const emits = defineEmits(['change', 'update:modelValue'])
const [starNum, startText, startScore, setStarNum] = useStars(props, callback)
function callback (num: number) {
  emits('change', num)
  emits('update:modelValue', num)
}
const fontSize = computed(() => {
  return props.size + 'px'
})
</script>

<style lang="less" scoped>
@font-face {
  font-family: "iconfont"; /* Project id 4111710 */
  src: url('//at.alicdn.com/t/c/font_4111710_tfu4xz6dkss.woff2?t=1697783650703') format('woff2'),
       url('//at.alicdn.com/t/c/font_4111710_tfu4xz6dkss.woff?t=1697783650703') format('woff'),
       url('//at.alicdn.com/t/c/font_4111710_tfu4xz6dkss.ttf?t=1697783650703') format('truetype');
}
.icon-hover:hover{
    font-size: 32px;
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
    &.icon-star {
      transition: color .3s;
    }
    &.icon-star-active {
      color: #fbab06;
    }
    &.icon-star:before {
      content: "\e693";
    }
    &.icon-face:before {
      content: "\e6ae";
    }
    &.icon-disabled-void-color {
      color: v-bind(disabledVoidColor);
    }
}
.stars {
  display: flex;
  align-items: center;
  .show-text {
    margin-left: 12px;
    color: #1f2d3d;
  }
}
</style>
