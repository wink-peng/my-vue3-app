import {defineStore} from 'pinia'
//定义并导出counter store

export const useCounterStore = defineStore('counter',{
    //状态（data）
    state:()=>({
        count:0,
        name:'pinia counter'
    }),
    persist:true,
    //计算属性（compute）
    getters:{
        doubleCount:(state)=>state.count*2, //箭头函数写法：state参数显式传递，简单计算。如果是一个代码块{}要用return 显式返回，不然就是undefined
        //使用其他getter
        doubleCountPlusOne(){ //普通函数：依赖其他getter 
            return this.doubleCount+1 //通过this访问其他getter（doubleCount）
        },
        complexValue(){ //普通函数：依赖state和getter
            return this.doubleCount + this.count //this.count 等价于 state.count
        }

    },
    //方法（methods）
    actions:{
        increment(){ 
            this.count++
        },
        async incrementAsync(){
            await new Promise(resolve=>setTimeout(resolve,1000))
            this.increment()
        }
    }
})