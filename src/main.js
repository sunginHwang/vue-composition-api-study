import Vue from 'vue'
import App from './App.vue'
import compositionAPi from '@vue/composition-api';
Vue.config.productionTip = false


Vue.use(compositionAPi);

new Vue({
  render: h => h(App),
}).$mount('#app')
