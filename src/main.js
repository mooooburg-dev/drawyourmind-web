import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Paginate from 'vuejs-paginate'

Vue.use(require('vue-moment')) // Vus.use 한줄 더 심플하게~

Vue.use(router)
// Vue.use(axios)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.component('paginate', Paginate)

// Vue.use(Bootstrap)
Vue.config.productionTip = false

new Vue({
  // axios,
  router,
  render: (h) => h(App),
}).$mount('#app')
