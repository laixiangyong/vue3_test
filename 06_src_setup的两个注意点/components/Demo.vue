<template>
    <h1>我是APP组件</h1>
    <h1>一个人的信息</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="test">测试触发Demo组件的hello事件</button>
</template>
  
<script>
// 引入ref函数
import { reactive } from 'vue'
export default {
    name: 'Demo',
    // 传过来的数据
    props:['msg','school'],
    emits:['hello'],
    beforeCreate() {
        console.log('---beforeCreate---');
    },
    setup(props,context) {
        // setup在beforeCreate之前，此时的this为undefine，所以在setup里使用不了this
        // console.log('---setup---',context);
        // console.log('---setup---',context.attrs);//相当于vue2中的$attrs
        // console.log('---setup---',context.emit);//触发自定义事件
        console.log('---setup---',context.slots);//插槽
        let person = reactive({//reactive返回的是Proxy的实例对象简称proxy
            name: '张三',
            age: 18,
        })
        // 方法
        function test(){
            context.emit('hello',666)
        }
        // 返回对象（常用）
        return {
            person,
            test
        }
    }
}
</script>
  
  