<template>
  <nav class="bg-gray-900 text-white h-16 flex">
    <div class="flex justify-between h-full w-full md:w-auto">
      <a href="#" @click.prevent="menuToggle = !menuToggle" class="flex px-6 text-2xl transition duration-300 hover:bg-gray-800">
        <i class="my-auto fas fa-bars"></i>
      </a>
      <a href="#" class="flex mr-6">
        <span class="text-2xl font-bold my-auto">Pileton</span>
        <!-- <img class="h-10 my-auto" src="https://staging.pileton.lv/image/logo.jpg" alt="logo" srcset=""> -->
      </a>
    </div>
    <ul class="hidden md:flex">
      <li v-for="(item, i) in itemsDummy" :key="i" class="flex">
        <a :href="item.link" class="transition duration-300 flex px-3 hover:bg-gray-800 hover:text-red-500"><span class="my-auto">{{ item.title }}</span></a>
      </li>
    </ul>
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
