<template>
  <div class="selected-hotel-detail-info">
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
    <HotelInfoBox ref="hotelInfoBox" :hideCouponCode="hideCouponCode" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HotelInfoBox from "@/components/hotels/HotelInfoBox";

export default {
  name: "SelectedHotelDetailedInfo",
  props: {
    hideCouponCode: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    HotelInfoBox,
  },
  computed: {
    ...mapGetters({
      formValues: "reservations/formValues",
      hotelInfo: "hotels/savedHotelDetails",
      reservationDays: "reservations/reservationDays",
      hotelProperties: "hotels/properties",
    }),
  },
};
</script>
