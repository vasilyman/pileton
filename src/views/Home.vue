<template>
  <main class="bg-gray-50">
    <section>
      <Slider />
    </section>
    <section class="container mx-auto px-4 pb-8">
      <h1 class="text-xl font-bold my-8">Афиша концертов Москвы на 2020</h1>
      <div class="flex flex-col lg:flex-row">
        <div class="flex-1 lg:mr-4">
          <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            <Card v-for="(event, i) in events" :key="i" :title="event.title" :image="`${event.image}?${i}`" />
          </div>
        </div>
        <div class="w-full lg:w-1/4 lg:ml-4 mt-4 lg:mt-0">
          <Filters />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import events from './dummy.json'
import Filters from '@/components/Filters.vue'

export default {
  components: {
    Filters
  },
  data () {
    return {
      events: []
    }
  },
  created () {
    this.getEvents()
      .then((data) => {
        console.log(data)
      })
  },
  methods: {
    async getEvents () {
      // call API
      return await new Promise((resolve) => setTimeout(() => resolve(), 100))
        .then(() => {
          this.events = events.data.map((el) => ({
            image: 'https://placeimg.com/640/480/people', /** el.media?.[0].url */
            title: el.place.name
          }))
          console.log('succesfull')
          return events.data
        })
    }
  }
}
</script>
