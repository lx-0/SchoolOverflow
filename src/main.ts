import Amplify from 'aws-amplify';
import App from "./App.vue";
import Vue from "vue";
import aws_exports from './aws-exports'
import { components } from 'aws-amplify-vue';
import router from "./router";

Vue.config.productionTip = false;

Amplify.configure(aws_exports)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

/*
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: {
    App,
    ...components
  }
})
*/
