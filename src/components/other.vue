<template>
  <div>
   <input type="text" v-model="perValue" @input="perValue = $event.target.value">

   <div id="draggable" draggable="true">原生拖拽功能</div>
   <div id="droppable" class="box-block"></div>
  </div>
</template>

<script setup>
import { ref,watch,onMounted,onUnmounted } from 'vue';
const perValue = defineModel()

onMounted(()=>{

  //更推荐用ref来获取dom元素，但是这里为了演示，就直接用了原生js获取了
  // const element = ref(null)
  //如果是原生js获取dom,必须在onMounted里面执行，不然会找不到元素
  const element = document.getElementById('draggable')
  if(element){
    console.log('存在',element)
    element.addEventListener('dragstart',function(event){
      event.dataTransfer.setData('text/plain',event.target.id) //设置传输的数据类型和值
    })
      
  } else{
    console.log('不存在',element)
  }
  window.document.getElementById('droppable').addEventListener('dragover',function(event){
    event.preventDefault() //阻止默认行为，否则拖拽无效

  })
  window.document.getElementById('droppable').addEventListener('drop',function(event){ 
    event.preventDefault() //阻止默认行为，否则拖拽无效，允许放置操作
    var data = event.dataTransfer.getData('text/plain') //获取传输的数据
    event.target.appendChild(window.document.getElementById(data)) //将拖动的元素放置到目标位置

  })

  })

  onUnmounted(()=>{
    window.document.getElementById('draggable').removeEventListener('dragstart')
    window.document.getElementById('droppable').removeEventListener('dragover')
    window.document.getElementById('droppable').removeEventListener('drop')
  })
  



</script>
<style scoped>
.box-block{
  width: 100px;
  height: 100px;
  background-color:rgb(183, 180, 180);
}
</style>>

