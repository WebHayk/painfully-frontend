<template>
  <v-container class="py-6">
    <v-card class="rounded-xl" elevation="2">
      <v-img
          v-if="event.image"
          :src="event.image"
          height="300"
          cover
          class="rounded-t-xl"
          alt="Event image"
      />

      <v-card-title class="text-h5 font-weight-bold">
        {{ event.title }}
      </v-card-title>

      <v-card-subtitle class="text-subtitle-2 text-grey-darken-1">
        {{ formattedDate }}
      </v-card-subtitle>

      <v-card-text class="text-body-1 py-4">
        {{ event.description }}
      </v-card-text>

      <v-card-actions class="px-4 pb-4 d-flex flex-wrap">
        <v-chip
            v-if="event.category"
            color="primary"
            variant="outlined"
            class="me-4 mb-2"
        >
          {{ event.category }}
        </v-chip>

        <v-spacer />

        <v-btn
            variant="flat"
            color="success"
            class="me-2 mb-2"
            @click="onJoin"
            :loading="joining"
        >
          Присоединиться
        </v-btn>

        <v-btn
            color="default"
            variant="tonal"
            class="mb-2"
            @click="goBack"
        >
          Назад
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { computed, defineProps, ref } from 'vue'

interface EventItem {
  id: number
  title: string
  description: string
  date: string | Date
  image?: string
  category?: string
}

const props = defineProps<{
  event: EventItem
}>()

const router = useRouter()
const joining = ref(false)

const formattedDate = computed(() => {
  const date = new Date(props.event.date)
  return date.toLocaleString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
})

const goBack = () => {
  router.push({name: "UserEvents"});
}

const onJoin = async () => {
  try {
    joining.value = true
    // TODO: Replace with actual join logic (API call or emit event)
    await new Promise(resolve => setTimeout(resolve, 1000)) // Fake delay
    alert('Вы успешно присоединились к мероприятию!')
  } catch (error) {
    console.error('Join failed', error)
  } finally {
    joining.value = false
  }
}
</script>
