<template>
  <div
    class="reservation-step-status__item"
    :class="[
      currentStep === step ? 'current' : '',
      currentStep > step ? 'completed' : '',
    ]"
  >
    <div class="reservation-step-status__item-image">
      <FontAwesomeIcon :icon="icon" />
    </div>
    <div class="reservation-step-status__item-title">{{ title }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ReservationStepStatusItem",
  props: {
    icon: {
      type: Array,
      default: () => ["far", "calendar-alt"],
    },
    title: {
      type: String,
      default: "",
    },
    step: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    ...mapGetters({
      currentStep: "reservations/currentStep",
    }),
  },
};
</script>
