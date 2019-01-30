<template>
    <div id="HttpRequest">
        {{ msg }}
        <br />
                <br />
                        <br />
        <div class="v-Btn" @click = "getData()">点击请求数据</div>

        <div>
            <p>vue-resource 是vue官方的数据请求方式，所以在安装之后，要在main.js中全局引入，同时要使用Vue.use()导入 。</p>
            <pre>
                import VueResource from 'vue-resource';

                Vue.use(VueResource);
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name: 'httpR',
    data(){
        return {
            msg : '这是一个数据请求组件',
            // HTUrl: 'http://101.201.80.22:8080/tour/findAllDynamics',
            HTUrl: 'http://192.168.1.111:8080/tour/findAllDynamics',
            tou: {
                "currentPage":"1","pageSize":"10","token":""
            }
        }
    },
    methods:{
        getData :function(){

            // this.$http.post(this.HTUrl,{
            //     "currentPage":"1","pageSize":"10","token":""
            // }).then(response => {

            // // get body data
            // // this.someData = response.body;
            //     console.log( response.body )
            // }, response => {
            // // error callback
            // });

            this.$http.get("https://www.layui.com/demo/table/user/").then(res =>{
                // console.log(  res )

            },err=>{
                console.log(err)
            })
        }
    },
    components:{

    },
    mounted(){
        this.getData();
    }

}
</script>

<style lang="scss" scoped>
    .v-Btn{
        // width: 30px;
        display: inline-block;
        height: 20px;
        border-radius: 8px;
        border: 1px solid rgb(77, 53, 53);
        background: rgb(32, 167, 144);
        color: #fff;
        padding: 3px;
        text-align: center;
    }
</style>