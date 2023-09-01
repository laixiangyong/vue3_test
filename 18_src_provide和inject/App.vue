<template>
  <div class="app">
    <h3>我是APP组件(祖)，{{name}}--{{price}}</h3>
    <Son/>
  </div>
</template>

<script>
import { provide, reactive, toRefs } from 'vue';
import Son from './components/Son.vue';
export default {
  name: 'App',
  components:{Son},
  setup() {
    let car = reactive({
      name:'玛莎拉蒂',
      price:'90w'
    })
    provide('car',car)//给自己的后代组件传递数据
    return{
      ...toRefs(car),
    }
  }
}
</script>

<style>
 .app{
  background-color: gray;
  padding: 10px;
 }
</style>