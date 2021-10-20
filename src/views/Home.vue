<template>
  <DefaultLayout>
    <template v-if="currentStep === steps.COMPLETED">
      <ReservationCompleted />
    </template>
    <template v-else>
      <ReservationSteps />
    </template>
  </DefaultLayout>
</template>

<script>
import STEPS from "@/constants/reservationSteps";
import { mapGetters } from "vuex";
import DefaultLayout from "@/layouts/DefaultLayout";
import {
  ReservationSteps,
  ReservationCompleted,
} from "@/components/reservation";

export default {
  name: "Home",
  components: {
    DefaultLayout,
    ReservationSteps,
    ReservationCompleted,
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
