<template>

  <div id="app">
    <h2>你好，VUE！{{ msg }}</h2>
    <br>
    这是一个跟组件！{{ obj.name }}

    <br/>

    <ul> 
      <li v-for="a in list">
        {{ a }}
      </li>
    </ul>


    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      obj:{
        name: '张三'
      },
      list:[
        "111",
        "222",
        "333"
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
