<template>
  <v-container fluid class="pa-0" style="height: 75vh">
    <v-row no-gutters>
      <v-col cols="4" class="pa-4" style="overflow-y: auto; height: 75vh">
        <EventItem
            v-for="event in events"
            :key="event.id"
            :event="event"
            @hover="handleEventHover"
        />
      </v-col>

      <v-col cols="8" style="height: 75vh">
        <l-map
            v-model:zoom="zoom"
            v-model:center="center"
            style="height: 100%; background: #333333"
            :useGlobalLeaflet="false"
        >
          <l-tile-layer
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
              layer-type="base"
              name="Stadia Maps Basemap"
          />
          <l-marker
              v-for="event in events"
              :key="event.id"
              :lat-lng="[event.latitude, event.longitude]"
              :ref="(el) => setMarkerRef(event.id, el)"
          >
            <l-tooltip
                :options="{
                permanent: hoveredEventId === event.id,
                direction: 'top',
                className: 'custom-tooltip',
                offset: [0, -20]
              }"
            >
              <div v-html="getTooltipContent(event)"></div>
            </l-tooltip>
          </l-marker>
        </l-map>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { LMap, LTileLayer, LMarker, LTooltip } from '@vue-leaflet/vue-leaflet'
import EventItem from './EventItem.vue'

interface EventItemExtended {
  id: string
  title: string
  description: string
  date: string | Date
  image?: string
  category?: string
  latitude: number
  longitude: number
}

const zoom = ref(5)
const center = ref<[number, number]>([40.1792, 44.4991])
const hoveredEventId = ref<string | null>(null)
const markerRefs = ref<Record<string, typeof LMarker | null>>({})

const setMarkerRef = (id: string, el: any) => {
  markerRefs.value[id] = el
}

const getTooltipContent = (event: EventItemExtended) => {
  const date = new Date(event.date)
  const formattedDate = date.toLocaleString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  return `
    <div style="max-width: 200px">
      <div style="font-weight: bold; margin-bottom: 4px;">${event.title}</div>
      <div style="font-size: 0.8em; color: #666; margin-bottom: 6px;">${formattedDate}</div>
      ${event.image ? `<img src="${event.image}" style="max-width: 100%; max-height: 80px; margin-bottom: 6px; border-radius: 4px;">` : ''}
      ${event.category ? `<div style="margin-top: 6px;"><span style="padding: 2px 6px; background: #f0f0f0; border-radius: 12px; font-size: 0.8em;">${event.category}</span></div>` : ''}
    </div>
  `
}

const getRandomLatLng = (): [number, number] => {
  const lat = 40 + Math.random() * 1.5
  const lng = 44 + Math.random() * 1.5
  return [lat, lng]
}

const events = ref<EventItemExtended[]>([
  {
    id: "101",
    title: 'Vue 3 Masterclass Webinar',
    description: 'Join us for an in-depth Vue 3 masterclass covering Composition API, best practices, and real-world examples.',
    date: '2025-04-12T18:30:00Z',
    image: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
    category: 'Web Development',
    latitude: getRandomLatLng()[0],
    longitude: getRandomLatLng()[1],
  },
  ...Array.from({ length: 4 }, (_, i) => ({
    id: (102 + i).toString(),
    title: `Random Event ${i + 1}`,
    description: `Description for event ${i + 1}`,
    date: new Date(),
    category: 'General',
    latitude: getRandomLatLng()[0],
    longitude: getRandomLatLng()[1],
    image: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
  })),
])

const handleEventHover = (id: string | null) => {
  if (!id || id === hoveredEventId.value) {
    return;
  }

  hoveredEventId.value = id;

  // Close all hover tooltips first
  Object.entries(markerRefs.value).forEach(([markerId, marker]) => {
    if (marker?.leafletObject && markerId !== hoveredEventId.value) {
      marker.leafletObject.closeTooltip();
    }
  });

  if (id) {
    const event = events.value.find(e => e.id === id);
    if (event) {
      const marker = markerRefs.value[id]?.leafletObject;
      if (marker) {
        marker.openTooltip();
      }
      center.value = [event.latitude, event.longitude];
      zoom.value = 12;
    }
  }
}
</script>

<style>
.custom-tooltip {
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  padding: 8px 10px;
}
</style>
