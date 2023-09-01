<template>
  <div class="son">
    <h3>我是Son组件(子)</h3>
    <GrandSon/>
  </div>
</template>
  
<script>
import GrandSon from './GrandSon.vue';
export default {
  name: 'Son',
  components:{GrandSon}
}
</script>
  
<style>
.son {
  background-color: skyblue;
  padding: 10px;
}
</style>