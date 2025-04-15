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
      <v-toolbar-title>
        {{ $t(`routes.${pageTitle}`) }}
      </v-toolbar-title>

      <v-spacer/>

      <HeaderProfile />
    </v-app-bar>

    <v-main class="bg-grey-lighten-4">
      <v-container fluid class="py-4 h-100">
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router'
import {computed} from "vue";
import HeaderProfile from "@/components/common/HeaderProfile.vue";

const route = useRoute();

const navItems = [{title: 'Мероприятия', icon: 'mdi-account-group', to: '/user/events'}
];

const pageTitle = computed(() => {
  return route.meta.titleKey;
});
</script>
