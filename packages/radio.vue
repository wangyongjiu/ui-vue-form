<template>
    <label class="hm-radio" :class="{'is-checked': label === model}">
        <span class="hm-radio__input">
            <span class="hm-radio__inner"></span>
            <!-- model是自己提供的数字，不能是外界传进来的value值 -->
            <input 
                class="hm-radio__original" 
                type="radio" 
                :value="label"
                :name="name"
                v-model="model"
            >
        </span>
        <span class="hm-radio__label">
            <slot></slot>
            <!-- 如果外面不传内容，默认显示label属性值 -->
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>
<script>
export default {
    name:'HmRadio',
    //需要提供一个计算属性model，查资料了解什么是计算属性
    inject:{ //vue 新语法
        RadioGroup:{
            default:''
        }
    },
    computed:{
        model:{
            get(){
                //return this.RadioGroup.value;
                return this.isGroup ? this.RadioGroup.value : this.value;
            },
            set(value){
                //触发父组件给当前组件注册的input事件
                // this.$emit('input',value)
                this.isGroup ? this.RadioGroup.$emit('input',value) : this.$emit('input',value);
            }
        },
        isGroup(){
            //用于判断radio是否被radioGroup所包裹
            return !!this.RadioGroup//双感叹号是将这个返回值改成Boolean值
        }
    },
    props:{
        label:{
            type:[String,Number,Boolean],//可以选择多种类型
            default:''
        },
        value:null,//引用时用了v-modek 因此组件里面就可以用value来接收，默认的
        name:{
            type:String,
            default:''
        }
    }
}
</script>
<style lang="scss">
.hm-radio{
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    .hm-radio__input{
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;
        .hm-radio__inner{
            border: 1px solid #dcdfe6;
            border-radius: 100%;
            width: 14px;
            height: 14px;
            background-color: #fff;
            position: relative;
            cursor: pointer;
            display: inline-block;
            box-sizing: border-box;
            &:after{
                width: 4px;
                height: 4px;
                border-radius: 100%;
                background-color: #fff;
                content: '';
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%) scale(0);
                transition: transform 0.15s ease-in;
            }
        }
        .hm-radio__original{
            opacity: 0;
            outline: none;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0;
        }
    }
    .hm-radio__label{
        font-size: 14px;
        padding-left: 10px;
    }
}
//选中的样式
.hm-radio.is-checked{
    .hm-radio__input{
        .hm-radio__inner{
            border-color: #409eff;
            background: #409eff;
            &:after{
                transform: translate(-50%,-50%) scale(1);
            }
        }
    }
    .hm-radio__label{
        color: #409eff;
    }
}
</style>
