import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elements from '@/components/elements'

Vue.config.productionTip = false

// register Elements components as global
Vue.use(elements)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
