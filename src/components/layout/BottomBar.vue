<template>
  <div class="w-full bg-gray-900 text-white flex">
    <ul class="flex w-full">
      <li v-for="(item, i) in itemsDummy" :key="i" class="flex-1 flex">
        <a :href="item.link" @click.prevent="toggle(item.name)" class="flex flex-col flex-1 justify-center items-center">
          <i class="fas mb-1" :class="{[`fa-${item.icon}`]: true}"></i>
          <span class="text-xs text-gray-400">{{ item.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    items: Array,
    searchMenu: Boolean
  },
  data () {
    return {
      itemsDummy: [
        {
          title: 'Profile',
          name: 'user',
          icon: 'user',
          link: '#'
        },
        {
          title: 'Search',
          name: 'search',
          icon: 'search',
          link: '#'
        },
        {
          title: 'Bilets',
          name: 'ticket',
          icon: 'ticket-alt',
          link: '#'
        }
      ]
    }
  },
  methods: {
    toggle (name) {
      if (name === 'search') {
        this.$emit('update:searchMenu', !this.searchMenu)
      }
    }
  }
}
</script>
