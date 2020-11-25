<template>
  <nav class="h-16 flex justify-between shadow-md bg-white">
    <div class="flex">
      <div class="flex justify-between h-full w-full md:w-auto">
        <a href="#" @click.prevent="menuToggle = !menuToggle" class="flex px-6 text-2xl transition duration-300 hover:bg-gray-100">
          <i class="my-auto fas fa-bars"></i>
        </a>
        <a href="#" class="flex mr-6">
          <!-- <span class="text-2xl font-bold my-auto">Pileton</span> -->
          <img class="h-10 my-auto" src="https://staging.pileton.lv/image/logo.jpg" alt="logo" srcset="">
        </a>
      </div>
      <ul class="hidden md:flex">
        <li v-for="(item, i) in itemsDummy" :key="i" class="flex">
          <a :href="item.link" class="transition duration-300 flex px-3 hover:bg-gray-100"><span class="my-auto">{{ item.title }}</span></a>
        </li>
      </ul>
    </div>
    <div class="hidden md:flex">
      <div class="relative mr-2 flex h-full" @mouseenter="userMenu = true"  @mouseleave="userMenu = false">
        <a href="#" class="flex w-10 h-10 bg-gray-100 rounded-full my-auto justify-center items-center">
          <i class="fas fa-user"></i>
        </a>
        <transition name="slide-top">
          <div v-if="userMenu" class="absolute top-0 right-0 pt-16">
            <div class="bg-white rounded-xl w-max border border-gray-300 py-3 mt-3">
              <ul class="space-y-2">
                <li class="hover:bg-gray-200 py-2 px-4 transition">Login</li>
                <li class="hover:bg-gray-200 py-2 px-4 transition">Rgister</li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
      <div class="relative mr-2 flex h-full mr-4">
        <a href="#" @click.prevent="searchMenu = !searchMenu" class="flex w-10 h-10 bg-gray-100 rounded-full my-auto justify-center items-center">
          <i class="fas fa-search"></i>
        </a>
      </div>
      <!-- <input class="y-3 my-auto rounded-l-xl text-gray-900 focus:ring-transparent focus:border-gray-900" type="text" name="" id="" placeholder="Search">
      <button class="y-3 border border-gray-900 my-auto mr-3 rounded-r-xl bg-gray-900 py-2 px-4 text-white">
        <i class="fas fa-search"></i>
      </button> -->
    </div>
    <transition name="slide-top">
      <div v-if="searchMenu" class="absolute mt-3 top-full w-full px-3 flex">
        <input class="y-3 flex-1 my-auto rounded-l-xl text-gray-900 focus:ring-transparent focus:border-gray-900" type="text" name="" id="" placeholder="Search">
        <button class="y-3 border border-gray-900 my-auto mr-3 rounded-r-xl bg-gray-900 py-2 px-4 text-white">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </transition>
  </nav>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => ([])
    },
    menu: Boolean
  },
  data () {
    return {
      itemsDummy: [
        {
          title: 'Концерты',
          link: '#'
        },
        {
          title: 'Шоу',
          link: '#'
        },
        {
          title: 'Театр',
          link: '#'
        }
      ],
      userMenu: false,
      searchMenu: false
    }
  },
  computed: {
    menuToggle: {
      get () {
        return this.menu
      },
      set (val) {
        this.$emit('update:menu', val)
      }
    }
  }
}
</script>
