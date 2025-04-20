<script setup >
import EventItem from "@/components/User/Events/EventItem.vue";
import {useRouter} from "vue-router";

const router = useRouter();

const handleCreateEventRedirect = () => {
  router.push({name: "UserEventCreate"});
}
</script>

<template>
  <div class="d-flex mb-3 align-center justify-end">
    <v-btn
        color="primary"
        @click="handleCreateEventRedirect"
    >
      Создать мероприятие
    </v-btn>
  </div>
  <EventItem :event="{
  id: 101,
  title: 'Vue 3 Masterclass Webinar',
  description: 'Join us for an in-depth Vue 3 masterclass covering Composition API, best practices, and real-world examples.',
  date: '2025-04-12T18:30:00Z',
  image: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
  category: 'Web Development'
}" />
  <EventItem :event="{
  id: 101,
  title: 'Vue 3 Masterclass Webinar',
  description: 'Join us for an in-depth Vue 3 masterclass covering Composition API, best practices, and real-world examples.',
  date: '2025-04-12T18:30:00Z',
  image: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
  category: 'Web Development'
}" />
  <EventItem :event="{
  id: 101,
  title: 'Vue 3 Masterclass Webinar',
  description: 'Join us for an in-depth Vue 3 masterclass covering Composition API, best practices, and real-world examples.',
  date: '2025-04-12T18:30:00Z',
  image: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
  category: 'Web Development'
}" />
  <EventItem :event="{
  id: 101,
  title: 'Vue 3 Masterclass Webinar',
  description: 'Join us for an in-depth Vue 3 masterclass covering Composition API, best practices, and real-world examples.',
  date: '2025-04-12T18:30:00Z',
  image: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
  category: 'Web Development'
}" />
  <EventItem :event="{
  id: 101,
  title: 'Vue 3 Masterclass Webinar',
  description: 'Join us for an in-depth Vue 3 masterclass covering Composition API, best practices, and real-world examples.',
  date: '2025-04-12T18:30:00Z',
  image: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
  category: 'Web Development'
}" />
  <EventItem :event="{
  id: 101,
  title: 'Vue 3 Masterclass Webinar',
  description: 'Join us for an in-depth Vue 3 masterclass covering Composition API, best practices, and real-world examples.',
  date: '2025-04-12T18:30:00Z',
  image: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
  category: 'Web Development'
}" />
  <EventItem :event="{
  id: 101,
  title: 'Vue 3 Masterclass Webinar',
  description: 'Join us for an in-depth Vue 3 masterclass covering Composition API, best practices, and real-world examples.',
  date: '2025-04-12T18:30:00Z',
  image: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
  category: 'Web Development'
}" />
</template>

<style scoped lang="scss">

</style>
