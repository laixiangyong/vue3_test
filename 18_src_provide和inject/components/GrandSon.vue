<template>
  <div class="grandson">
    <h3>我是GrandSon组件(孙)，{{ name }}--{{ price }}</h3>
  </div>
</template>
  
<script>
import { inject, toRefs } from 'vue'

export default {
  name: 'GrandSon',
  setup() {
    let car = inject('car')//接收数据
    return {
      ...toRefs(car)
    }
  }
}
</script>
  
<style>
.grandson {
  background-color: goldenrod;
  padding: 10px;
}
</style>