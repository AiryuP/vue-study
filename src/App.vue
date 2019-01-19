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
    <br/><br/>

    <div v-for="b in list1">
        {{ b.name }} {{ b.sex }}
    </div>

    <br/><br/><br/>
    <div>
      <div v-for="item in list2">
        <div> {{ item.cate }} </div>
        <ul v-for=" ite in item.list ">
          <li> {{ ite.name }} {{ ite.content }}</li>
        </ul>
      </div>
    </div>

    <br/><br/><br/>
    <h2>加载另一个组件</h2>
    <BindClass></BindClass> 
    <br/><br/><br/>
    <Todolist></Todolist>
    <br/><br/><br/>
    <HttpRequest></HttpRequest>
    <br/><br/><br/>
    <AxiosRequest></AxiosRequest>
    <br/><br/><br/> 
    <FetchJson></FetchJson>
    <br/><br/><br/>
    <PassValue :title="title" :haha="fatFun"></PassValue>


    <br/><br/><br/>
    <br/><br/><br/>
    <br/><br/><br/>
  </div>
</template>

<script>
  // 引入组件
  import BindClass from './components/bindClass.vue';
  import Todolist from './components/Todolist.vue';
  import HttpRequest from './components/HttpRequest.vue';
  import AxiosRequest from './components/AxiosRequest.vue';
  import FetchJson from './components/FetchJson.vue';
  import PassValue from './components/PassValue.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: "X我是父组件中的值X",
      obj:{
        "name": '张三'
      },
      list:[
        "111",
        "222",
        "333"
      ],
      list1:[
        {"name":'张三',"sex":'男'},
        {"name":'李四',"sex":'男'},
        {"name":'小红',"sex":'女'}
      ],
      list2:[
        {
          "cate": '国内新闻',
          "list":[
            { "name":'张一山',"content": '刘星的扮演者' },
            { "name": '杨紫',"content": '参加综艺' },
            { "name": '张三',"content": '玩蛇'}
          ]
        },{
          "cate": '国外新闻',
          "list":[
            { "name": '泰勒斯威夫特', "content": '发布新歌' },
            { "name": '小李子',"content": '瘦回来了' }
          ]
        }
      ]
    }
  },
  methods:{
      fatFun(a){
        console.log("这是父组件中的方法。"+a)
      }
  },
  // 挂载组件
  components :{
      "BindClass": BindClass,
      "Todolist" : Todolist,
      'HttpRequest': HttpRequest,
      "AxiosRequest":AxiosRequest,
      "FetchJson":FetchJson,
      "PassValue":PassValue
  }
}
</script>

<style lang="scss">

</style>
