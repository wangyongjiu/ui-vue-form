<template>
    <div class="hm-input">
        <!-- :value="value"  @input="hanldeInput" 是在实现v-model指令 -->
        <!-- 显示隐藏密码功能逻辑解释： 如果传了showPassword，判断是否需要切换 密码的显示，如果不传，不判断-->
        <input
            class="hm-input__inner"
            :class="{'is-disabled':disabled,'hm-input--suffix': showSuffix}"
            :type="showPassword ? (passwordVisible ? 'text' : 'password') : type" 
            :placeholder="placeholder"
            :name="name"
            :disabled="disabled"
            :value="value"
            @input="handleInput"
        >
        <span class="hm-input__suffix">
            <i class="glyphicon-remove-sign" v-if="clearable && value" @click="clear"></i>
            <i class="glyphicon-eye-open" :class="{'glyphicon-eye-open-active':passwordVisible}" v-if="showPassword" @click="handlePassword"></i>
        </span>
    </div>
</template>
<script>
export default {
    name:'HmInput',
    data(){
        return {
            //用于控制是否显示隐藏密码内容
            passwordVisible:false
        }
    },
    props:{
        placeholder:{//占位内容
            type:String,
            default:'请输入用户名'
        },
        type:{//输入框的类型
            type:String,
            default:'text'
        },
        name:{//表单提交name属性
            type:String,
            default:''
        },
        disabled:{//禁用
            type:Boolean,
            default:false
        },
        // value:null//不进行校验的写法
        value:{
            type:String,
            default:''
        },
        clearable:{//清空内容叉号
            type:Boolean,
            default:false
        },
        showPassword:{//密码框的清空内容眼睛
            type:Boolean,
            default:false
        }
    },
    computed:{
        showSuffix(){
            return this.clearable || this.showPassword
        }
    },
    methods:{
        handleInput(e){
            this.$emit('input',e.target.value);
        },
        clear(){//清空内容
            this.$emit('input','');
        },
        handlePassword(){
            this.passwordVisible = !this.passwordVisible;
        }
    }
}
</script>
<style lang="scss">
    .hm-input{
        width:100px;
        position: relative;
        font-size: 14px;
        display: inline-block;
        .hm-input__inner{
            -webkit-appearance: none;
            background-color: #fff;
            background-image: none;
            border-radius: 4px;
            border: 1px solid #dcdfe6;
            box-sizing: border-box;
            color: #606266;
            display: inline-block;
            font-size: inherit;
            height: 40px;
            line-height: 40px;
            outline: none;
            padding: 0 15px;
            transition: border-color 0.2s cubic-bezier(.645,.045,.355,1);
            width: 100%;
            &:focus{
                outline: none;
                border-color: #409eff;
            }
            //禁用样式
            &.is-disabled{
                background-color: #f5f7fa;
                border-color: #e4e7ed;
                color: #c0c4cc;
                cursor: not-allowed;
            }
        }
        //清楚内容样式
        .hm-input__suffix{
            position: absolute;
            height: 100%;
            right: 10px;
            top: 0;
            line-height: 40px;
            text-align: center;
            color: #c0c4cc;
            transition: all 0.3s;
            z-index: 900;
            i{
                color: #c0c4cc;
                font-size: 14px;
                cursor: pointer;
                transition: color 0.2s cubic-bezier(.645,.045,.355,1);
               
            }
            .glyphicon-eye-open-active{
                color: #409eff;
            }
        }
    }
    .hm-input--suffix{
        .hm-input__inner{
            padding-right: 30px;
        }
    }
   
</style>


