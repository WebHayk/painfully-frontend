<template>
  <section class="hero">
    <div class="hero__content">
      <h1 class="hero__title">Empower Your Ideas with Code</h1>
      <p class="hero__subtitle">
        Build scalable apps faster with modern tools and a powerful workflow.
      </p>
      <v-btn
          color="surface"
          size="large"
      >
        Get Started
      </v-btn>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 2rem;
  background: linear-gradient(135deg, #b89c87, #93755e, #6e503d);
  color: #fff;
  text-align: center;
  position: relative;

  &__content {
    max-width: 700px;
    z-index: 1;
  }

  &__title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;

    @media (max-width: 600px) {
      font-size: 2.25rem;
    }
  }

  &__subtitle {
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom: 2rem;
    color: #d1d5db;

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
}
</style>
