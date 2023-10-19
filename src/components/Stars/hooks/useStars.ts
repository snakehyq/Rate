import { ref } from 'vue'

export const useStars = (props: any, callback: (num: number) => void) => {
  const { modelValue, texts, disabled } = props
  const starNum = ref(modelValue)
  const startText = ref(texts[modelValue - 1])
  function setStarNum (num: number) {
    if (disabled) return
    startText.value = texts[num - 1]
    starNum.value = num
    callback(num)
  }
  return [
    starNum,
    startText,
    setStarNum
  ]
}
