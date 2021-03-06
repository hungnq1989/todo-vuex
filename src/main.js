// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import store from './store'

/* eslint-disable no-new */
new Vue({
  store, // inject store to all children
  el: '#app',
  template: '<App/>',
  components: { App }
})
