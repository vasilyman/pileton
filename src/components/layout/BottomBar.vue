<template>
  <div class="w-full bg-gray-900 text-white flex">
    <ul class="flex w-full">
      <li v-for="(item, i) in itemsDummy" :key="i" class="flex-1 flex">
        <a :href="item.link" class="flex flex-col flex-1 justify-center items-center">
          <i class="fas text-xl" :class="{[`fa-${item.icon}`]: true}"></i>
          <span class="text-xs text-gray-400">{{ item.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    items: Array
  },
  data () {
    return {
      itemsDummy: [
        {
          title: 'Title',
          icon: 'user',
          link: '#'
        },
        {
          title: 'Title',
          icon: 'user',
          link: '#'
        },
        {
          title: 'Title',
          icon: 'user',
          link: '#'
        }
      ]
    }
  }
}
</script>
