<template>
  <div class="reservation-step">
    <div class="reservation-step__content">
      <div class="reservation-step__hotel-info">
        <SelectedHotelInfo />
      </div>
      <div>
        <RadioSelect />
      </div>
      <div>manzara seçimi</div>
    </div>
    <div class="reservation-step__actions">
      <div>
        <el-button type="primary" @click="handlePrevStep"
          ><FontAwesomeIcon :icon="['fas', 'angle-double-left']" />
          Geri</el-button
        >
      </div>
      <div>
        <el-button type="primary">Kaydet ve Devam Et</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import STEPS from "@/constants/reservationSteps";
import { RadioSelect } from "@/components/general";
import { SelectedHotelInfo } from "@/components/hotels";
import { mapActions } from "vuex";
export default {
  name: "RoomAndSceneSelectStep",
  components: {
    RadioSelect,
    SelectedHotelInfo,
  },
  methods: {
    ...mapActions({
      setStep: "reservations/SetStep",
    }),
    handlePrevStep() {
      this.setStep(STEPS.HOTEL_AND_DATE);
    },
  },
};
</script>
