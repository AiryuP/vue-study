<template>
    <div id="fetcJson">
        <h2>{{ msg }}</h2>
        {{ text }}
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg: "fetch-json请求数据组件",
            text:'使用方式和axios一样，vue-resource够用，毕竟官方'
        }
    }
}
</script>

<style lang="scss">
    
</style>