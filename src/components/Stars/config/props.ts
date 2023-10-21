import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@/constants/'
import { isNumber } from '@/utils/types'
import { PropType } from 'vue'

export const basicProps = {
  scoreTemplate: {
    type: String as PropType<string>,
    default: '{value}'
  },
  disabledVoidColor: {
    type: String as PropType<string>,
    default: '#EFF2F7'
  },
  voidColor: {
    type: String as PropType<string>,
    default: '#C6D1DE'
  },
  iconClass: {
    type: String as PropType<string>,
    default: 'icon-star'
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  textColor: {
    type: String as PropType<string>,
    default: '1f2d3d'
  },
  texts: {
    type: Array as PropType<string[]>,
    default: ['极差', '失望', '一般', '满意', '惊喜']
  },
  showText: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  showScore: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  modelValue: {
    type: Number as PropType<number>,
    default: 0
  },
  max: {
    type: Number as PropType<number>,
    default: 5
  },
  size: {
    type: String as PropType<string>,
    default: '16'
  }
}
export type basicPropsType = typeof basicProps

export const Emits = {
  [CHANGE_EVENT]: (value: number) => isNumber(value),
  [UPDATE_MODEL_EVENT]: (value: number) => isNumber(value)
}
export type EmitsType = typeof Emits
