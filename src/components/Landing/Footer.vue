<script setup>
  import {useI18n} from "vue-i18n";

  const {t} = useI18n();

  const currentYear = new Date().getFullYear();
</script>

<template>
  <v-footer color="primary" dark class="pa-6">
    <v-container>
      <v-row>
        <v-col class="text-center">
          <span class="white--text text-body-2">© {{ currentYear }} ByteBurn. {{t("landing.footer_copyright")}}.</span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
