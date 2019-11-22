import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from '../services/db';

// db 

Vue.config.productionTip = false

Vue.use(firebase)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
