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
    <path d="M16 23.5C20.1421 23.5 23.5 20.1421 23.5 16C23.5 11.8579 20.1421 8.5 16 8.5C11.8579 8.5 8.5 11.8579 8.5 16C8.5 20.1421 11.8579 23.5 16 23.5Z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 4.5V3.5" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.86824 7.86824L7.16113 7.16113" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.5 16H3.5" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.86824 24.1317L7.16113 24.8388" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 27.5V28.5" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24.1318 24.1317L24.8389 24.8388" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5 16H28.5" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24.1318 7.86824L24.8389 7.16113" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<style scoped lang="scss">

</style>
