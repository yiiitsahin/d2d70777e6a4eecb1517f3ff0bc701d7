<template>
  <div class="reservation-completed-section">
    <ReservationCompletedMessage />
    <SelectedHotelDetailedInfo hideCouponCode />
  </div>
</template>

<script>
import ReservationCompletedMessage from "./ReservationCompletedMessage";
import { SelectedHotelDetailedInfo } from "@/components/hotels";

export default {
  name: "ReservationCompleted",
  components: {
    SelectedHotelDetailedInfo,
    ReservationCompletedMessage,
  },
};
</script>
