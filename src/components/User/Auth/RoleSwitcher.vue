<template>
  <v-btn-group
      class="d-flex align-center justify-center register-view__controls mb-2"
      variant="outlined"
      divided
  >
    <v-btn
        :active="isMember"
        value="member"
        @click="updateRole(ROLES.MEMBER)"
    >
      Участник
    </v-btn>
    <v-btn
        :active="!isMember"
        value="organizer"
        @click="updateRole(ROLES.ORGANIZER)"
    >
      Организатор
    </v-btn>
  </v-btn-group>
</template>

<script setup>
import {computed} from "vue";
import {ROLES} from "@/core/variables/index.js";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const isMember = computed(() => props.modelValue === ROLES.MEMBER);

const updateRole = (role) => {
  emit("update:modelValue", role);
}
</script>

<style scoped lang="scss">
.register-view__controls {
  button {
    height: 100% !important;
  }
}
</style>
