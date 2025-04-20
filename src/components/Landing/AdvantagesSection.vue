<template>
  <v-container id="Преимущества" class="py-16">
    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center">
        <h2 class="text-h4 font-weight-bold mb-2">
          {{ t("landing.advantages_title") }}
        </h2>
        <p class="text-subtitle-1 text-grey-darken-1">
          {{ t("landing.advantages_description") }}
        </p>
      </v-col>
    </v-row>

    <v-row justify="center" align="stretch" class="text-center">
      <v-col
          v-for="(item) in tm('landing.advantages_items')"
          cols="12"
          md="4"
      >
        <v-card flat class="pa-6 rounded-lg">
          <div class="advantages-section__icon">
            {{ item.icon }}
          </div>
          <h3 class="text-h6 font-weight-bold mb-2">
            {{ item.title }}
          </h3>
          <p class="text-body-2 text-grey-darken-2">
            {{ item.description }}
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {useI18n} from "vue-i18n";

const {t, tm} = useI18n();
</script>


<style scoped lang="scss">
  .advantages-section__icon {
    width: 50px;
    height: 50px;
    font-size: 20px;
    background-color: rgba(44, 62, 80, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
  }
</style>
