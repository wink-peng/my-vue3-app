<template>
  <div>
   <input type="text" v-model="perValue" @input="perValue = $event.target.value">
  </div>
</template>

<script setup>
import { ref,watch } from 'vue';
const perValue = defineModel()

</script>

