<template>
    <div class="radio-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'HmRadioGroup',
    provide(){//vue 新的语法 provide与inject 配合使用
        return {
            RadioGroup:this
        }
    },
    props:{
        //hm-radio-group 接收到了 value值
        value:null,

    }  
}
</script>
<style lang="scss">

</style>