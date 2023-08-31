<template>
	<h4>当前求和为:{{sum}}</h4>
	<button @click="sum++">点我sum+1</button>
	<hr>
	<h2>姓名：{{name}}</h2>
	<h2>年龄：{{age}}</h2>
	<h2>薪资：{{job.jl.salary}}K</h2>
	<button @click="name+='~'">修改姓名</button>
	<button @click="age++">增长年龄</button>
	<button @click="job.jl.salary++">涨薪</button>
</template>

<script>
	import {reactive,toRefs, ref,readonly,shallowReadonly} from 'vue'
	export default {
		name: 'Demo',
		setup(){
			//数据
			let sum = ref(0)
			let person = reactive({
				name:'张三',
				age:18,
				job:{
					jl:{
						salary:20
					}
				}
			})
			// person = readonly(person)//person的所有属性只能读
			// person = shallowReadonly(person)//person浅层次的属性只能读，深层次的依旧可改，如salary
			// sum = readonly(sum)
			// sum = shallowReadonly(sum)

			//返回一个对象（常用）
			return {
				sum,
                ...toRefs(person)
			}
		}
	}
</script>


  