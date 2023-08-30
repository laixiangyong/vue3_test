<template>
    <h1>一个人的信息</h1>
    姓：<input type="text" v-model="person.firstName">
    <br>
    名：<input type="text" v-model="person.lastName">
    <br>
    <span>全名：{{ person.fullName }}</span>
    <br>
    全名：<input type="text" v-model="person.fullName">
</template>
  
<script>
// 引入ref函数
import { reactive, computed } from 'vue'
export default {
    name: 'Demo',
    setup() {
        let person = reactive({//reactive返回的是Proxy的实例对象简称proxy
            firstName: '张',
            lastName: '三',
        })
        // 计算属性简写形式（没有考虑计算属性被修改的情况）
        // person.fullName = computed(() => {
        //     return person.firstName + '-' + person.lastName
        // })
        // 计算属性完整形式
        person.fullName = computed({
            get(){
                return person.firstName + '-' + person.lastName
            },
            set(value){
                const nameArr = value.split('-')
                person.firstName=nameArr[0]
                person.lastName=nameArr[1]
            }
        })
        // 返回对象（常用）
        return {
            person,
            
        }
    }
}
</script>
  
  