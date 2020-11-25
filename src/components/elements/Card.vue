<template>
  <div class="rounded-2xl shadow-lg hover:shadow-xl transtition-all duration-200 w-full ev-card flex flex-col">
    <div class="rounded-t-2xl h-2/6 w-full overflow-hidden ev-card-img">
      <img class="w-full" draggable="false" :src="image" alt="">
    </div>
    <div class="flex-1 w-full p-4 flex flex-col justify-between">
      <div class="mb-3">
        <div class="text-xl font-bold">{{ title }}</div>
        <div class="text-gray-500 text-sm">Other</div>
      </div>
      <div class="text-sm -mb-2">
        <div v-for="(item, i) in Array(3)" :key="i" class="text-gray-500 flex items-center mb-2">
          <i class="fas fa-user mr-3"></i>
          <span class="flex-1 truncate">26 November 13:00 - 15:00</span>
        </div>
      </div>
    </div>
    <a href="#" class="text-center px-4 py-3 bg-green-500 rounded-b-2xl text-white font-bold">Buy ticket</a>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    image: String
  }
}
</script>
<style lang="scss">
  .ev-card {
    height: 330px;
  }
  .ev-card-img img {
    margin-top: -25%;
  }
</style>
