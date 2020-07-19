import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import "vue-material/dist/vue-material.min.css";
// import "vue-material/dist/theme/default.css";

Vue.use(router)
// Vue.use(axios)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Vue.use(Bootstrap)
Vue.config.productionTip = false

new Vue({
  // axios,
  router,
  render: h => h(App),
}).$mount('#app')
