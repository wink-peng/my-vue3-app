import api from './api'

//默认导出 导入时不能用{}包裹 因为这样就不是默认导出了
//如果要导出多个 就用命名导出 比如export const getPosts = ()=>{ return api.get('/posts') }
export default {
    //获取所有帖子
    getPosts(){
        return api.get('/posts')
    }

}

//命名导出 推荐

//获取所有帖子
export const getPosts = ()=>{
    // 调用api.get方法，从'/posts'路径获取数据
    return api.get('/posts')
}

//获取单个帖子
export const getPostById =(id)=>{
    return api.get(`/posts/${id}`)
}

//创建帖子
export const createPost = (data)=>{
    return api.post('/posts',data)
}

//删除帖子
export const deletePost = (id)=>{
 return api.delete(`/posts/${id}`)
}

//更新帖子
export const updatePost = (id,data)=>{
    return api.put(`/posts/${id}`,data)
}
