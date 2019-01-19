<template>
    <div id="PassValue">
        <h2>{{ msg }}</h2>
        <!-- <p>{{ text }}</p> -->
        <p style="color:skyblue">{{ title }}</p>
        <div>
            <p>父给子传，两步走：</p>
            <p>1.首先在父组件调用中绑定一个属性，</p>
            <p>2、在子组件中，props（数组[]）中写入属性，然后再子组件中调用</p>
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
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg: "父子组件传值",
            text: "",
            
        }
    },
    methods: {
        // 方法
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
<style lang="scss">
    
</style>