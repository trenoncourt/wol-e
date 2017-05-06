// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router'
import i18n from './i18n'
import App from './App'

Vue.config.productionTip = false

Vue.use(VueResource)
// eslint-disable-next-line no-undef
Vue.http.options.root = __API_URL__

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App }
})
