import { ref } from 'vue'

export const useStars = (props: any, callback: (num: number) => void) => {
  const { modelValue, texts, disabled, max } = props
  const starNum = ref(modelValue)
  const startText = ref(texts[modelValue - 1])
  const startScore = ref(modelValue)
  function setStarNum (num: number) {
    if (disabled) return
    startText.value = texts[num - 1]
    startScore.value = num
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
