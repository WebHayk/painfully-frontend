<template>
  <AuthorizationWrapper page-key="login">
    <v-form @submit.prevent="submitForm">
      <RoleSwitcher
          :model-value="form.role"
          @update:modelValue="handleUpdate"
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
          :type="showPassword ? 'text' : 'password'"
          :error-messages="v$.password.$pending ? [] : v$.password.$errors.map(e => e.$message)"
      >
        <template #append-inner>
          <div
              class="d-flex align-center cursor-pointer"
              @click="togglePasswordVisibility"
          >
            <EyeIcon v-if="!showPassword"/>
            <EyeOffIcon v-else/>
          </div>
        </template>
      </v-text-field>

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

<script setup>
import {ref} from "vue";
import useVuelidate from "@vuelidate/core";
import {required, email, minLength, helpers} from "@vuelidate/validators";
import AuthorizationWrapper from "@/components/common/AuthorizationWrapper.vue";
import {useRouter} from "vue-router";
import EyeOffIcon from "@/assets/icons/EyeOffIcon.vue";
import EyeIcon from "@/assets/icons/EyeIcon.vue";
import RoleSwitcher from "@/components/User/Auth/RoleSwitcher.vue";
import {ROLES} from "@/core/variables/index.js";
import {useStore} from "vuex";

const router = useRouter();
const store = useStore();

const validations = {
  email: {
    required: helpers.withMessage("Обязательное поле", required),
    email: helpers.withMessage("Неверный формат электронной почты", email)
  },
  password: {
    required: helpers.withMessage("Обязательное поле", required),
    minLength: helpers.withMessage("Поле должно содержать не менее 6 символов", minLength(6))
  }
};

const form = ref({
  email: "",
  password: "",
  role: ROLES.MEMBER
});

const showPassword = ref(false);

const v$ = useVuelidate(validations, form);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const handleUpdate = async (value) => {
  form.value.role = value;
};

const submitForm = async () => {
  v$.value.$touch();

  if (v$.value.$invalid) {
    return;
  }

  try {
    await store.dispatch("auth/login", form.value);
  } catch (error) {
    console.log(error);
  }
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
