import { ref } from 'vue'

export const useStars = (num: number, callback: (num: number) => void) => {
  const starNum = ref(num)
  function setStarNum (num: number) {
    starNum.value = num
    callback(num)
  }
  return [
    starNum,
    setStarNum
  ]
}
