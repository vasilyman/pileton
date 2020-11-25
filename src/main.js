import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elements from '@/components/elements'
import VueSlickCarousel from 'vue-slick-carousel'

Vue.config.productionTip = false

// register Elements components as global
Vue.use(elements)

// imported components
Vue.component('VueSlickCarousel', VueSlickCarousel)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
