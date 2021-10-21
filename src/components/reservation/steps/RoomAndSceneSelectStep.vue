<template>
  <div class="reservation-step">
    <div class="reservation-step__content">
      <div class="reservation-step__hotel-info">
        <SelectedHotelInfo />
      </div>
      <div>
        <h3 class="required">Oda Tipi Seçimi</h3>
        <RoomFeatureSelect
          :items="roomTypes"
          v-model="selectedType"
          :day="reservationDays"
          type="room_type"
        />
      </div>
      <div>
        <h3 class="required">Manzara Seçimi</h3>
        <RoomFeatureSelect
          :items="roomScenes"
          v-model="selectedScene"
          :day="reservationDays"
          type="room_scenic"
        />
      </div>
    </div>
    <div class="reservation-step__actions">
      <div>
        <el-button type="primary" @click="handlePrevStep"
          ><FontAwesomeIcon :icon="['fas', 'angle-double-left']" />
          Geri</el-button
        >
      </div>
      <div>
        <el-button type="primary" @click="handleSubmit"
          >Kaydet ve Devam Et</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import STEPS from "@/constants/reservationSteps";
import { RoomFeatureSelect } from "@/components/general";
import { SelectedHotelInfo } from "@/components/hotels";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "RoomAndSceneSelectStep",
  components: {
    RoomFeatureSelect,
    SelectedHotelInfo,
  },
  data() {
    return {
      selectedScene: null,
      selectedType: null,
    };
  },
  computed: {
    ...mapGetters({
      hotelInfo: "hotels/savedHotelDetails",
      formValues: "reservations/formValues",
      reservationDays: "reservations/reservationDays",
    }),
    roomTypes() {
      return this.hotelInfo.room_type;
    },
    roomScenes() {
      return this.hotelInfo.room_scenic;
    },
    isFieldsValid() {
      return !!this.selectedScene && !!this.selectedType;
    },
  },
  mounted() {
    this.prepareForm();
  },
  methods: {
    ...mapActions({
      setStep: "reservations/SetStep",
      saveReservationValues: "reservations/SaveReservationValues",
    }),
    prepareForm() {
      if (this.formValues && this.formValues.room_scenic) {
        const { room_type, room_scenic } = this.formValues;
        console.log(room_scenic);
        this.selectedScene = room_scenic;
        this.selectedType = room_type;
      }
    },
    handlePrevStep() {
      this.setStep(STEPS.HOTEL_AND_DATE);
    },
    handleSubmit() {
      if (this.isFieldsValid) {
        const payload = {
          room_type: this.selectedType,
          room_scenic: this.selectedScene,
        };
        this.saveReservationValues({
          data: payload,
          step: STEPS.PREVIEW_AND_PAYMENT,
        });
        return;
      }
      this.$message.warning("Lütfen zorunlu alanları kontrol ediniz.");
    },
  },
};
</script>
