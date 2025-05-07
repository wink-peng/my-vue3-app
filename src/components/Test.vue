<template>
    <div>TEST</div>
    <input :value="modelValue" @input="handleInput"/>
    <div style="display:flex;backgroundColor:#ff6900;justify-content:space-between">
        <div>1111</div>
        <div>2222</div>
        <div>3333</div>
        <div>4444</div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
defineProps({
    modelValue:{
        type:String,
        required:true
    }
})
const emit = defineEmits(['update:modelValue'])
const handleInput = (e)=>{
    // 输出事件对象
    console.log(e)
    // 注释掉的事件触发，用于更新绑定的模型值
    emit('update:modelValue',e.target.value)
}
</script>
<style lang="less" scoped>
</style>