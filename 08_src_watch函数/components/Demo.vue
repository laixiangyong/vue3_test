<template>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我+1</button>
    <hr>
    <h2>当前的信息为：{{msg}}</h2>
    <button @click="msg+='!'">修改信息</button>
    <hr>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>薪资：{{person.job.j1.salary}}K</h2>
    <button @click="person.name+='@'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
</template>
  
<script>
// 引入ref函数
import { watch, ref ,reactive} from 'vue'
export default {
    name: 'Demo',
    setup() {
        let sum = ref(0)
        let msg = ref('你好')
        let person = reactive({
            name:'张三',
            age:18,
            job:{
                j1:{
                    salary:20
                }
            }
        })
        // 监视ref定义的一个响应式数据
       /*  watch(sum,(newValue,oldValue)=>{
            console.log('sum的值发生了变化',newValue,oldValue);
        },{immediate:true}) */

        // 监视ref定义的多个响应式数据
       /*  watch([sum,msg],(newValue,oldValue)=>{
            console.log('sum或msg发生了变化',newValue,oldValue);
        },{immediate:true}) */
        /* watch(msg,(newValue,oldValue)=>{
            console.log('msg发生了变化',newValue,oldValue);
        }) */

        // 监视reactive所定义的一个响应式数据,此处无法正确的获取oldValue,强制开启了深度监视
       /*  watch(person,(newValue,oldValue)=>{
            console.log('person发生了变化',newValue,oldValue);
        }) */

         // 监视reactive所定义的一个响应式数据中的某个属性
        /*  watch(()=>person.age,(newValue,oldValue)=>{
            console.log('person的age发生了变化',newValue,oldValue);
        }) */

        // 监视reactive所定义的一个响应式数据中的某些属性
       /*  watch([()=>person.age,()=>person.name],(newValue,oldValue)=>{
            console.log('person的age或name发生了变化',newValue,oldValue);
        }) */

        // 特殊情况,
        watch(()=>person.job,(newValue,oldValue)=>{
            console.log('person的job发生了变化',newValue,oldValue);
        },{deep:true}) //此处由于监视的是reactive定义的对象中的某个属性，所以deep配置有效
        // 返回对象（常用）
        return {
            sum,
            msg,
            person
        }
    }
}
</script>
  
  