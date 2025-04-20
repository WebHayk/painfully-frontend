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
    <path d="M7.00003 17L17 7" :stroke="fill" stroke-width="2" stroke-linecap="round"/>
    <path d="M7.00003 7.00027L17 17.0002" :stroke="fill" stroke-width="2" stroke-linecap="round"/>
  </svg>
</template>
