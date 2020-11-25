<template>
  <div class="relative">
    <VueSlickCarousel v-bind="options">
      <div v-for="(item, i) in images" :key="i" class="slider-slide relative">
        <img class="w-full h-full" draggable="false" :src="`${item.src}-${i}`" alt="">
        <div class="bg-gray-900 bg-opacity-30 absolute top-0 w-full h-full flex flex-col justify-center items-center">
          <div class="text-white font-bold text-3xl text-center">The Event 2021 will started!</div>
          <a href="#" class="py-3 px-6 rounded-xl bg-green-700 hover:bg-white hover:text-green-700 hover:border-transparent transition bg-opacity-80 border border-green-100 mt-4 text-green-100 font-bold uppercase">Get now</a>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
export default {
  data () {
    return {
      options: {
        centerMode: true,
        centerPadding: '20%',
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              arrows: false,
              centerPadding: '0'
            }
          }
        ]
      },
      images: [
        {
          src: 'https://placeimg.com/640/480/people'
        },
        {
          src: 'https://placeimg.com/640/480/people'
        },
        {
          src: 'https://placeimg.com/640/480/people'
        },
        {
          src: 'https://placeimg.com/640/480/people'
        },
        {
          src: 'https://placeimg.com/640/480/people'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
  .slider-slide {
    height: 400px;
    max-height: 400px;
    margin: 0;

    &:focus {
      outline: none;
    }

    img {
      object-fit: cover;
    }
  }
</style>
