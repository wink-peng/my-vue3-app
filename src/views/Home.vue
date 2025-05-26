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

    <TestExpose ref="formRef" />
    <button @click="submitForm"/>

    <div>el-date-picker</div>
    <el-date-picker v-model="date" type="date" placeholder="选择日期" />

  </div>
</template>
<script setup>
import Test from '@/components/Test.vue'
import TestExpose from "@/components/TestExpose.vue"
import { ref, watchEffect } from 'vue'
const counterRef = ref(null)
const data2 = ref('')

const formRef = ref(null)
const date = ref('')

const submitForm = ()=>{
  if(formRef.value.isValid()){
    console.log('表单验证通过',formRef.value.formData)
  } else{
    console.log('表单验证不通过')
  }
}

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