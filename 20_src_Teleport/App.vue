<template>
  <div class="app">
    <h3>我是APP组件(祖)</h3>
    <Son/>
  </div>
</template>

<script>
import Son from './components/Son.vue';
export default {
  name: 'App',
  components:{Son},
}
</script>

<style>
 .app{
  background-color: gray;
  padding: 10px;
 }
</style>