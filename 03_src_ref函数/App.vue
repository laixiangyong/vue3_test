<template>
  <h1>我是APP组件</h1>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h3>工作种类：{{job.type}}</h3>
  <h3>工作薪水：{{job.salary}}</h3>
  <h3>工作地点：{{job.company.address}}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
// 引入ref函数
import {ref} from 'vue'
export default {
  name: 'App',
  // vue3写法,注意vue3不能读取vue2里的配置，不要和vue2混用，数据与vue2冲突时默认使用vue3的数据
  setup(props) {
    let name = ref('张三')
    let age = ref(18)
    let job = ref({//对象用proxy处理
      type:'前端工程师',
      salary:'30k',
      company:{
        name:'腾讯',
        address:'深圳'
      }
    })

    function changeInfo() {
      name.value = '李四'
      age.value = 20
      job.value.type = '后端工程师'
      job.value.salary = '3k'
      job.value.company.address = '上海'
    }

    // 返回一个对象（常用）
    return {
      name,
      age,
      job,
      changeInfo
    }
  }
}
</script>

