<template>
<div>expose</div>
<div>
    <input v-model="formData.name" placeholder="输入姓名"/>
    <input v-model="formData.age" type="number" placeholder="输入年龄"/>
</div>
</template>
<script setup>
import {ref} from 'vue'
const formData = ref({
    name:'',
    age:''
})
const isValid = () =>{
    const isValids = formData.value.name !== '' && formData.value.age > 0;
     return isValids;
}
defineExpose({formData,isValid})
</script>


<style lang="scss" scoped>

</style>