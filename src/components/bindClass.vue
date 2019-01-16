<template>
    <div id="app01">
        {{ msg }}
        
    </div>
</template>

<script>
export default {
    name: 'bindClass',
    data(){
        return{
            msg: '绑定属性，绑定class，绑定style',
            myStory: '我的两个'
        }
    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
    
</style>