import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import Amplify from 'aws-amplify';
import App from './App.vue';
import Vue from 'vue';
import awsExports from './aws-exports';
import router from './router';

Vue.config.productionTip = false;
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Amplify.configure(awsExports);

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app');
