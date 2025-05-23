<template>
  <div>
    <h1></h1>
    <button>Load Posts</button>
    <button >Creste Test Post</button>
    <div class="loading">loading...</div>
    <p>欢迎来到我的网站</p>
    {{data2}}
    <p>===data2会随着子组件的变化而变化，因为实现了双向绑定</p>
    <Test v-model='data2' />
    <Test ref="counterRef" />
    <boutton @click="callChildMeth">调用子组件方法</boutton>
  </div>
</template>
<script setup>
import Test from '@/components/Test.vue'
import { ref, watchEffect } from 'vue'
const counterRef = ref(null)
const data2 = ref('')
const callChildMeth = ()=>{
  counterRef.value.increment() //调用子组件方法
  console.log('调用子组件方法',counterRef.value.count)
}
watchEffect(()=>{
  console.log(data2.value)
})
</script>
<style lang="less" scoped>

</style>