import { PropType } from 'vue'

export const basicProps = {
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
