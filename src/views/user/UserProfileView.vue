<template>
  <v-container>
    <v-row>
      <!-- Card Section - 3 columns -->
      <v-col cols="3">
        <v-card class="pb-3">
          <v-card-title class="text-center">
            <v-img
                src="https://randomuser.me/api/portraits/men/85.jpg"
                height="150"
                width="150"
                class="rounded-circle mx-auto"
            />
          </v-card-title>

          <v-card-subtitle class="text-center">
            <h3>{{ username }}</h3>
          </v-card-subtitle>

          <v-card-subtitle class="text-center">
            {{ email }}
          </v-card-subtitle>

          <v-card-text>
            <div class="d-flex mt-0 align-center justify-center">
              <v-tooltip
                  location="top"
                  text="Добавить в друзья"
              >
                <template v-slot:activator="{ props }">
                  <v-btn
                      v-bind="props"
                      class="me-1"
                      color="primary"
                  >
                    <v-icon left>
                      <PlusIcon fill="#fff"/>
                    </v-icon>
                    Добавить
                  </v-btn>
                </template>
              </v-tooltip>
              <v-tooltip
                  location="top"
                  text="Управление приватности"
              >
                <template v-slot:activator="{ props }">
                  <v-btn
                      variant="outlined"
                      v-bind="props"
                      color="primary"
                  >
                    <v-icon left>
                      <EyeIcon />
                    </v-icon>
                  </v-btn>
                </template>
              </v-tooltip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- List Section - 9 columns -->
      <v-col cols="9">
        <v-card-title>
          <h3>Мероприятия</h3>
        </v-card-title>

        <EventItem :event="{
  id: 101,
  title: 'Vue 3 Masterclass Webinar',
  description: 'Join us for an in-depth Vue 3 masterclass covering Composition API, best practices, and real-world examples.',
  date: '2025-04-12T18:30:00Z',
  image: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
  category: 'Web Development'
}"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script  setup>
import {ref} from 'vue';
import EventItem from "@/components/User/Events/EventItem.vue";
import {VCheckbox} from "vuetify/components";
import PlusIcon from "@/assets/icons/PlusIcon.vue";
import EyeIcon from "@/assets/icons/EyeIcon.vue";

const username = ref('John Doe');
const email = ref('john@gmail.com');
const eventCount = ref(25);
</script>

<style scoped>
.v-img {
  border-radius: 50%;
  border: 4px solid #fff;
}
</style>
