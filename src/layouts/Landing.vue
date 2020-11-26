<template>
  <div>
    <TopBar :menu.sync="menuToggle" :searchMenu.sync="searchMenu" class="fixed top-0 w-full z-20" />
    <div class="min-h-screen pt-16 pb-12 sm:pb-0">
      <router-view></router-view>
      <Footer />
    </div>
    <BottomBar class="fixed bottom-0 h-12 sm:hidden" :searchMenu.sync="searchMenu"/>
    <Drawer v-model="menuToggle" />
  </div>
</template>
<script>
import BottomBar from '@/components/layout/BottomBar.vue'
import Drawer from '@/components/layout/Drawer.vue'
import TopBar from '@/components/layout/TopBar.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  components: {
    BottomBar,
    TopBar,
    Drawer,
    Footer
  },
  data () {
    return {
      menuToggle: false,
      searchMenu: false
    }
  }
}
</script>
