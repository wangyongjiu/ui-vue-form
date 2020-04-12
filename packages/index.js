//整个包的入口文件

//统一导出、统一颜色选择器组件
import Button from './button'
import Dialong from './dialong'
import Input from './input'
import Switch from './switch'
import Radio from './radio'
import RadioGroup from './radio-group'
import Checkbox from './checkbox'
import CheckboxGroup from './checkbox-group'
import Form from './form'
import FormItem from './form-item'
import './fonts.css'


//存储组件列表
const components = [
    Button,
    Dialong,
    Input,
    Switch,
    Radio,
    RadioGroup,
    Checkbox,
    CheckboxGroup,
    Form,
    FormItem
]
//定义install方法，接收Vue作为参数，如果使用use注册组件，则所有的组件都被注册
const install = function(Vue){
    //遍历注册全局组件
    components.forEach(component=>{
        Vue.component(component.name,component)
    })
}

//判断是否直接引入文件，如果是，就不用调用Vue.use()
if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}

export default install;