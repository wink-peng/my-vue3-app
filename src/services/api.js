import axios from 'axios'

//创建一个axios实例
const api = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',//设置统一的请求前缀
    timeout:5000 //设置统一的超时时间

})

//请求拦截器
api.interceptors.request.use(
    config=>{
        //在请求发送前做一些处理
        //例如：可以在这个添加token
        //config.headers.Authorization = `Bearer ${token}`
        return config
    },
    error=>{
        //对请求错误做些什么
        return Promise.reject(error)
    }
)

//响应拦截器
api.interceptors.response.use(
    res=>{
        //对响应数据做点什么
        return res.data
    },
    erroe=>{
        //对响应错误做点什么
        console.log('api error:',error.res?.status,error.message)
        return Promise.reject(error)
    }
)

// //请求拦截器
// api.interceptors.request.use(config=>{
//     //在请求发送前做一些处理
//     return config;
// },error=>{
//     //请求错误做些事
//     console.log(error) // for debug
//     Promise.reject(error)
// })

// //响应拦截器
// api.interceptors.response.use(res=>{
//     //对响应数据做些事
//     if(res.data.status === '401'){
//         alert('认证失败，请重新登录')
//         window.location.href = '/login'
//     }
//     return res;
// },error=>{
//     //响应错误做些事
//     console.log(error) // for debug
//     Promise.reject(error)
// })
// export default api;

export default api