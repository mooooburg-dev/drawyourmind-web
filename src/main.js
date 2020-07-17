import Vue from 'vue'
import App from './App.vue'


import { MdButton, MdField, MdDialog } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

// import 'vue-material/dist/theme/default-dark.css' // This line here

Vue.use(MdButton);
Vue.use(MdField);
Vue.use(MdDialog);

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
