<template>
  <v-card
      @mouseenter="emit('hover', event.id)"
      @mouseleave="emit('hover', null)"
      class="mb-4 rounded-xl"
      elevation="2"
  >
    <v-list-item>
      <template #prepend>
        <v-avatar size="48">
          <v-img :src="event.image" alt="Event image"/>
        </v-avatar>
      </template>

      <v-list-item-title class="text-h6">
        {{ event.title }}
      </v-list-item-title>

      <v-list-item-subtitle class="text-body-2 text-grey-darken-1">
        {{ formattedDate }}
      </v-list-item-subtitle>

      <template #append>
        <v-tooltip text="Открыть мероприятие">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon @click="onMore">
              <RedirectIcon fill="#93755e"/>
            </v-btn>
          </template>
        </v-tooltip>
      </template>
    </v-list-item>

    <v-card-text class="pt-0 text-body-2 text-grey-darken-2">
      {{ event.description }}
    </v-card-text>

    <v-card-actions>
      <v-chip
          v-if="event.category"
          color="primary"
          variant="outlined"
          class="me-2"
      >
        {{ event.category }}
      </v-chip>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import {computed, defineProps, defineEmits} from "vue";
import RedirectIcon from "@/assets/icons/RedirectIcon.vue";
import {useRouter} from "vue-router";

interface EventItem {
  id: string
  title: string
  description: string
  date: string | Date
  image?: string
  category?: string
}

const props = defineProps<{
  event: EventItem
}>()

const emit = defineEmits<{
  (e: 'hover', id: string | null): void
}>();

const router = useRouter();

const formattedDate = computed(() => {
  const date = new Date(props.event.date)
  return date.toLocaleString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
})

const onMore = () => {
  router.push({name: "UserEventDetail", params: {id: props.event.id }})
}
</script>
