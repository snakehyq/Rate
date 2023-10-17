<template>
  <div class="stars">
    <span
      v-for="(item,index) in max"
      :key="index"
      :class="[
        'iconfont icon-star',
        item <= starNum ? 'icon-star-active' : ''
      ]"
      :style="{'fontSize': size + 'px'}"
      @click="setStarNum(item)"
    ></span>
    <span v-show="showText" class="show-text">{{ startText }}</span>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { basicProps } from '../config/props'
import { useStars } from '../hooks/index'
const props = defineProps(basicProps)
const emits = defineEmits(['change', 'update:modelValue'])
const [starNum, startText, setStarNum] = useStars(props, callback)
function callback (num: number) {
  emits('change', num)
  emits('update:modelValue', num)
}
</script>

<style lang="less" scoped>
@font-face {
  font-family: "iconfont"; /* Project id 4111710 */
  src: url("//at.alicdn.com/t/c/font_4111710_8whpadev4vl.woff2?t=1697524516024")
      format("woff2"),
    url("//at.alicdn.com/t/c/font_4111710_8whpadev4vl.woff?t=1697524516024")
      format("woff"),
    url("//at.alicdn.com/t/c/font_4111710_8whpadev4vl.ttf?t=1697524516024")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #999;
  &:hover {
        font-size: 32px !important;
      }
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
