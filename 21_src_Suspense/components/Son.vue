<template>
  <div class="son">
    <h3>我是Son组件(子)</h3>
    {{ sum }}
  </div>
</template>
  
<script>
import { ref } from 'vue'
export default {
  name: 'Son',
  async setup(){
    let sum = ref(0)
    let p = new Promise((resolve,reject)=>{//Promise让子组件慢出现
      setTimeout(()=>{
        resolve({sum})
      },3000)
    })
    return await p
  }
}
</script>
  
<style>
.son {
  background-color: skyblue;
  padding: 10px;
}
</style>