import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Amplify from 'aws-amplify'
import '@aws-amplify/ui-vue'
import awsExports from './aws-exports'
import './assets/tailwind.css'

Amplify.configure(awsExports)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
