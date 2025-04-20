<template>
  <AuthorizationWrapper page-key="register">
    <v-form @submit.prevent="submitForm">
      <RoleSwitcher
          :model-value="form.role"
          @update:modelValue="handleUpdate"
      />

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
          :type="showPassword ? 'text' : 'password'"
          :error-messages="v$.password.$pending ? [] : v$.password.$errors.map(e => e.$message)"
      >
        <template #append-inner>
          <div
              class="d-flex align-center cursor-pointer"
              @click="togglePasswordVisibility"
          >
            <EyeIcon fill="#93755E" v-if="!showPassword"/>
            <EyeOffIcon fill="#93755E" v-else/>
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

<script setup>
import {ref} from "vue";
import useVuelidate from "@vuelidate/core";
import {required, helpers, email, minLength} from "@vuelidate/validators";
import AuthorizationWrapper from "@/components/common/AuthorizationWrapper.vue";
import {useRouter} from "vue-router";
import {useStore} from "vuex";
import EyeIcon from "@/assets/icons/EyeIcon.vue";
import EyeOffIcon from "@/assets/icons/EyeOffIcon.vue";
import RoleSwitcher from "@/components/User/Auth/RoleSwitcher.vue";
import {ROLES} from "@/core/variables/index.js";

const validations = {
  email: {
    required: helpers.withMessage("Обязательное поле", required),
    email: helpers.withMessage("Неверный формат электронной почты", email)
  },
  password: {
    required: helpers.withMessage("Обязательное поле", required),
    minLength: helpers.withMessage("Поле должно содержать не менее 6 символов", minLength(6))
  },
  username: {
    required: helpers.withMessage("Обязательное поле", required)
  }
};

const form = ref({
  email: "",
  password: "",
  username: "",
  role: ROLES.MEMBER
});

const showPassword = ref(false);

const router = useRouter();
const store = useStore();
const v$ = useVuelidate(validations, form);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const handleLogin = () => {
  router.push({name: "UserLogin"});
};

const handleUpdate = (value) => {
  form.value.role = value;
};

const submitForm = async () => {
  v$.value.$touch();

  if (v$.value.$invalid) {
    return;
  }

  let {role, ...rest} = form.value;
  let response;

  switch (role) {
    case ROLES.MEMBER:
      response = await store.dispatch("auth/registerMember", rest);
      break;
    case ROLES.ORGANIZER:
      response = await store.dispatch("auth/registerOrganizer", rest);
      break;
  }

  if (response) {
    
  }
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
