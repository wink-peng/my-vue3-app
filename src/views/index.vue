<template>
  <div class="posts-page">
    <h1>Posts Page</h1>
    <button @click="fetchPosts">Load Posts</button>
    <button @click="fetchCreatePost">Creste Test Post</button>
    <div v-if="loading" class="loading">loading...</div>
    <div>
      <ul>
        <li v-for="item in posts" :key="item.id">
          <h3>{{item.title}}</h3>
          <div>{{item.body}}</div>
          <button @click="fetchDeletePost(item.id)">Delete</button>

        </li>
      </ul>
    </div>
    
  </div>
</template>
<script setup>
import {ref,onMounted,watch} from 'vue'
import postsApi from '@/services/postsApi'
import {getPosts,getPostById,createPost,deletePost} from '@/services/postsApi'
const loading = ref(false)
const posts = ref([])
//默认导出的简洁写法
// const fetchPosts = async ()=>{
//   const res = await postsApi.getPosts().then(res=>{
//     posts.value = res.slice(0,10)
//     console.log('res==fetchPosts',res)
//   })
  
// }

const fetchPosts = async ()=>{
try{
  loading.value = true
  const res = await getPosts()
  posts.value = res.slice(0,10)
  console.log('res==fetchPosts',res)
} catch(err){
  console.log('err==fetchPosts',err)
} finally{
  loading.value = false
  console.log('finally==fetchPosts')
}
}

const fetchPostsById = async ()=>{
  const res = await getPostById(34).then(res=>{
    console.log('res==fetchPostsById',res)
  })
}

const fetchCreatePost = async ()=>{
  try{
    const param = {
      title:'test post!!!!!',
      body:'🥑🥑🥑🥑🥑test body!!🥑🥑🥑🥑',
      userId:1
    }
    const res = await createPost(param)
    posts.value = [res,...posts.value]
    console.log('res==fetchCreatePost',res)
  } catch(err){
    console.log('err==fetchCreatePost',err)
  } finally{
    console.log('finally==fetchCreatePost')
  }

}
 
 const fetchDeletePost = async (id)=>{
  try{
    await deletePost(id)
    posts.value = posts.value.filter(post=> post.id !== id)
  } catch(err){
    console.log('err==fetchDeletePost',err)
  }
 }

// 在组件挂载时调用-使用匿名函数封装多个调用-onMounted实际上只接受一个函数作为参数
onMounted(()=>{
  // fetchPostsById()
})
</script>
<style scoped>
.posts-page {
  padding: 20px;
}
.loading {
  color: #666;
  padding: 10px;
}
.error {
  color: red;
  padding: 10px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 15px 0;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 5px;
}
button {
  margin: 5px;
  padding: 5px 10px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
button:hover {
  background: #369f6e;
}
</style>>