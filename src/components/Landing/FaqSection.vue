<template>
  <section class="faq-section">
    <v-container class="py-16">
      <v-row align="center" justify="center">
        <!-- Left: Title & Description -->
        <v-col cols="12" md="5" class="faq-section__info">
          <h2 class="faq-section__title">Frequently Asked Questions</h2>
          <p class="faq-section__description">
            Find quick answers to common questions about our platform, services, and support.
          </p>
        </v-col>

        <!-- Right: FAQ List -->
        <v-col cols="12" md="7">
          <v-expansion-panels multiple elevation="0" class="faq-section__panels">
            <v-expansion-panel
                v-for="(faq, index) in faqs"
                :key="index"
            >
              <v-expansion-panel-title>
                {{ faq.question }}
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                {{ faq.answer }}
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const faqs = [
  {
    question: 'How do I get started?',
    answer: 'Just click the "Get Started" button and create your free account.',
  },
  {
    question: 'What is your refund policy?',
    answer: 'We offer a 14-day money-back guarantee if you’re not satisfied.',
  },
  {
    question: 'Can I upgrade later?',
    answer: 'Absolutely! You can upgrade or change plans anytime from your dashboard.',
  },
]
</script>

<style scoped lang="scss">
.faq-section {
  background-color: #f9fafb;

  &__inner {
    padding: 0 1rem;
  }

  &__info {
    padding-right: 2rem;

    .faq-section__title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #111827;
    }

    .faq-section__description {
      font-size: 1.125rem;
      color: #6b7280;
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
