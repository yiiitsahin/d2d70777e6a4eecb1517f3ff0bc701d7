<template>
  <div class="selected-hotel-detail-info">
    <div class="selected-hotel-info__title">
      <span class="selected-hotel-info__title-name">{{
        hotelInfo && hotelInfo.hotel_name
      }}</span>
      <span class="selected-hotel-info__title-city">
        ({{ hotelInfo && hotelInfo.city }})</span
      >
    </div>
    <HotelInfoBox ref="hotelInfoBox" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HotelInfoBox from "@/components/hotels/HotelInfoBox";

export default {
  name: "SelectedHotelDetailedInfo",
  components: {
    HotelInfoBox,
  },
  computed: {
    ...mapGetters({
      formValues: "reservations/formValues",
      hotelInfo: "hotels/savedHotelDetails",
      reservationDays: "reservations/reservationDays",
    }),
  },
};
</script>
