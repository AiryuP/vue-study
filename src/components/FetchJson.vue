<template>
    <div id="fetcJson">
        <h2>{{ msg }}</h2>
        {{ text }}
    </div>
</template>

<script>

    import VueEvent from '../model/VueEvent.js';

export default {
    data(){
        return {
            msg: "fetch-json请求数据组件",
            text:'使用方式和axios一样，vue-resource够用，毕竟官方'
        }
    },
    methods:{

    },
    mounted(){
        // 
        VueEvent.$on('toFetchJson',function(data){
            console.log( data )
        })
    }
}
</script>

<style lang="scss">
    
</style>