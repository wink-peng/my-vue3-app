<template>
  <div>
    <h1></h1>
    <p></p>
    <input v-model="inputValue"/>
    <Other v-model="testValue"/>
  </div>

  <div>
    <h1>store示例</h1>
    <div>{{name}}</div>
    <div>count:{{count}}</div>
    <div>double count:{{doubleCount}}</div>
    <button @click="incrementHandel">increment</button>
    <button @click="incrementAsync">incrementAsync</button>
  </div>
</template>

<script setup>
import { ref,watch } from 'vue';
import {debounce,throttle} from '@/tools'
import Other from '@/components/other.vue'
import {useCounterStore} from '@/store/counter'
import {storeToRefs} from 'pinia'
const inputValue = ref('')
const testValue = ref('answer')
const handelInput = debounce(()=>{
  console.log('inputValue==debounce',inputValue.value)
},1000)

const handelInput2 = throttle(()=>{
  console.log('inputValue==throttle',inputValue.value)
},1000)
watch(inputValue,(newVal)=>{
  if(newVal) handelInput() 
})

//获取store示例
const counterStore = useCounterStore()
// 使用storeToRefs解构保持响应性
const  {count,name,doubleCount} = storeToRefs(counterStore)

//直接解构actions
const {increment,incrementAsync} = counterStore

const incrementHandel = ()=>{
  increment()
   // 正确打印方式（任选其一）：
  console.log('方式1:', doubleCount.value) // 访问 ref 的 value
  console.log('方式2:', counterStore.doubleCount) // 直接从 store 访问
  
  // 验证 count 是否变化
  console.log('当前 count:', count.value) 
}
watch(doubleCount, (newVal) => {
  console.log('doubleCount 变化了:', newVal)
})
</script>

