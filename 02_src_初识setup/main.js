//引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象--APP（类似之前vue2中的vm，但APP比vm更“轻”）
createApp(App).mount('#app')

// const app = createApp(App)
// console.log('@@@@@------',app);
// app.mount('#app')
