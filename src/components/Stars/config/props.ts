import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@/constants/'
import { componentSizes } from '@/constants/size'
import { definePropType } from '@/types/props'
import { isNumber } from '@/utils/types'
import { mutable } from '@/utils/typeScripts'
import { PropType, ExtractPropTypes } from 'vue'

export const basicProps = {
  colors: {
    type: definePropType<string[] | Record<string, unknown>>([Array, Object]),
    default: () => mutable(['#F7BA2A', '#F7BA2A', '#F7BA2A'] as const)
  },
  icons: {
    type: definePropType<string[]| Record<number, string>>([Array, Object]),
    default: () => mutable(['icon-star', 'icon-face', 'icon-love'])
  },
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
  disabledVoidIcon: {
    type: String as PropType<string>,
    default: () => 'icon-love'
  },
  voidIcon: {
    type: String as PropType<string>,
    default: () => 'icon-setting'
  },
  // iconClass: {
  //   type: String as PropType<string>,
  //   default: 'icon-star'
  // },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  allowHalf: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  textColor: {
    type: String as PropType<string>,
    default: '#1F2D3D'
  },
  texts: {
    type: definePropType<string []>(Array),
    default: mutable(['极差', '失望', '一般', '满意', '惊喜'] as const)
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
  lowThreshold: {
    type: Number as PropType<number>,
    default: 2
  },
  highThreshold: {
    type: Number as PropType<number>,
    default: 4
  },
  size: {
    type: String as PropType<string>,
    values: componentSizes
  }
}
export type basicPropsType = ExtractPropTypes<typeof basicProps>

export const Emits = {
  [CHANGE_EVENT]: (value: number) => isNumber(value),
  [UPDATE_MODEL_EVENT]: (value: number) => isNumber(value)
}
export type EmitsType = typeof Emits
