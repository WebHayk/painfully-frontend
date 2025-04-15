<template>
  <AuthorizationWrapper page-key="login">
    <v-form @submit.prevent="submitForm">
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
        Войти
      </v-btn>

      <v-btn
          @click="handleRegister"
          class="submit-btn"
          color="primary"
          size="large"
          type="submit"
          variant="text"
          block
      >
        Регистрация
      </v-btn>
    </v-form>
  </AuthorizationWrapper>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import useVuelidate from "@vuelidate/core";
import {required, email, minLength} from "@vuelidate/validators";
import AuthorizationWrapper from "@/components/common/AuthorizationWrapper.vue";
import {useRouter} from "vue-router";

const router = useRouter();

const validations = {
  email: {required, email},
  password: {required, minLength: minLength(6)}
};

const form = ref({
  email: "",
  password: "",
});

const v$ = useVuelidate(validations, form);

const submitForm = () => {
  v$.value.$touch();
  if (v$.value.$invalid) {
    console.log('Form is invalid!');
    return;
  }

  console.log('Form submitted:', form.value);
};

const handleRegister = () => {
  router.push({name: "UserRegister"});
}
</script>

<style scoped lang="scss">
.submit-btn {
  margin-top: 10px;
}
</style>
