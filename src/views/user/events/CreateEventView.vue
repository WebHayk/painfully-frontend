<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import {ref} from "vue";
import EventForm from "@/components/User/Events/EventForm.vue";
import {LMap, LTileLayer} from "@vue-leaflet/vue-leaflet";

let zoom = ref(6)
let center = ref([38, 139.69])
</script>

<!--<l-map ref="map" v-model:zoom="zoom" v-model:center="center" :useGlobalLeaflet="false">-->
<!--<l-tile-layer class="create-event-view" url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"-->
<!--              layer-type="base"-->
<!--              name="Stadia Maps Basemap"></l-tile-layer>-->
<!--</l-map>-->

<template>
  <EventForm />
</template>

<style scoped lang="scss">
</style>
