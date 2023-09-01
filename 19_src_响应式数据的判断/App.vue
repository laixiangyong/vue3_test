<template>
  <div>
    <h3>我是APP组件</h3>
  </div>
</template>

<script>
import { isProxy, isReactive, isReadonly, isRef, reactive, readonly, ref, toRefs } from 'vue';
export default {
  name: 'App',
  setup() {
    let car = reactive({
      name:'玛莎拉蒂',
      price:'90w'
    })
    let sum = ref(0)
    let car2 = readonly(car)

    console.log(isRef(sum));
    console.log(isReactive(car));
    console.log(isReadonly(car2));
    console.log(isProxy(car));
    console.log(isProxy(car2));

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