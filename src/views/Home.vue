<template>
  <DefaultLayout>
    <ReservationSteps />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout";
import { ReservationSteps } from "@/components/reservation";

export default {
  name: "Home",
  components: {
    DefaultLayout,
    ReservationSteps,
  },
};
</script>
