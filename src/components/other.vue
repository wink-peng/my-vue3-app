<template>
  <div>
   <input type="text" v-model="perValue" @input="perValue = $event.target.value">
   <div id="draggable" draggable="true">原生拖拽功能</div>
   <div id="droppable" class="box-block"></div>
  </div>

  <el-table
   ref="multipleTbleRef"
   width="100%"
   height="500"
   stripe
   border
   highlight-current-row
   :data="filterTableData"
   :default-sort="{prop:'date',order:'descending'}"
   @current-change="handleCurrentChange"
   >
   <el-table-column type="expand">
    <template #default="props">
      <div>state:  {{props.row.state}}</div>
      <div>city: {{props.row.city}}</div>
    </template>
  </el-table-column>
   <el-table-column type="selection" />
    <el-table-column label="序号" type="index" width="80"/>
    <el-table-column  
    prop="date" 
    label="Date" 
    sortable
    width="150"
    :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}]"
    :filter-method="filterHandler"
    :formatter="formatter"
      />
    <el-table-column prop="name" label="Name" width="200" > 
      <template #header>
        <el-input v-model="search" size="small" placeholder="请输入name"/>
      </template>
      <template #default="scope">
        {{scope.row.name }}
      </template>
    </el-table-column>
    <el-table-column prop="city" label="City" width="200">
      <template #default="scope">
        <el-tag>{{ scope.row.city }}</el-tag>
        <el-tag type="success">{{ scope.row.state }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column 
      show-overflow-tooltip
      align="right"
      prop="address"
      label="Address"  />
    <el-table-column label="D Info">
      <el-table-column prop="name" label="Name" />
      <el-table-column label="A Info">
        <el-table-column prop="state" label="State" />
        <el-table-column prop="city" label="City" />
      </el-table-column>
    </el-table-column>



  </el-table>
</template>

<script setup>
import { ref,watch,onMounted,onUnmounted,computed} from 'vue';
const perValue = defineModel()

const search = ref('')

const handelDragstart = (e)=>{
  e.dataTransfer.setData('text/plain',e.target.id) //设置传输的数据类型和值
}

const handelDragover = (e)=>{
   e.preventDefault() //阻止默认行为，否则拖拽无效

}

const handelDrop = (e)=>{
  e.preventDefault() //阻止默认行为，否则拖拽无效，允许放置操作
    var data = e.dataTransfer.getData('text/plain') //获取传输的数据
    e.target.appendChild(window.document.getElementById(data)) //将拖动的元素放置到目标位置
}

const selectable = ref([1,2])

const  handleCurrentChange = (val)=>{
  console.log(val)
}

const formatter = (row, column)=>{
  console.log(row,column)
  return row.date + '日期';
}

const filterHandler = (value,row,column)=>{
  const property = column['property'];
  return row[property] === value;

}
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'som',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
]


const filterTableData = computed(()=>{
  return tableData.filter((data)=>{
    if(search.value){
      return data.name.toLowerCase().includes(search.value.toLowerCase())
    }else{
      return true;
    }
  })
})



onMounted(()=>{

  //更推荐用ref来获取dom元素，但是这里为了演示，就直接用了原生js获取了
  // const element = ref(null)
  //如果是原生js获取dom,必须在onMounted里面执行，不然会找不到元素
  const element = document.getElementById('draggable')
  if(element){
    // console.log('存在',element)
    element.addEventListener('dragstart',handelDragstart)  
  } else{
    // console.log('不存在',element)
  }
  window.document.getElementById('droppable').addEventListener('dragover',handelDragover)
  window.document.getElementById('droppable').addEventListener('drop',handelDrop)

  })

  onUnmounted(()=>{
    //组件销毁时，移除事件监听器   匿名函数无法移除，只能改用具名函数或保存引用
    window.document.getElementById('draggable').removeEventListener('dragstart',handelDragstart)
    window.document.getElementById('droppable').removeEventListener('dragover',handelDragover)
    window.document.getElementById('droppable').removeEventListener('drop',handelDrop)
  })
  



</script>
<style scoped>
.box-block{
  width: 100px;
  height: 100px;
  background-color:rgb(183, 180, 180);
}
</style>>

