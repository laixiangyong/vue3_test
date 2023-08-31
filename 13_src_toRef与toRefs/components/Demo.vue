<template>
	<h2>姓名：{{name}}</h2>
	<h2>年龄：{{age}}</h2>
	<h2>薪资：{{job.jl.salary}}K</h2>
	<button @click="name+='~'">修改姓名</button>
	<button @click="age++">增长年龄</button>
	<button @click="job.jl.salary++">涨薪</button>
</template>

<script>
	import {reactive,toRef,toRefs} from 'vue'
	export default {
		name: 'Demo',
		setup(){
			//数据
			let person = reactive({
				name:'张三',
				age:18,
				job:{
					jl:{
						salary:20
					}
				}
			})

			//返回一个对象（常用）
			return {
                //使用toRef让数据具有响应式，可以将数据拆散交出去
				/* name:toRef(person,'name'),
				age:toRef(person,'age'),
				salary:toRef(person.job.jl,'salary') */

                ...toRefs(person)
			}
		}
	}
</script>


  