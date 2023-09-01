<template>
  <div class="grandson">
    <h3>我是GrandSon组件(孙)</h3>
    <Dialog/>
  </div>
</template>
  
<script>
import Dialog from './Dialog.vue';
export default {
  name: 'GrandSon',
  components:{Dialog}
}
</script>
  
<style>
.grandson {
  background-color: goldenrod;
  padding: 10px;
}
</style>