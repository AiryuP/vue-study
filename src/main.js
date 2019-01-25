import Vue from 'vue';
import App from './App.vue';

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

Vue.use(VueResource);
Vue.use(VueRouter);

// 创建组件

import BindClass from './components/bindClass.vue';
import Todolist from './components/Todolist.vue';
import HttpRequest from './components/HttpRequest.vue';
import AxiosRequest from './components/AxiosRequest.vue';
import FetchJson from './components/FetchJson.vue';
import PassValue from './components/PassValue.vue';
import VueRoute from './components/VueRoute.vue';

// 配置路由
const routes = [
  { path: '/bindClass',component: BindClass },
  { path: '/todoList',component: Todolist },
  { path: '/httpRequest',component: HttpRequest },
  { path: '/axiosRequest',component: AxiosRequest },
  { path: '/fetchJson',component: FetchJson },
  { path: '/passValue',component: PassValue },
  { path: '/vueRoute',component: VueRoute },
  { path: '*' , redirect: '/bindClass' }
]

// 实例化vueRouter

const router = new VueRouter({
  routes //缩写，相当于  routes： routes
})


// 挂载路由


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// 5. <router-view></router-view>  放在App.vue中，作为路由出口
