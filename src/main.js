import { defineCustomElement as VueDefineCustomElement, h, createApp, getCurrentInstance } from 'vue';
import { createWebComponent } from 'vue-web-component-wrapper';
import './style.css'
import styles from './style.css?inline';

import App from './App.ce.vue'

const customApp = VueDefineCustomElement(App);
customElements.define('custom-app-one', customApp);


export const pluginsWrapper = {
    install(GivenVue) {
    },
}

createWebComponent({
    rootComponent: App,
    elementName: 'custom-app-two',
    plugins: pluginsWrapper,
    cssFrameworkStyles: styles,
    VueDefineCustomElement,
    h,
    createApp,
    getCurrentInstance
});