<template>
  <div class="home">
   <Star v-model="starModel" disabled score-template="{value}分" void-color="#C6D1DE" icon-classe="icon-face" :max="5" size="30" text-color="#ff9900" show-text show-score @change="starChange"></Star>
  </div>
</template>

<script lang="ts" setup>
import { Star } from '@/components/Stars'
import { ref } from 'vue'
const disabled = true
const starModel = ref(1)
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
