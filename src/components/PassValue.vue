<template>
    <div id="PassValue">
        <h2>{{ msg }}</h2>
        <!-- <p>{{ text }}</p> -->
        <p style="color:skyblue">{{ title }}</p>
        <div>
            <h3>父给子传，两步走：</h3>
            <p>1.首先在父组件调用中绑定一个属性，</p>
            <p>2、在子组件中，props（数组[]）中写入属性，然后再子组件中调用</p>
                <pre>
                    props的两种接收方法：
                    porps:['title']
                    props:{
                        'title': String  //目的为了验证父组件传值的合法性
                    }
                </pre>
            <p>注意，两个组件的值得名字尽量不能相同，不然会渲染父组件传过来的值</p>
            <pre>
                <p>除了能传值之外，还能传方法</p>
            </pre>
            <button @click="haha(1111)">点击运行父组件方法</button>

            <div>
                <p>还可以直接把整个 父组件都传过来（数据、方法）</p>
                <p>方法和前面是一样的，:father="this"</p>
                <p>使用方法也是一样的，在子组件中是用 this.father.属性/方法</p>
            </div>
            <hr>
            <h3>父组件主动获取子组件的数据和方法</h3>
                <div>
                    <pre>
                        1.调用子组件的时候定义一个ref
                            ex: 
                                <Header ref="header" ></Header>
                        2.在父组件中通过
                            this.refs.header.属性
                            this.refs.header.方法
                    </pre>

                </div>

            <hr>
            <h3>子组件主动获取父组件的数据和方法</h3>

            <pre>
                this.$parent.数据
                this.$parent.方法
            </pre>
                <button @click="getFaData">获取父组件数据和方法</button>



            <hr>
            <h3>非父子组件之间传值</h3>
                <i>与FetchJson组件</i>

                <pre>

                    1.首先在model中新建一个JS文件，引入Vue，同时新建一个Vue实例并暴露出去。
                        e.g 
                        import Vue from 'vue';
                        var kongbai = new Vue();
                        export default kongbai;
                    2.然后在组件1中引入空白Vue实例，使用  空白实例.$emit方法
                            e.g
                            //引入空白实例
                                import kongbai from '../model/kongbai.js';
                            //组件1中使用
                            fangfa(){
                                kongbai.$emit( 'name',data )
                                //name可以根据需求随意取，为了监听
                                //data是传输的数据
                            }
                    3.在组件2中接收来自组件1的数据
                        e.g 
                        //首先也需要先引入空白实例，使两个组件有一个沟通的桥梁
                             import kongbai from '../model/kongbai.js';
                        //然后可以在  生命周期 函数中监听组件发送过来的数据
                        mounted(){
                            // on 方法？存在疑问
                                //解疑
                                    $emit $on $off  分发，监听，取消监听
                            kongbai.$on( 'name',function( data ){
                                //data 是组件1 中传的数据，可以在这里做处理

                                console.log( data )
                                
                            } )
                        }

                </pre>

                <button @click="emitData()" >给另一个组件广播数据</button>


            <hr>
        </div>
    </div>
</template>

<script>

    import VUeEvent from '../model/VueEvent.js';


export default {
    data(){
        return {
            msg: "父子组件传值",
            text: "",
            son: "我是子组件"
            
        }
    },
    methods: {
        // 方法
        run(){
            console.log("我是子组件的run方法")
        },
        getFaData(){
            console.log( this.$parent.title );
            this.$parent.fatFun("子组件主动获取父组件中的方法");
        },
        emitData(){
            VUeEvent.$emit('toFetchJson',this.msg)
        }
    },
    components:{
        // 引入子组件
    },
    // 生命函数
    mounted(){
        // 组件加载完成调用
    },
    props:['title','haha']
}
</script>
<style lang="scss" scoped >
    i{
        color: rgb(105, 212, 128);
    }
</style>