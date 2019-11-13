import Vue from 'vue';


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import App from './App.vue';

import router from './router';
import store from './store';

library.add(faBars);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
