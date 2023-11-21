<template>
  <div class="stars">
    <span
      v-for="(item, index) in max"
      :key="index"
      :class="[
        'iconfont',
        'el-rate__item',
        hoverIndex == item ? 'el-item__transform' : '',
      ]"
      :style="{ cursor: rateDisabled ? 'auto' : 'pointer' }"
      @mousemove="setCurrentValue(item, $event)"
      @mouseleave="resetCurrentValue"
    >
      <i
        class="iconfont el-rate__icon"
        :class="[!showDecimalIcon(item) && classes[item - 1]]"
        :style="getIconStyle(item)"
      >
        <i
          class="iconfont el-rate__icon el-rate__decimal"
          v-if="showDecimalIcon(item)"
          :class="decimalIconClass"
          :style="decimalStyle"
        >
        </i>
      </i>
    </span>
    <span
      v-if="showText || showScore"
      class="el-rate__text"
      :style="{ color: textColor }"
      >{{ text }}</span
    >
  </div>
</template>

<script lang="ts" setup>
import { computed, Events, Ref, ref, toRaw, watch } from 'vue'
import { basicProps, Emits } from '../config/props'
import { useStars } from '../hooks/index'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@/constants/'
import { hasClass, isObject } from '@/utils/types'
const props = defineProps(basicProps)
const emits = defineEmits(Emits)
const currentValue = ref(props.modelValue)
const pointerAtLeftHalf = ref(true)
const hoverIndex = ref(-1)

const text = computed(() => {
  if (props.showText) {
    const texts = props.texts
    return texts[Math.ceil(currentValue.value) - 1]
  }
  const score = currentValue.value
  return score
})
const classes = computed(() => {
  const result = []
  let i = 0
  // 基于当前选中值 作为阈值
  const threshold = currentValue.value
  // 半选逻辑 ...
  // 选中状态
  for (; i < threshold; i++) {
    result.push(activeClass.value)
  }
  // 未选中状态
  for (; i < props.max; i++) {
    result.push(voidClass.value)
  }
  console.log(result)
  return result
})

const activeClass = computed(() => {
  return getValueFromMap(currentValue.value, arrayToObject(props.icons))
})

const decimalIconClass = computed(() => {
  return getValueFromMap(currentValue.value, arrayToObject(props.icons))
})

// 未选中 icon 的类名  不同模式下：只读模式/可选
const voidClass = computed(() => {
  return rateDisabled.value ? props.disabledVoidIcon : props.voidIcon
})
// 是否为只读
const rateDisabled = computed(() => {
  return props.disabled
})

const activeColor = computed(() => {
  return getValueFromMap(currentValue.value, arrayToObject(props.colors))
})

//  当前值百分比  3.2 => 20(%)
const valueDecimal = computed(() => {
  return currentValue.value * 100 - Math.floor(currentValue.value) * 100
})

// 半选样式
const decimalStyle = computed(() => {
  let width = ''
  if (rateDisabled.value) {
    width = `${valueDecimal.value}%`
  } else if (props.allowHalf) {
    width = '50%'
  }
  return {
    color: activeColor.value,
    width,
    fontSize: props.size
  }
})

const arrayToObject = (_arr: any[] | Record<string, unknown>) => {
  return Array.isArray(_arr)
    ? {
        [props.lowThreshold]: _arr[0],
        [props.highThreshold]: { value: _arr[1], excluded: true },
        [props.max]: _arr[2]
      }
    : _arr
}

function getValueFromMap (value: number, map: Record<number, unknown>) {
  const matchedKeys = Object.keys(map)
    .map((_) => +_)
    .filter((key) => {
      const val = map[key]
      // 区间最大值是否包含  true 不包括  false 包括
      const excluded = isObject(val) ? val.excluded : false
      return excluded ? value < key : value <= key
      // value <= lowThreshold  matchedKeys =  [lowThreshold, highThreshold, max]
      // value > lowThreshold && value < highThreshold matchedKeys =  [highThreshold, max]
      // value > highThreshold && value <= max    matchedKeys =  [ max]
    })
    .sort((a, b) => a - b) // 排序 从小到大

  // 获取最小配置
  const matchedValue = map[matchedKeys[0]]
  console.log('matchedValue', matchedValue)
  // 根据类型获取值
  return isObject(matchedValue) ? matchedValue.value : matchedValue || ''
}

function showDecimalIcon (item: number) {
  const showHenDisabled =
    rateDisabled.value &&
    valueDecimal.value > 0 &&
    item - 1 < props.modelValue &&
    props.modelValue < item
  const showHenAllowHalf =
    props.allowHalf &&
    pointerAtLeftHalf.value &&
    item - 0.5 <= currentValue.value &&
    currentValue.value < item
  return showHenDisabled || showHenAllowHalf
}

function getIconStyle (item: number) {
  const voidColor = rateDisabled.value
    ? props.disabledVoidColor
    : props.voidColor
  return {
    color: item <= currentValue.value ? activeColor.value : voidColor,
    fontSize: props.size
  }
}

function resetCurrentValue (e: MouseEvent) {
  if (rateDisabled.value) return
  if (props.allowHalf) {
    pointerAtLeftHalf.value = props.modelValue !== Math.floor(props.modelValue)
  }
  currentValue.value = props.modelValue
  hoverIndex.value = -1
}

function setCurrentValue (item: number, e: MouseEvent) {
  if (rateDisabled.value) {
    return
  }
  if (props.allowHalf) {
    let target = e.target as any
    if (hasClass(target, 'el-rate__item')) {
      target = target.querySelector('.el-rate__icon')
    }
    if (hasClass(target, 'el-rate__decimal')) {
      target = target.parentNode
    }
    pointerAtLeftHalf.value = e.offsetX * 2 <= target.clientWidth
    currentValue.value = pointerAtLeftHalf.value ? item - 0.5 : item
    console.log('target', target.className)
  } else {
    currentValue.value = item
  }
  hoverIndex.value = item
}

watch(
  () => props.modelValue,
  (newVal, oldVal) => {
    currentValue.value = newVal
    pointerAtLeftHalf.value = newVal !== Math.floor(newVal)
  }
)
</script>

<style lang="less" scoped>
@font-face {
  font-family: "iconfont"; /* Project id 4111710 */
  src: url("//at.alicdn.com/t/c/font_4111710_nvtul6we3jg.woff2?t=1698917543250")
      format("woff2"),
    url("//at.alicdn.com/t/c/font_4111710_nvtul6we3jg.woff?t=1698917543250")
      format("woff"),
    url("//at.alicdn.com/t/c/font_4111710_nvtul6we3jg.ttf?t=1698917543250")
      format("truetype");
}
.el-rate__item {
  padding-right: 6px;
}
.el-rate__decimal {
  position: absolute;
  top: 0px;
  left: 0;
  display: inline-block;
  overflow: hidden;
}
.el-item__transform {
  transform: scale(1.15);
}
.icon-hover:hover {
  font-size: 32px;
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
.stars {
  display: flex;
  align-items: center;
  .el-rate__icon {
    position: relative;
    display: inline-block;
    transition: 0.3s;
  }
  .show-text {
    margin-left: 12px;
    color: #1f2d3d;
  }
}
</style>
