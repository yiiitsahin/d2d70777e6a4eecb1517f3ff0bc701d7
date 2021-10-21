<template>
  <div class="selected-hotel-info">
    <div class="selected-hotel-info__title">
      <span class="selected-hotel-info__title-name">{{
        hotelInfo && hotelInfo.hotel_name
      }}</span>
      <span class="selected-hotel-info__title-city">
        ({{ hotelInfo && hotelInfo.city }})</span
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
      formValues: "reservations/formValues",
      hotelInfo: "hotels/savedHotelDetails",
    }),
  },
};
</script>
