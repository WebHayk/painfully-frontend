<template>
  <v-container fluid class="authorization-wrapper h-100">
    <div class="authorization-wrapper__background">
      <div
          @click="handleBack"
          role="button"
          class="authorization-wrapper__back d-flex align-center"
      >
        <ArrowIcon fill="#fff" />
        На главную
      </div>
    </div>
    <div class="authorization-wrapper__content">
      <h4 class="text-h4 d-flex align-center mb-2 justify-center">
        {{ $t(`auth.${pageKey}`) }}
      </h4>
      <slot></slot>
    </div>
  </v-container>
</template>

<script setup >
import ArrowIcon from "@/assets/icons/ArrowIcon.vue";
import {useRouter} from "vue-router";

defineProps({
  pageKey: {
    type: String,
    required: true
  }
});

const router = useRouter();

const handleBack = () => {
  router.push({name: "Home"});
}

</script>

<style scoped lang="scss">
@import "@/styles/utils/animations";

.authorization-wrapper {
  display: flex;
  height: 100%;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  &__back {
    position: absolute;
    top: 50px;
    padding: 5px 12px;
    backdrop-filter: blur(5px);
    background: rgba(255,255,255,0.2);
    color: #fff;
    border-radius: 8px;
    left: 50px;
    cursor: pointer;
    transition: .25s all;

    &:hover {
      background: rgba(255,255,255,0.25);
    }
  }

  &__background {
    position: relative;
    border-radius: 48px;
    background-image: url("@/assets/images/auth-image.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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

    h4 {
      font-weight: 800;
    }

    ::v-deep form {
      width: 100% !important;
    }
  }
}

</style>
