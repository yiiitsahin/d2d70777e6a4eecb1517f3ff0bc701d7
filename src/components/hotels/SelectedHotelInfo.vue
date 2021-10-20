<template>
  <div class="selected-hotel-info" v-if="hotelInfo && hotelInfo.hotel_id">
    <div class="selected-hotel-info__title">
      <span class="selected-hotel-info__title-name">{{
        hotelInfo.hotel_name
      }}</span>
      <span class="selected-hotel-info__title-city">
        ({{ hotelInfo.city }})</span
      >
    </div>
    <div class="selected-hotel-info__info">
      <span>
        <span class="selected-hotel-info__info-label">Giriş-Çıkış Tarihi:</span>
        <span>
          {{ $dayjs(formValues.start_date).format("DD MMMM YYYY dddd") }}</span
        >
        -
        <span>
          {{ $dayjs(formValues.end_date).format("DD MMMM YYYY dddd") }}</span
        >
      </span>
    </div>
    <div class="selected-hotel-info__info">
      <span>
        <span class="selected-hotel-info__info-label">Yetişkin:</span>
        <span> {{ formValues.adult }} </span>
        <span class="selected-hotel-info__info-label">Çocuk:</span>
        <span> {{ formValues.child }} </span>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SelectedHotelInfo",
  computed: {
    ...mapGetters({
      hotelInfo: "hotels/savedHotelDetails",
      formValues: "reservations/formValues",
    }),
  },
};
</script>
