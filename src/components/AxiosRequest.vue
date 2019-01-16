<template>
    <div id="axiosRsquest">
        {{ msg }}

        <div>
            <p>axios属于第三方请求数据的插件，所以和resource稍微有些不同</p>
            <ul>
                <ol>首先和resource一样，安装插件 npm install axios  --save   save的使用是为了写入package.json，目的是为了install的时候能够把插件下载</ol>
                <ol>哪里使用的话（模板、组件）就在哪里引入</ol>
            </ul>

        </div>
        <button v-on:click = "getData()">请求数据</button>
        <div>
            <button @click="setData()">数据遍历</button>
            <ul>
                <li v-for="item in list2">
                    {{ item.id }}
                </li>
            </ul>
        </div>
    </div>

</template>

<script>

    import Axios from 'axios';


export default {

    data(){
        return {
            msg: "axios请求数据",
            list: [],
            list2:[]
        }
    },
    methods:{
        getData(){
            Axios.get("https://www.layui.com/demo/table/user/").then((res)=>{
                console.log(res)
                this.list = res.data.data;
            },(err)=>{

            })
        },
        setData(){
            this.list2 = this.list;
        }
    },
    components:{

    }

}
</script>

<style lang="sass">

</style>
