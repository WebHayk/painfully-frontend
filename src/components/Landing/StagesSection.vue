<template>
  <v-container id="Процесс" class="py-16">
    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center mb-5">
        <h2 class="text-h4 font-weight-bold mb-2">
          {{ t("landing.timeline_title") }}
        </h2>
        <p class="text-subtitle-1 text-grey-darken-1">
          {{ t("landing.timeline_description") }}
        </p>
      </v-col>
    </v-row>

    <Timeline :entries="tm('landing.timeline_items')" />
  </v-container>
</template>

<script setup >
import { VContainer, VRow, VCol, VCard, VIcon } from "vuetify/components";
import Timeline from "@/components/common/Timeline.vue";
import {useI18n} from "vue-i18n";

const {tm, t} = useI18n();
</script>
