<template>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我+1</button>
    <hr>
    <h2>当前点击时鼠标的坐标为x:{{point.x}}, y:{{point.y}}</h2>
</template>
  
<script>
// 引入ref函数
import {
    ref, 
} from 'vue'
import usePoint from '../hooks/usePoint'
export default {
    name: 'Demo',
    setup() {
        let sum = ref(0)
        let point = usePoint()
        // 返回对象（常用）
        return {
            sum,
            point
        }
    },
    
}
</script>
  
  