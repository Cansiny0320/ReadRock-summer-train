import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

import store from './store';

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');
