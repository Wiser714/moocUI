import Vue from 'vue'
import App from './App.vue'

import 'mooc-ui-wiser/dist/css/index.css';
import MUI from 'mooc-ui-wiser';
Vue.use(MUI);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
