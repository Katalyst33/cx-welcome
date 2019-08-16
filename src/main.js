import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue'
import App from './App.vue'
import  NavBar from './components/commons/NavBar'
import  footerArea from './components/commons/footerArea'

import router from './router'
import store from './store'



// Require the main Sass manifest file
// require('./assets/scss/main.scss');

Vue.config.productionTip = false;

Vue.component('NavBar', NavBar);
Vue.component('footerArea', footerArea);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
