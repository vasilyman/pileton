<template>
  <nav class="h-16 flex justify-between shadow-md">
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
    <div class="flex">
      <input class="y-3 my-auto rounded-l-xl text-gray-900 focus:ring-transparent focus:border-gray-900" type="text" name="" id="" placeholder="Search">
      <button class="y-3 border border-gray-900 my-auto mr-3 rounded-r-xl bg-gray-900 py-2 px-4 text-white">
        <i class="fas fa-search"></i>
      </button>
    </div>
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
          title: 'ssss',
          link: '#'
        },
        {
          title: 'yyyy',
          link: '#'
        },
        {
          title: 'uuuu',
          link: '#'
        }
      ]
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
