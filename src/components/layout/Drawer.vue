<template>
  <div class="">
    <transition name="fade">
      <div v-if="value" @click.stop="$emit('input', false)" class="fixed top-0 left-0 w-full h-screen bg-black opacity-50 "></div>
    </transition>
    <transition name="slide-left">
      <div v-if="value" class="fixed top-0 left-0 bg-gray-800 text-white h-full text-white " style="width:300px;">iuhih</div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    value: Boolean
  }
}
</script>
