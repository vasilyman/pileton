<template>
  <div>
    <TopBar :menu.sync="menuToggle" :searchMenu.sync="searchMenu" class="fixed top-0 w-full z-20" />
    <router-view class="min-h-screen pt-16 pb-12 sm:pb-0"></router-view>
    <BottomBar class="fixed bottom-0 h-12 sm:hidden" :searchMenu.sync="searchMenu"/>
    <Drawer v-model="menuToggle" />
  </div>
</template>
<script>
import BottomBar from '@/components/layout/BottomBar.vue'
import Drawer from '@/components/layout/Drawer.vue'
import TopBar from '@/components/layout/TopBar.vue'

export default {
  components: {
    BottomBar,
    TopBar,
    Drawer
  },
  data () {
    return {
      menuToggle: false,
      searchMenu: false
    }
  }
}
</script>
