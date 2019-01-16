<template>
    <div id="v-todolist">
        {{  msg }}
        <h2>
            {{ msg }}
        </h2>
    </div>
</template>

<script>
export default {
    // 组件引入
    data(){
       return {
            msg: '这是一个todolist组件',
       }
    },
    components:{
        // 组件挂载
    },
    methods:{
        // 定义方法

    }
}
</script>

<style lang="scss" scoped >
    h2{
        color: red;
    }
</style>