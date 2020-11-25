<template>
  <div>
    <TopBar :menu.sync="menuToggle" class="fixed top-0 w-full" />
    <router-view class="min-h-screen pt-16 sm:pb-12"></router-view>
    <BottomBar class="fixed bottom-0 h-12 sm:hidden"/>
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
      menuToggle: false
    }
  }
}
</script>
