<script setup>
defineProps({
  fill: {
    type: String,
    required: false
  }
});
</script>

<template>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17V7" :stroke="fill" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M7 12L17 12" :stroke="fill" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
</template>

<style scoped lang="scss">

</style>
