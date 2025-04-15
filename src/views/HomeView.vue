<script setup lang="ts">
import Header from "@/components/Landing/Header.vue";
import HomeSection from "@/components/Landing/HomeSection.vue";
import AdvantagesSection from "@/components/Landing/AdvantagesSection.vue";
import FaqSection from "@/components/Landing/FaqSection.vue";
import StagesSection from "@/components/Landing/StagesSection.vue";
import Footer from "@/components/Landing/Footer.vue";
import EventsMap from "@/components/User/Events/EventsMap.vue";
</script>

<template>
  <Header />
  <main>
    <HomeSection />
    <EventsMap />

    <AdvantagesSection />
    <FaqSection />
    <StagesSection />
  </main>
  <Footer />
</template>

<style scoped>

</style>
