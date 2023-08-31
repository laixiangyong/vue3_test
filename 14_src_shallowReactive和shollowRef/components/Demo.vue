<template>
	<h4>当前的y值是:{{x.y}}</h4>
	<button @click="x.y++">点我y+1</button>
	<hr>
	<h2>姓名：{{name}}</h2>
	<h2>年龄：{{age}}</h2>
	<h2>薪资：{{job.jl.salary}}K</h2>
	<button @click="name+='~'">修改姓名</button>
	<button @click="age++">增长年龄</button>
	<button @click="job.jl.salary++">涨薪</button>
</template>

<script>
	import {reactive,toRef,toRefs,shallowReactive,shallowRef, ref} from 'vue'
	export default {
		name: 'Demo',
		setup(){
			//数据
			// let person = shallowReactive({//只考虑第一层数据的响应式
			let person = reactive({
				name:'张三',
				age:18,
				job:{
					jl:{
						salary:20
					}
				}
			})
			// shallowRef只处理基本数据类型响应式，不处理对象
			let x = shallowRef({
				y:0
			})
			//返回一个对象（常用）
			return {
				x,
                person,
                ...toRefs(person)
			}
		}
	}
</script>


  