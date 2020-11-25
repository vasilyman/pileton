<template>
  <div class="rounded-2xl shadow-lg hover:shadow-2xl hover:rounded-br-3xl transtition-all duration-200 w-full ev-card flex flex-col">
    <div class="relative rounded-t-2xl h-2/6 w-full overflow-hidden aspect-3/4 ev-card-img">
      <img class="absolute w-full h-full transition-all duration-300" draggable="false" :src="image" alt="">
      <div class="absolute w-full max-h-full flex flex-wrap p-3">
        <div class="rounded-xl px-3 bg-yellow-500 mr-1 mb-1">Tag 1</div>
        <div class="rounded-xl px-3 bg-green-500 mr-1 mb-1">Tag 2</div>
        <div class="rounded-xl px-3 bg-purple-500 mr-1 mb-1">Tag 3</div>
      </div>
    </div>
    <div class="flex-1 w-full p-5 flex flex-col justify-between relative bg-white ev-card-content">
      <div class="mb-3">
        <div class="text-xl font-bold">{{ title }}</div>
        <div class="text-gray-500 text-sm">Other</div>
      </div>
      <div class="text-sm -mb-2">
        <div class="text-gray-500 flex items-center mb-2">
          <i class="fas fa-calendar-alt mr-3"></i>
          <span class="flex-1 truncate">26 November 13:00 - 15:00</span>
        </div>
        <div class="text-gray-500 flex items-center mb-2">
          <i class="fas fa-map-marker-alt mr-3"></i>
          <span class="flex-1 truncate">Moscow</span>
        </div>
        <div class="text-gray-500 flex items-center mb-2">
          <i class="fas fa-euro-sign mr-3"></i>
          <span class="flex-1 truncate">400</span>
        </div>
      </div>
    </div>
    <a href="#" class="border-t-4 border-dashed border-white relative bg-opacity-90 text-center px-4 pt-3 pb-6 transtition-all duration-200 bg-green-500 rounded-b-2xl hover:rounded-br-3xl text-white font-bold">
      Buy ticket
    </a>
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
    min-height: 330px;
    position: relative;
  }
  .ev-card::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    width: 4rem;
    height: 1rem;
    border-radius: 2rem 2rem 0 0;
    background-color: #000000;
    z-index: 0;
  }
  .ev-card-img img {
    object-fit: cover;
  }
  .ev-card:hover .ev-card-img img {
    transform: scale(1.1);
    filter: brightness(0.9);
  }
  .ev-card-content::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    transform: translateY(-100%);
    left: 25%;
    width: 2rem;
    height: 3rem;
    border-bottom-left-radius: 1.5rem;
    box-shadow: 0 1.5rem 0 white;
  }
  .ev-card-content::after {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    transform: translate(-100%, -100%);
    left: 25%;
    width: 2rem;
    height: 3rem;
    border-bottom-right-radius: 1.5rem;
    box-shadow: 0 1.5rem 0 white;
  }
</style>
