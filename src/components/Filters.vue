<template>
  <div class="rounded-2xl shadow-lg p-4 bg-white">
    <div class="text-center font-bold mb-8">Фильтры</div>
    <div class="font-bold mb-3">Даты</div>
    <label class="block space-x-3 flex items-center" v-for="(item, i) in filter.dates" :key="i" :for="`dates-${i}`">
      <input class="focus:ring-transparent h-5 w-5 text-gray-900 border-grey-500 rounded" type="checkbox" name="Dct" :id="`dates-${i}`">
      <span>{{item}}</span>
    </label>
    <div class="font-bold mt-8 mb-3">Категории</div>
    <label class="block space-x-3 flex items-center" v-for="(item, ii) in filter.categories" :key="`categories-${ii}`" :for="`categories-${ii}`">
      <input class="focus:ring-transparent h-5 w-5 text-gray-900 border-grey-500 rounded" type="checkbox" name="Dct" :id="`categories-${ii}`">
      <span>{{item}}</span>
    </label>
    <a href="#" class="hover:shadow-xl hover:bg-gray-800 transition duration-300 block text-center rounded-xl bg-gray-900 text-white w-full p-3 mt-8">Применить</a>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      filter: {
        dates: ['Все', 'Сегодня', 'Завтра', 'Выходные', 'Ноябрь'],
        categories: ['Все', 'Концерты', 'Шоу', 'Театр', 'Выставки']
      }
    }
  }
}
</script>
