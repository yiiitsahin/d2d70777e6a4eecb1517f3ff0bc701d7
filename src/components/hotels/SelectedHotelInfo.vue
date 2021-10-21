<template>
  <div class="selected-hotel-info">
    <div class="selected-hotel-info__title">
      <span
        class="selected-hotel-info__title-name"
        v-if="hotelProperties.hotelName"
        >{{ hotelProperties.hotelName }}</span
      >
      <span
        class="selected-hotel-info__title-city"
        v-if="hotelProperties.hotelCity"
      >
        ({{ hotelProperties.hotelCity }})</span
      >
    </div>
    <div class="selected-hotel-info__info">
      <span>
        <span class="selected-hotel-info__info-label">Giriş-Çıkış Tarihi:</span>
        <span>
          {{
            $dayjs(hotelProperties.startDate).format("DD MMMM YYYY dddd")
          }}</span
        >
        -
        <span>
          {{
            $dayjs(hotelProperties.endDate).format("DD MMMM YYYY dddd")
          }}</span
        >
      </span>
    </div>
    <div class="selected-hotel-info__info">
      <span>
        <span class="selected-hotel-info__info-label">Yetişkin:</span>
        <span> {{ hotelProperties.adultCount }} </span>
        <span class="selected-hotel-info__info-label">Çocuk:</span>
        <span> {{ hotelProperties.childCount }} </span>
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
      hotelProperties: "hotels/properties",
    }),
  },
};
</script>
