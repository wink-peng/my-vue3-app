<template>
  <div>
    <h1></h1>
    <p></p>
    <input v-model="inputValue"/>
    <Other v-model="testValue"/>
  </div>
</template>

<script setup>
import { ref,watch } from 'vue';
import {debounce,throttle} from '@/tools'
import Other from '@/components/other.vue'
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

</script>

