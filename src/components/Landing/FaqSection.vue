<template>
  <section id="FAQ" class="faq-section">
    <v-container class="py-16">
      <v-row align="center" justify="center">
        <v-col cols="12" md="5" class="faq-section__info">
          <div class="faq-section__icon">
            ?
          </div>
          <h2 class="faq-section__title">
            {{ t("landing.faq_title") }}
          </h2>
          <p class="faq-section__description">
            {{ t("landing.faq_description") }}
          </p>
        </v-col>

        <v-col cols="12" md="7">
          <v-expansion-panels multiple elevation="0" class="faq-section__panels">
            <v-expansion-panel
                v-for="(faq, index) in tm('landing.faq_items')"
                :key="index"
            >
              <v-expansion-panel-title>
                {{ faq.title }}
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                {{ faq.description }}
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>

import {useI18n} from "vue-i18n";

const {t, tm} = useI18n();
</script>

<style scoped lang="scss">
.faq-section {
  background-color: #4A90E2;

  &__inner {
    padding: 0 1rem;
  }

  &__icon {
    width: 50px;
    height: 50px;
    font-size: 20px;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    font-weight: 800;
  }

  &__info {
    padding-right: 2rem;

    .faq-section__title {
      font-size: 2.5rem;
      font-weight: 800;
      margin-bottom: 1rem;
      color: #FFF;
    }

    .faq-section__description {
      font-size: 1.125rem;
      color: #efeff1;
      max-width: 420px;
    }
  }

  &__panels {
    background-color: #ffffff;
    border-radius: 0.75rem;
    padding: 1rem;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);

    .v-expansion-panel-title {
      font-weight: 600;
      color: #1f2937;
    }

    .v-expansion-panel-text {
      color: #4b5563;
      font-size: 0.95rem;
    }
  }

  @media (max-width: 768px) {
    &__info {
      padding-right: 0;
      text-align: center;

      .faq-section__description {
        margin: 0 auto;
      }
    }

    &__panels {
      margin-top: 2rem;
    }
  }
}
</style>
