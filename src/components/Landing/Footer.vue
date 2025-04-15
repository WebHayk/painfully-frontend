<script setup lang="ts">

</script>

<template>
  <v-footer color="primary" dark class="pa-6">
    <v-container>
      <v-row justify="space-between" align="center">
        <!-- Left Side: Logo and text -->
        <v-col cols="12" sm="6" class="d-flex align-center">
          <span class="white--text text-h6 font-weight-bold">Aumify</span>
        </v-col>

        <!-- Center: Navigation links -->
        <v-col cols="12" sm="6" class="d-flex justify-center">
          <v-btn variant="text" class="text-white mx-2">Home</v-btn>
          <v-btn variant="text" class="text-white mx-2">About</v-btn>
          <v-btn variant="text" class="text-white mx-2">Services</v-btn>
          <v-btn variant="text" class="text-white mx-2">Contact</v-btn>
        </v-col>

        <!-- Right Side: Social Media icons -->
        <v-col cols="12" sm="6" class="d-flex justify-end">
          <v-icon size="24" class="mx-2" color="white">mdi-facebook</v-icon>
          <v-icon size="24" class="mx-2" color="white">mdi-twitter</v-icon>
          <v-icon size="24" class="mx-2" color="white">mdi-linkedin</v-icon>
          <v-icon size="24" class="mx-2" color="white">mdi-instagram</v-icon>
        </v-col>
      </v-row>

      <v-row class="mt-4">
        <v-col class="text-center">
          <span class="white--text text-body-2">© 2025 Aumify. All rights reserved.</span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>


<style scoped lang="scss">
/* Customize footer styling */
.v-footer {
  background-color: #1a237e; /* Adjust to match your brand colors */
}
</style>
