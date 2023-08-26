<template>
  <h1>我是APP组件</h1>
  <h1>一个人的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>性别：{{sex}}</h2>
  <button @click="sayHello">Vue3所配置的--sayHello</button>
  <hr>
  <button @click="sayWelcome">Vue2所配置的--sayWelcome</button>
</template>

<script>
// import {h} from 'vue'
export default {
  name: 'App',
  // vue2写法，vue2能读取vue3里的配置
  data() {
    return {
      sex:'男'
    }
  },
  methods: {
    sayWelcome(){
      alert('欢迎学习Vue')
    }
  },
  // vue3写法,注意vue3不能读取vue2里的配置，不要和vue2混用，数据与vue2冲突时默认使用vue3的数据
  setup(props) {
    let name = '张三'
    let age = 18

    // 方法
    function sayHello(){
      alert(`我叫${name}，我${age}岁了，你好啊！`)
    }

    // 返回一个对象（常用）
    return{
      name,
      age,
      sayHello
    }

    // 返回一个函数（渲染函数）
    // return ()=> h('h1','lai')
  }
}
</script>

