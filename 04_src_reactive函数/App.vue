<template>
  <h1>我是APP组件</h1>
  <h1>一个人的信息</h1>
  <h2 v-show="person.name">姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2 v-show="person.sex">性别：{{ person.sex }}</h2>
  <h3>工作种类：{{person.job.type}}</h3>
  <h3>工作薪水：{{person.job.salary}}</h3>
  <h3>工作地点：{{person.job.company.address}}</h3>
  <h3>爱好：{{person.hobby}}</h3>
  <button @click="changeInfo">修改人的信息</button>
  <button @click="addSex">添加一个sex属性</button>
  <button @click="deleteName">删除一个name信息</button>
</template>

<script>
// 引入ref函数
import {reactive} from 'vue'
export default {
  name: 'App',
  setup() {
    let person = reactive({//reactive返回的是Proxy的实例对象简称proxy
      name :'张三',
      age : 18,
      // reactive用于处理对象、数组数据类型响应式，是深层次的
      job:{//对象用proxy处理
        type:'前端工程师',
        salary:'30k',
        company:{
          name:'腾讯',
          address:'深圳'
        }
      },
      hobby:['抽烟','喝酒','烫头']
    })

    function changeInfo() {
      person.name = '李四'
      person.age = 20
      person.job.type = '后端工程师'
      person.job.salary = '3k'
      person.job.company.address = '上海'
      person.hobby[0] = '游泳'
    }

    // 添加一个属性
    function addSex(){
      person.sex = '男'
    }
    // 删除一个属性
    function deleteName(){
      delete person.name
    }
    // 返回一个对象（常用）
    return {
      person,
      changeInfo,
      addSex,
      deleteName
    }
  }
}
</script>

