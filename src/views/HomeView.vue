<script setup>
import Header from "@/components/Landing/Header.vue";
import HomeSection from "@/components/Landing/HomeSection.vue";
import AdvantagesSection from "@/components/Landing/AdvantagesSection.vue";
import FaqSection from "@/components/Landing/FaqSection.vue";
import StagesSection from "@/components/Landing/StagesSection.vue";
import Footer from "@/components/Landing/Footer.vue";
import EventsMap from "@/components/User/Events/EventsMap.vue";
import {useStore} from "vuex";

const store = useStore();

const handleEventsSearch = async () => {
  let response = await store.dispatch("events/searchEvents", {
    title: "string",
    description: "string",
    format: "ONLINE",
    location: "string",
    category: "string",
    tag: "string",
    status: "NOT_STARTED",
    page: 0,
    limit: 0
  });
}



</script>

<template>
  <Header />
  <main>
    <HomeSection />
    <AdvantagesSection />

    <EventsMap />

    <FaqSection />
    <StagesSection />
  </main>
  <Footer />
</template>

<style scoped>

</style>
