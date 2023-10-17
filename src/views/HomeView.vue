<template>
  <div class="home">
   <Star v-model="starModel" :max="max" size="30" @change="starChange"></Star>
  </div>
</template>

<script lang="ts" setup>
import { Star } from '@/components/Stars'
import { ref } from 'vue'
const max = 5
const starModel = ref(0)
function starChange (num: number) {
  console.log(num, starModel)
}
</script>

<style lang="less" scoped>
.home {
  width: 300px;
  margin: 100px auto;
}
</style>
