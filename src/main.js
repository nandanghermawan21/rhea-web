import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import axios from 'axios';


var VueCookie = require('vue-cookie');
Vue.use(VueCookie);

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://127.0.0.1:8000/api/"

Vue.config.productionTip = false

new Vue({
  axios,
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
