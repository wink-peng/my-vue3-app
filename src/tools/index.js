/**
 * 防抖函数
 * @param {fun}迟执行的方法
 * @param {time}迟执行的时间
 * @return   返回一个函数
 * fn回调函数，执行的函数 time执行事件间隔，毫秒
 * 多次点击事件都会重新计算时间，最后一次点击事件执行回调函数
 */
const debounce = (fn,time)=>{
    let timer = null
    return function(){
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(this,arguments)
            timer = null
        },time)
}}
/**
 * 使用
 * const fun = ()=>{
 *     console.log('执行了')
 * }
 *const debounceFn = debounce(fun,time)
    调用debounceFn()
 */


/**
 * 节流函数
 * @description 无论触发多少次，再间隔时间内只触发一次
 * @param {fn} 回调的函数
 * @param {time} 时间间隔，毫秒
 * @return 返回节流后的函数
 */

const throttle = (fn,time)=>{
    let timer = null
    return function (){
        if(!timer){
            timer = setTimeout(()=>{
                fn.apply(this,arguments)
                timer = null
            },time)
        }
    }

}
/**
 * 使用示例
 * const fun = ()=>{
 *     console.log('执行了')
 * }
 * const throttleFn = throttle(fun,time)
 */

export {debounce,throttle}