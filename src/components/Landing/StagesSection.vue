<template>
  <v-container class="py-16">
    <v-row justify="center" class="mb-10">
      <v-col cols="12" md="8" class="text-center">
        <h2 class="text-h4 font-weight-bold mb-2">Этапы Конкурса</h2>
        <p class="text-subtitle-1 text-grey-darken-1">
          Ознакомьтесь с ключевыми этапами конкурса и важными сроками.
        </p>
      </v-col>
    </v-row>

    <v-row justify="center" align="stretch" class="text-center">
      <v-col cols="12" md="6" lg="3">
        <v-card flat class="pa-6 elevation-1 rounded-lg">
          <v-icon size="48" color="primary" class="mb-4">mdi-school</v-icon>
          <h3 class="text-h6 font-weight-bold mb-2">Регистрация учреждений ВО и СПО</h3>
          <p class="text-body-2 text-grey-darken-2">
            Онлайн регистрация на платформе Braim.
          </p>
          <p class="text-body-2 text-grey-darken-2 font-weight-bold">Текущий этап</p>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" lg="3">
        <v-card flat class="pa-6 elevation-1 rounded-lg">
          <v-icon size="48" color="success" class="mb-4">mdi-account-group</v-icon>
          <h3 class="text-h6 font-weight-bold mb-2">Регистрация участников</h3>
          <p class="text-body-2 text-grey-darken-2">
            Онлайн. Точные сроки регистрации смотрите на странице конкурсов.
          </p>
          <p class="text-body-2 text-grey-darken-2 font-weight-bold">Будущий этап</p>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" lg="3">
        <v-card flat class="pa-6 elevation-1 rounded-lg">
          <v-icon size="48" color="info" class="mb-4">mdi-trophy-award</v-icon>
          <h3 class="text-h6 font-weight-bold mb-2">Отборочные этапы</h3>
          <p class="text-body-2 text-grey-darken-2">
            Онлайн. Точные сроки проведения отборочных этапов смотрите на странице конкурсов.
          </p>
          <p class="text-body-2 text-grey-darken-2 font-weight-bold">Будущий этап</p>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" lg="3">
        <v-card flat class="pa-6 elevation-1 rounded-lg">
          <v-icon size="48" color="warning" class="mb-4">mdi-calendar-check</v-icon>
          <h3 class="text-h6 font-weight-bold mb-2">Финал</h3>
          <p class="text-body-2 text-grey-darken-2">
            Очно/Онлайн. Город проведения будет объявлен в 2025 году.
          </p>
          <p class="text-body-2 text-grey-darken-2 font-weight-bold">Будущий этап</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { VContainer, VRow, VCol, VCard, VIcon } from "vuetify/components";
</script>
