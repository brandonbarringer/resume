import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import VueFlex from "vue-flex";
import "vue-flex/dist/vue-flex.css";


Vue.use(VueFlex);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
