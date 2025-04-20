<template>
  <section class="hero">
    <div class="hero__video">
      <div class="hero__video-overlay"></div>
      <video
          src="@/assets/movies/main-movie.mp4"
          muted
          controls
          autoplay
          playsinline
          loop
      />
    </div>
    <div class="hero__content">
      <h1 class="hero__title">
        {{ t("landing.hero_title") }}
      </h1>
      <p class="hero__subtitle">
        {{ t("landing.hero_description") }}
      </p>
      <v-btn
          @click="handleAuthRedirect"
          color="surface"
          size="large"
      >
        {{ t("common.get_started") }}
      </v-btn>
    </div>
  </section>
</template>

<script setup>
  import {useI18n} from "vue-i18n";
  import {useRouter} from "vue-router";

  const {t} = useI18n();
  const router = useRouter();

  const handleAuthRedirect = () => {
    router.push({name: "UserRegister"});
  }
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
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 700px;
    z-index: 4;
  }

  &__video {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    max-height: 100vh;
    min-height: 100vh;
    z-index: 2;

    &-overlay {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(44, 62, 80, 0.6);
      width: 100%;
      max-height: 100vh;
      min-height: 100vh;
      z-index: 3;
    }

    video {
      width: 100%;
      object-fit: cover;
      height: 100%;
    }
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
