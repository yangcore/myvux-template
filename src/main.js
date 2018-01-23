// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('es6-promise').polyfill();
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
const FastClick = require('fastclick');
FastClick.attach(document.body);
Vue.config.productionTip = false;
import { AlertPlugin, ToastPlugin } from 'vux'

Vue.use(AlertPlugin);
Vue.use(ToastPlugin);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
