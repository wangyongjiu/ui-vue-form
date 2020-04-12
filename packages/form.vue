<template>
    <div class="hm-form">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'HmForm',
    props:{
        model:{//必须传model属性，收集表单数据
            type:Object,
            required:true
        },
        labelWidth:{//控制表单整体宽度
            type:String,
            default:'80px'
        }
    },
    provide(){
        return {
            Form:this
        }
    }
}
</script>
<style lang="scss">

</style>