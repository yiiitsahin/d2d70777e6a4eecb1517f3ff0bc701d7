<template>
  <div class="reservation-step">
    <div class="reservation-step__content">
      <div class="reservation-step-form__label required">Otel</div>
      <HotelsSelect v-model="selectedHotel" @change="clearFields" />
      <el-alert
        v-if="isChildInputDisabled"
        class="reservation-step-form__alert"
        title="Seçtiğiniz otelde çocuk ziyaretçi kabul edilmemektedir!"
        type="warning"
        show-icon
      >
      </el-alert>
      <div class="reservation-step-form">
        <div class="reservation-step-form__date-person">
          <div class="reservation-step-form__date">
            <div class="reservation-step-form__label required">Tarih</div>
            <el-date-picker
              v-model="selectedDates"
              type="daterange"
              start-placeholder="Giriş Tarihi"
              end-placeholder="Çıkış Tarihi"
              value-format="yyyy-MM-dd"
              format="dd.MM.yyyy"
            >
            </el-date-picker>
          </div>
          <div class="reservation-step-form__person">
            <div class="reservation-step-form__label required">
              Yetişkin Sayısı
            </div>
            <el-input-number
              v-model="personCount"
              :min="1"
              :max="maxAdult"
            ></el-input-number>
          </div>
          <div class="reservation-step-form__child">
            <div class="reservation-step-form__label">Çocuk Sayısı</div>
            <el-input-number
              v-model="childCount"
              :disabled="isChildInputDisabled"
              :min="0"
              :max="5"
            ></el-input-number>
          </div>
        </div>
      </div>
    </div>

    <div class="reservation-step__actions">
      <div></div>
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
import { HotelsSelect } from "@/components/hotels/";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "HotelAndDateSelectStep",
  components: {
    HotelsSelect,
  },
  data() {
    return {
      selectedHotel: null, // "3",
      selectedDates: null,
      personCount: null,
      childCount: null,
    };
  },
  computed: {
    ...mapGetters({
      hotelsDetails: "hotels/hotelsDetails",
      formValues: "reservations/formValues",
    }),
    isFieldsValid() {
      return !!this.selectedHotel && !!this.selectedDates && !!this.personCount;
    },
    activeHotelDetails() {
      const hotel = this.hotelsDetails.filter(
        (hotel) => hotel.hotel_id === this.selectedHotel
      );
      if (hotel.length !== 0) {
        return hotel[0];
      }
      return {};
    },
    isChildInputDisabled() {
      if (!this.selectedHotel) {
        return false;
      }
      if (this.activeHotelDetails && this.activeHotelDetails.child_status) {
        return !this.activeHotelDetails.child_status;
      }
      return true;
    },
    maxAdult() {
      if (this.activeHotelDetails && this.activeHotelDetails.max_adult_size) {
        return this.activeHotelDetails.max_adult_size;
      }
      return 5;
    },
  },
  mounted() {
    this.prepareForm();
  },
  methods: {
    ...mapActions({
      setFormValues: "reservations/SetFormValues",
      saveReservationValues: "reservations/SaveReservationValues",
    }),
    prepareForm() {
      if (this.formValues && this.formValues.hotel_id) {
        const { hotel_id, adult, child, start_date, end_date } =
          this.formValues;
        this.personCount = adult;
        this.childCount = child;
        this.selectedDates = [start_date, end_date];
        this.selectedHotel = hotel_id;
      }
    },
    handleSubmit() {
      if (this.isFieldsValid) {
        const payload = {
          hotel_id: this.selectedHotel,
          start_date: this.selectedDates[0],
          end_date: this.selectedDates[1],
          adult: this.personCount,
          child: this.childCount,
        };
        this.saveReservationValues({
          data: payload,
          step: STEPS.ROOM_AND_SCENE,
        });
        return;
      }
      this.$message.warning("Lütfen zorunlu alanları kontrol ediniz.");
    },
    clearFields() {
      this.selectedDates = null;
      this.personCount = null;
      this.childCount = null;
    },
  },
};
</script>
