<template>
  <div class="reservation-steps">
    <ReservationStepStatus />
    <div class="reservation-steps__content">
      <RoomAndSceneSelectStep />
      <PreviewAndPaymentStep />
      <HotelAndDateSelectStep />
    </div>
  </div>
</template>

<script>
import ReservationStepStatus from "./ReservationStepStatus.vue";
import {
  PreviewAndPaymentStep,
  HotelAndDateSelectStep,
  RoomAndSceneSelectStep,
} from "@/components/reservation/steps";
export default {
  name: "ReservationSteps",
  components: {
    ReservationStepStatus,
    PreviewAndPaymentStep,
    HotelAndDateSelectStep,
    RoomAndSceneSelectStep,
  },
};
</script>
