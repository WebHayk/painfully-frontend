<template>
  <v-container fluid class="authorization-wrapper h-100">
    <div class="authorization-wrapper__background"></div>
    <div class="authorization-wrapper__content">
      <h4 class="text-h4 d-flex align-center mb-2 justify-center">
        {{ $t(`auth.${pageKey}`) }}
      </h4>
      <slot></slot>
    </div>
  </v-container>
</template>

<script setup lang="ts">
defineProps({
  pageKey: {
    type: String,
    required: true
  }
});
</script>

<style scoped lang="scss">
@import "@/styles/utils/animations";

.authorization-wrapper {
  display: flex;
  height: 100%;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  &__background {
    border-radius: 48px;
    background: linear-gradient(45deg, #93755B, #f4c8a1, #f1ebd3);
    animation: gradientAnimation 7s ease infinite;
    background-size: 400% 400%;
    width: 70%;
    height: 100%;
  }

  &__content {
    width: 30%;
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ::v-deep form {
      width: 100% !important;
    }
  }
}

</style>
