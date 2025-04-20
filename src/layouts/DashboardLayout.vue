<template>
  <v-app>
    <v-navigation-drawer app permanent>
      <v-list dense nav>
        <v-list-item
            v-for="item in navItems"
            :key="item.title"
            :to="item.to"
            link
        >
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar elevation="0" app>
      <v-toolbar-title v-if="pageTitle">
        {{ t(pageTitle) }}
      </v-toolbar-title>

      <v-spacer/>

      <HeaderProfile />
    </v-app-bar>

    <v-main class="bg-background">
      <v-container fluid class="py-4 h-100">
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup >
import {useRoute} from 'vue-router'
import {computed} from "vue";
import HeaderProfile from "@/components/common/HeaderProfile.vue";
import {useI18n} from "vue-i18n";

const route = useRoute();
const {t, te} = useI18n();

const navItems = [{title: 'Мероприятия', icon: 'mdi-account-group', to: '/user/events'}];

const pageTitle = computed(() => {
  let value = `routes.${route.meta.titleKey}`;
  if (te(value)) {
    return t(value);
  }
});


</script>
