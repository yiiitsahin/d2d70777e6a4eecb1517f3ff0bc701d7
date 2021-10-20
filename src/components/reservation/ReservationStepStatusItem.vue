<template>
  <div class="reservation-step-status__item">
    <div class="reservation-step-status__item-image">
      <FontAwesomeIcon :icon="icon" />
    </div>
    <div class="reservation-step-status__item-title">{{ title }}</div>
  </div>
</template>

<script>
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
};
</script>
