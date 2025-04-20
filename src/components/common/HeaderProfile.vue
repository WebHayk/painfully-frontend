<script setup>
import UserIcon from "@/assets/icons/UserIcon.vue";
import {useRouter} from "vue-router";
import CheckIcon from "@/assets/icons/CheckIcon.vue";
import DeclineIcon from "@/assets/icons/DeclineIcon.vue";
import MoonIcon from "@/assets/icons/MoonIcon.vue";
import {useTheme} from "vuetify";
import {computed} from "vue";
import SunIcon from "@/assets/icons/SunIcon.vue";

const router = useRouter();
const theme = useTheme();

const goToProfile = () => router.push({name: "UserProfile"});

const logout = () => {
  console.log('Logging out...')
};

const oppositeTheme = computed(() => {
  const current = theme.global.name.value;
  return current === "light" ? "dark" : "light";
});

const toggleTheme = () => {
  theme.global.name.value = oppositeTheme.value;
};
</script>

<template>
  <div class="d-flex align-center header-profile pe-3">
    <v-tooltip
        location="bottom"
        :text="$t('common.switch_theme')"
    >
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" icon @click="toggleTheme">
          <MoonIcon v-if="oppositeTheme === 'dark'"/>
          <SunIcon v-else />
        </v-btn>
      </template>
    </v-tooltip>

      <v-menu offset-y>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" icon>
            <UserIcon/>
          </v-btn>
        </template>

        <v-list class="header-profile__friends">
          <v-row align="center">
            <v-col class="d-flex header-profile__friends-row align-center justify-space-between">
              <span>Friend 1</span>
              <div class="d-flex align-center header-profile__friends-actions">
                <v-tooltip text="Отклонить">
                  <template v-slot:activator="{ props }">
                    <v-btn size="sm" v-bind="props" @click="() => {}" color="red" icon>
                      <DeclineIcon fill="#fff"/>
                    </v-btn>
                  </template>
                </v-tooltip>
                <v-tooltip text="Подтвердить">
                  <template v-slot:activator="{ props }">
                    <v-btn size="sm" v-bind="props" @click="() => {}" color="green" icon>
                      <v-icon>
                        <CheckIcon fill="#fff"/>
                      </v-icon>
                    </v-btn>
                  </template>
                </v-tooltip>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-btn class="w-100" variant="flat">
              Весь список друзей
            </v-btn>
          </v-row>
        </v-list>
      </v-menu>

      <v-menu offset-y>
        <template #activator="{ props }">
          <v-btn icon v-bind="props">
            <v-avatar size="32">
              <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Profile"/>
            </v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
              title="Профиль"
              @click="goToProfile"
          />
          <v-list-item
              title="Выход"
              @click="logout"
          />
        </v-list>
      </v-menu>
  </div>
</template>

<style scoped lang="scss">
.header-profile {
  gap: 16px;

  &__friends {
    padding: 16px;

    &-actions {
      gap: 8px;
    }

    &-row {
      min-width: 320px;
    }
  }
}
</style>
