<template>
  <div class="reservation-step-status__bar">
    <div class="reservation-step-status__bar-item">
      <div :style="barStyle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReservationStepStatusBar",
  props: {
    percent: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    barStyle() {
      return `width: ${this.percent}%`;
    },
  },
};
</script>
