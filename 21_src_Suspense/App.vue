<template>
  <div class="app">
    <h3>我是APP组件(祖)</h3>
    <!-- 异步引入,配合Suspense调慢网速让Son组件慢出现 -->
    <Suspense>
      <template v-slot:default>
        <Son/>
      </template>
      <template v-slot:fallback>
        <h3>加载中....请稍后</h3>
      </template>
    </Suspense>
    
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
// import Son from './components/Son.vue';//静态引入
const Son = defineAsyncComponent(()=>import('./components/Son.vue'))//异步引入
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