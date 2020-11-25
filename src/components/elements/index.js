import Card from './Card.vue'
import Slider from './Slider.vue'

export default {
  install (Vue, options) {
    // global components
    Vue.component('Card', Card)
    Vue.component('Slider', Slider)
  }
}
