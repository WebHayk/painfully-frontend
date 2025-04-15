<template>
  <AuthorizationWrapper page-key="register">
    <v-form @submit.prevent="submitForm">
      <v-btn-group
          class="d-flex align-center justify-center register-view__controls mb-2"
          @click="handleRoleChange"
          variant="outlined"
          divided
      >
        <v-btn :active="isMember" value="participant">
          Участник
        </v-btn>
        <v-btn :active="!isMember" value="organizer">
          Организатор
        </v-btn>
      </v-btn-group>

      <v-text-field
          hide-details="auto"
          variant="outlined"
          name="username"
          @blur="v$.username.$touch"
          v-model="form.username"
          class="mb-2"
          label="Имя пользователя"
          :error-messages="v$.username.$pending ? [] : v$.username.$errors.map(e => e.$message)"
      />

      <v-text-field
          hide-details="auto"
          variant="outlined"
          name="email"
          @blur="v$.email.$touch"
          v-model="form.email"
          class="mb-2"
          label="Электронная почта"
          :error-messages="v$.email.$pending ? [] : v$.email.$errors.map(e => e.$message)"
      />

      <v-text-field
          variant="outlined"
          hide-details="auto"
          name="password"
          @blur="v$.password.$touch"
          v-model="form.password"
          label="Пароль"
          placeholder="Введите свой пароль"
          :error-messages="v$.password.$pending ? [] : v$.password.$errors.map(e => e.$message)"
      />

      <v-btn
          class="submit-btn"
          color="primary"
          size="large"
          type="submit"
          variant="elevated"
          block
      >
        Регистрация
      </v-btn>

      <v-btn
          @click="handleLogin"
          class="submit-btn"
          color="primary"
          size="large"
          type="submit"
          variant="text"
          block
      >
        Войти
      </v-btn>
    </v-form>
  </AuthorizationWrapper>
</template>

<script setup lang="ts">
import {computed, ref, watch} from 'vue';
import useVuelidate from "@vuelidate/core";
import {required, email, minLength} from "@vuelidate/validators";
import AuthorizationWrapper from "@/components/common/AuthorizationWrapper.vue";
import {useRouter} from "vue-router";

const router = useRouter();

const validations = {
  email: {required, email},
  password: {required, minLength: minLength(6)},
  username: {required}
};

const form = ref({
  email: "",
  password: "",
  username: "",
  role: "participant"
});

const v$ = useVuelidate(validations, form);

const isMember = computed(() => form.value.role === "participant");

const handleRoleChange = (event: MouseEvent) => {
  const buttonElement = (event.target as HTMLElement).closest('button');
  if (!buttonElement) return;
  form.value.role = buttonElement.value;
}

const handleLogin = () => {
  router.push({name: "UserLogin"});
}

const submitForm = () => {
  v$.value.$touch();
  if (v$.value.$invalid) {
    console.log('Form is invalid!');
    return;
  }

  console.log('Form submitted:', form.value);
};
</script>

<style scoped lang="scss">
.register-view__controls {
  button {
    height: 100%!important;
  }
}

.submit-btn {
  margin-top: 10px;
}
</style>
