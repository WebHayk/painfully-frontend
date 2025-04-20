<template>
  <v-snackbar
      v-model="snackbar.visible"
      :timeout="snackbar.timeout"
      :color="snackbar.color"
      top
      right
      elevation="6"
  >
    {{ snackbar.message }}
  </v-snackbar>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const snackbar = computed(() => store.state.notifications);
</script>
