/**
 * @author MGT360124
 * Date: 18/8/15
 */

import ALert from './components/alert/index';
import Button from "./components/button/index";
import ButtonGroup from "./components/button-group/index";
import Row from "./components/row/index";
import Card from "./components/card/index";
import Col from "./components/col/index";
import Input from "./components/input/index";
const components = [
    ALert,
    Button,
    ButtonGroup,
    Row,
    Card,
    Col,
    Input,
]

const install = function (Vue, options = {}) {
    if (install.installed) return
    components.map(component => Vue.component(component.name, component))

    const M = {};
    Vue.prototype.$M = {
        size: options.size || '',
        zIndex: options.zIndex || 2000
      };
    
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    ALert,
    Button,
    ButtonGroup,
    Row,
    Card,
    Col,
    Input,
}