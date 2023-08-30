<template>
  <Demo @hello="showHelloMsg" msg="你好" school="电大">
    <template v-slot:hi>
      <span>欢迎</span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo'
export default {
  name: 'App',
  components:{Demo},
  setup(){
    function showHelloMsg(value){
      alert(`你触发了hello事件，我收到的参数是${value}!`)
    }
    return {
      showHelloMsg
    }
  }
}
</script>

