<template>
  <v-form @submit.prevent="submitForm" ref="formRef">
    <v-text-field
        variant="solo"
        v-model="form.title"
        label="Название"
        :error-messages="v$.title.$errors.map(e => e.$message)"
        required
    />

    <v-textarea
        variant="solo"
        v-model="form.description"
        label="Описание"
        :error-messages="v$.description.$errors.map(e => e.$message)"
        required
    />

    <v-select
        variant="solo"
        v-model="form.format"
        label="Формат"
        :items="['онлайн', 'оффлайн']"
        :error-messages="v$.format.$errors.map(e => e.$message)"
        required
    />

    <v-select
        variant="solo"
        v-model="form.event_category_id"
        label="Категория"
        :items="categoryOptions"
        item-title="title"
        item-value="value"
        :error-messages="v$.event_category_id.$errors.map(e => e.$message)"
        required
    />

    <v-row>
      <v-col cols="6">
        <v-text-field
            variant="solo"
            v-model="form.startTime"
            label="Дата начала"
            type="datetime-local"
            :error-messages="v$.startTime.$errors.map(e => e.$message)"
            required
        />
      </v-col>
      <v-col cols="6">
        <v-text-field
            variant="solo"
            v-model="form.endTime"
            label="Дата завершения"
            type="datetime-local"
            :error-messages="v$.endTime.$errors.map(e => e.$message)"
            required
        />
      </v-col>
    </v-row>

    <!-- MAP SECTION -->
    <div style="height: 400px; margin-bottom: 20px;">
      <l-map
          v-model:zoom="zoom"
          v-model:center="center"
          style="height: 100%"
          @click="onMapClick"
          :useGlobalLeaflet="false"
      >
        <l-tile-layer
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
            layer-type="base"
            name="Stadia Maps Basemap"
        />
        <l-marker
            v-if="form.latitude && form.longitude"
            :lat-lng="[form.latitude, form.longitude]"
        />
      </l-map>
    </div>

    <!-- Location text -->
    <v-text-field
        variant="solo"
        v-model="form.location"
        label="Локация"
        readonly
    />

    <v-btn type="submit" :disabled="!v$.$valid">
      Создать
    </v-btn>
  </v-form>
</template>

<script  setup>
import { ref, reactive } from "vue"
import { useVuelidate } from "@vuelidate/core"
import { required, minLength, numeric } from "@vuelidate/validators"
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet"
import {GeocoderService} from "@/core/services/geocoder.service.js";

const geocoderService = new GeocoderService();

const formRef = ref()
const form = reactive({
  title: "",
  description: "",
  format: "",
  location: "",
  event_category_id: "",
  latitude: null,
  longitude: null,
  startTime: "",
  endTime: "",
});

const rules = {
  title: { required, minLength: minLength(3) },
  description: { required, minLength: minLength(10) },
  format: { required },
  location: {},
  event_category_id: { required },
  latitude: { required, numeric },
  longitude: { required, numeric },
  startTime: { required },
  endTime: { required },
}

const v$ = useVuelidate(rules, form)

const categoryOptions = ref([
  { title: "Music", value: "1" },
  { title: "Art", value: "2" },
  { title: "Tech", value: "3" },
])

const zoom = ref(13)
const center = ref([40.1792, 44.4991]) // Yerevan

const onMapClick = async (event) => {
  const { lat, lng } = event.latlng;
  form.latitude = lat;
  form.longitude = lng;
  try {
    form.location = await geocoderService.fetchAddressFromCoords(lat, lng);
  } catch (error) {
    console.log(error);
  }
}

const submitForm = async () => {
  v$.value.$touch()
  if (!v$.value.$invalid) {
    console.log("Submit:", { ...form })
    // submit logic here
  }
}
</script>
