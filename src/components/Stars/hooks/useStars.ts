import { ref } from 'vue'
import { basicPropsType } from '../config/props'

export const useStars = (props: basicPropsType, callback: (num: number) => void) => {
  const { modelValue, texts, disabled, scoreTemplate } = props
  const starNum = ref(modelValue)
  const startText = ref(texts[modelValue - 1])
  const startScore = ref<unknown>(modelValue)
  let template = ''
  const reg = /^\{value\}/
  if (reg.test(scoreTemplate)) {
    template = scoreTemplate.replace(reg, '')
    console.log(template)
    startScore.value = modelValue + template
  }
  function setStarNum (num: number) {
    if (disabled) return
    startText.value = texts[num - 1]
    startScore.value = num + template
    starNum.value = num
    callback(num)
  }
  return [
    starNum,
    startText,
    startScore,
    setStarNum
  ]
}
