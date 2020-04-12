<template>
    <!-- 使用transition包裹一个元素后，这个元素在显示隐藏就会自动添加一些类名 -->
    <transition name="dialong-fade">
        <!-- .self修饰符代表只有点击自己才触发事件，点击子元素不触发 -->
        <div class="hm-dialong_wrapper" v-show="visible" @click.self="handClose">
            <div class="hm-dialong" :style="{width:width,marginTop:top}">
                <div class="hm-dialong_header">
                    <!-- 有名字的插槽 -->
                    <slot name="title">
                        <span class="hm-dialong_title">{{title}}</span>
                    </slot>
                    <button class="hm-dialong_headerbtn" @click="handClose">
                        <i class="hm-icon-close"></i>
                    </button>
                </div>
                <div class="hm-dialong_body">
                    <!-- 默认插槽 -->
                    <slot></slot>
                </div>
                <!-- $slots.footer 是slot插槽传的footer值，如果传，就显示这个div标签，不传直接就省掉这个div标签 -->
                <div class="hm-dialong_footer" v-if="$slots.footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </transition>
    
</template>
<script>
export default {
    name:'HmDialong',
    props:{
        title:{
            type:String,
            default:'提示'
        },
        width:{
            type:String,
            default:'30%'
        },
        top:{
            type:String,
            default:'15vh'
        },
        visible:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        handClose(){
            // false是传的值
            this.$emit('update:visible',false);
        }
    }
}
</script>
<style lang="scss">
//scoped会给当前的组件的模板中的所有的元素都添加一个随记的属性
//scoped会给当前组件中所有的样式添加一个对应的属性选择器
    .hm-dialong_wrapper{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: auto;
        margin: 0;
        z-index: 2001;
        background-color: rgba(0,0,0,0.5);
        .hm-dialong{
            position: relative;
            margin: 15vh auto 50px;
            background: #fff;
            border-radius: 2px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.3);
            box-sizing: border-box;
            width: 30%;
            &_header{
                padding: 20px 20px 10px;
                .hm-dialong_title{
                    line-height: 24px;
                    font-size: 18px;
                    color: #303133;
                }
                .hm-dialong_headerbtn{
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    padding: 0;
                    background: transparent;
                    border: none;
                    outline: none;
                    cursor: pointer;
                    font-size: 16px;
                    .hm-icon-close{
                        color: #909399;
                        position: absolute;
                        right: 5px;
                        top: 5px;
                        width: 16px;
                        height: 16px;
                        &:after{
                            position: absolute;
                            left: 5px;
                            content: ' ';
                            height: 15px;
                            width: 2px;
                            background-color: #333;
                            transform: rotate(-45deg);
                        }
                        &:before{
                            position: absolute;
                            left: 5px;
                            content: ' ';
                            height: 15px;
                            width: 2px;
                            background-color: #333;
                            transform: rotate(45deg);
                        }
                    }

                }
            }
            &_body{
                padding: 30px 20px;
                color: #606266;
                font-size: 14px;
                word-break: break-all;
            }
            &_footer{
                padding: 10px 20px 20px;
                text-align: right;
                box-sizing: border-box;
                .hm-button:first-child{
                    margin-right: 20px;
                }
            }
        }
    }
    // 动画样式
    .dialong-fade-enter-active{
        animation: fade 0.5s;
    }
    .dialong-fade-leave-active{
        animation: fade 0.5s reverse;
    }
    @keyframes fade{
        0%{
            opacity: 0;
            transform: translateY(-30px);
        }
        100%{
            opacity: 1;
            transform: translateY(0px);
        }
    }
</style>
