<script setup>
import {useTheme} from "vuetify/framework";

const props = defineProps({
  fill: {
    type: String,
    required: false
  }
});

const { current } = useTheme();
const color = props.fill || current.value.colors["primary"];
</script>

<template>
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27 14V8" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M30 11H24" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21 3V7" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M23 5H19" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.6959 18.696C25.713 19.1508 23.6471 19.0945 21.6919 18.5324C19.7367 17.9703 17.9563 16.9207 16.5178 15.4822C15.0793 14.0436 14.0297 12.2633 13.4676 10.3081C12.9055 8.35293 12.8492 6.287 13.304 4.30411L13.3039 4.30408C11.2163 4.78564 9.29565 5.81724 7.7414 7.29177C6.18714 8.7663 5.05593 10.63 4.46522 12.6894C3.8745 14.7487 3.84582 16.9287 4.38214 19.0029C4.91846 21.0771 6.00024 22.9699 7.51515 24.4848C9.03007 25.9997 10.9229 27.0815 12.9971 27.6179C15.0713 28.1542 17.2512 28.1255 19.3106 27.5348C21.37 26.9441 23.2337 25.8129 24.7082 24.2586C26.1827 22.7044 27.2143 20.7838 27.6959 18.6962L27.6959 18.696Z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<style scoped lang="scss">

</style>
