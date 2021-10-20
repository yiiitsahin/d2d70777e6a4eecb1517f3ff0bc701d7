<template>
  <div class="reservation-step-status">
    <ReservationStepStatusItem
      :icon="['far', 'calendar-alt']"
      :step="steps.HOTEL_AND_DATE"
      title="Otel ve Tarih Seçimi"
    />
    <ReservationStepStatusItem
      :icon="['fas', 'bed']"
      :step="steps.ROOM_AND_SCENE"
      title="Oda Tipi ve Manzara Seçimi"
    />
    <ReservationStepStatusItem
      :icon="['far', 'credit-card']"
      :step="steps.PREVIEW_AND_PAYMENT"
      title="Önizleme ve Ödeme İşlemleri"
    />
    <ReservationStepStatusBar :percent="barPercent" />
  </div>
</template>

<script>
import ReservationStepStatusItem from "./ReservationStepStatusItem";
import ReservationStepStatusBar from "./ReservationStepStatusBar";
import STEPS from "@/constants/reservationSteps";

export default {
  name: "ReservationStepStatus",
  components: {
    ReservationStepStatusItem,
    ReservationStepStatusBar,
  },
  computed: {
    steps() {
      return STEPS;
    },
    barPercent() {
      return 50;
    },
  },
};
</script>
