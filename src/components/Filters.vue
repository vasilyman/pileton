<template>
  <div class="rounded-2xl shadow-lg p-4">
    Filters
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>
