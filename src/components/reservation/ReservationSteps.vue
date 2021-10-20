<template>
  <div class="reservation-steps">
    <ReservationStepStatus />
    <div class="reservation-steps__content">
      <HotelAndDateSelectStep v-if="currentStep === steps.HOTEL_AND_DATE" />
      <RoomAndSceneSelectStep v-if="currentStep === steps.ROOM_AND_SCENE" />
      <PreviewAndPaymentStep v-if="currentStep === steps.PREVIEW_AND_PAYMENT" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import STEPS from "@/constants/reservationSteps";
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
  computed: {
    ...mapGetters({
      currentStep: "reservations/currentStep",
    }),
    steps() {
      return STEPS;
    },
  },
};
</script>
