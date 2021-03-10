require('./bootstrap');
window.Vue = require('vue');
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('product', require('./components/website-view/ProductComponent.vue').default);
Vue.component('navbar', require('./components/website-view/SideNavbar.vue').default);

import Swal from 'sweetalert2'
      window.Swal = Swal
      const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
 window.Toast = Toast
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import ZoomOnHover from "vue-zoom-on-hover";
Vue.use(ZoomOnHover);
import {routes} from './routes'
const router = new VueRouter({
    routes:routes,
    scrollBehavior ( to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
    
});

import { Form, HasError, AlertError } from 'vform'
window.Form = Form
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);
import CKEditor from 'ckeditor4-vue'; 
Vue.use( CKEditor );
window.$ = window.jQuery = require('jquery');

import { BootstrapVue } from 'bootstrap-vue'

Vue.use(BootstrapVue)
import InputTag from 'vue-input-tag'

Vue.component('input-tag', InputTag)
import 'bootstrap-vue/dist/bootstrap-vue.css'
const app = new Vue({
  router 
  
}).$mount('#app')



