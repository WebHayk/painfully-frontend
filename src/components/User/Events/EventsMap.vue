<template>
  <section class="events-map d-flex align-center" id="Мероприятия">
    <div class="events-map__list">
      <EventItem
          v-for="event in events"
          :key="event.id"
          :event="event"
          @hover="handleEventHover"
      />
    </div>

    <div class="events-map__widget">
      <l-map
          v-model:zoom="zoom"
          v-model:center="center"
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
    </div>
  </section>
</template>

<script setup>
import {ref} from "vue";
import {LMap, LTileLayer, LMarker, LTooltip} from "@vue-leaflet/vue-leaflet";
import EventItem from "./EventItem.vue";

const zoom = ref(5);
const center = ref([40.1792, 44.4991]);
const hoveredEventId = ref(null);
const markerRefs = ref({});

const setMarkerRef = (id, element) => {
  markerRefs.value[id] = element;
}

const getTooltipContent = (event) => {
  const date = new Date(event.date)
  const formattedDate = date.toLocaleString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  return `
    <div style="min-width: 150px">
      <div style="font-weight: bold; margin-bottom: 4px; white-space: pre-wrap">${event.title}</div>
      <div style="font-size: 0.8em; color: #666; margin-bottom: 6px;">${formattedDate}</div>
      ${event.image ? `<img src="${event.image}" style="max-width: 100%; max-height: 80px; margin-bottom: 6px; border-radius: 4px;">` : ''}
      ${event.category ? `<div style="margin-top: 6px;"><span style="padding: 2px 6px; background: #f0f0f0; border-radius: 12px; font-size: 0.8em;">${event.category}</span></div>` : ''}
    </div>
  `
}

const getRandomLatLng = () => {
  const lat = 40 + Math.random() * 1.5
  const lng = 44 + Math.random() * 1.5
  return [lat, lng]
}

const events = ref([
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
  {
    id: "102",
    title: 'React Native: Building Cross-Platform Apps',
    description: 'Learn how to build high-performance mobile applications using React Native and modern UI frameworks.',
    date: '2025-05-05T17:00:00Z',
    image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    category: 'Mobile Development',
    latitude: getRandomLatLng()[0],
    longitude: getRandomLatLng()[1],
  },
  {
    id: "103",
    title: 'Node.js Backend Architecture Workshop',
    description: 'Dive deep into scalable backend patterns using Node.js, Express, and microservices architecture.',
    date: '2025-05-15T15:00:00Z',
    image: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
    category: 'Backend Development',
    latitude: getRandomLatLng()[0],
    longitude: getRandomLatLng()[1],
  },
  {
    id: "104",
    title: 'Mastering Python for Data Science',
    description: 'A hands-on session focused on using Python for data analysis, visualization, and machine learning.',
    date: '2025-05-22T13:30:00Z',
    image: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
    category: 'Data Science',
    latitude: getRandomLatLng()[0],
    longitude: getRandomLatLng()[1],
  },
  {
    id: "105",
    title: 'Rust for Systems Programming',
    description: 'Explore Rust language fundamentals, memory safety, and building performant system-level applications.',
    date: '2025-06-01T16:00:00Z',
    image: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
    category: 'Systems Programming',
    latitude: getRandomLatLng()[0],
    longitude: getRandomLatLng()[1],
  }
])


const handleEventHover = (id) => {
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

<style scoped lang="scss">
.events-map {
  height: 100%;
  max-height: 75vh;

  &__list {
    padding: 15px;
    height: 75vh;
    overflow-y: auto;
  }

  &__widget {
    width: 100%;
    height: 75vh;
    background: #333333;
  }

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    max-height: none;

    &__widget {
      height: 50vh;
    }

    &__list {
      width: 100%;
      display: flex;
      gap: 15px;
      height: auto;

      > div {
        min-width: 75%;
      }
    }
  }
}
</style>
