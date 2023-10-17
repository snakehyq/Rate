import { ref } from 'vue'

export const useStars = (props: any, callback: (num: number) => void) => {
  const { modelValue, texts } = props
  const starNum = ref(modelValue)
  const startText = ref('')
  function setStarNum (num: number) {
    starNum.value = num
    startText.value = texts[num - 1]
    callback(num)
  }
  return [
    starNum,
    startText,
    setStarNum
  ]
}
