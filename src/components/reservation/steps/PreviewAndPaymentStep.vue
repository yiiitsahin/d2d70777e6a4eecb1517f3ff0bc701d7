<template>
  <div class="reservation-step">
    <div class="reservation-step__cols">
      <div class="reservation-step__content reservation-step__col">
        <div>
          <PaymentForm />
        </div>
      </div>
      <div class="reservation-step__col">
        <SelectedHotelDetailedInfo />
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
        <el-button :loading="isLoading" type="primary" @click="handleSubmit"
          >Ödeme Yap ve Bitir</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import STEPS from "@/constants/reservationSteps";
import { SelectedHotelDetailedInfo } from "@/components/hotels";
import { PaymentForm } from "@/components/payment";

export default {
  name: "PreviewAndPaymentStep",
  components: {
    SelectedHotelDetailedInfo,
    PaymentForm,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters({
      isCardValid: "payment/isCardValid",
      cardInfo: "payment/cardInfo",
      hotelProperties: "hotels/properties",
      formValues: "reservations/formValues",
      reservationId: "reservations/reservationId",
    }),
  },
  mounted() {
    this.prepareForm();
  },
  methods: {
    ...mapActions({
      setStep: "reservations/SetStep",
      completeReservation: "reservations/CompleteReservation",
      updateReservation: "reservations/UpdateReservation",
    }),
    prepareForm() {},
    handlePrevStep() {
      this.setStep(STEPS.ROOM_AND_SCENE);
    },
    async handleSubmit() {
      if (this.isCardValid) {
        this.isLoading = true;
        const {
          card_name,
          card_cvv,
          card_date_month,
          card_date_year,
          card_number,
        } = this.cardInfo;
        const paymentPayload = {
          price: this.hotelProperties.totalPrice,
          coupon_code:
            (this.hotelProperties.coupon && this.hotelProperties.coupon.code) ||
            null,
          card_name,
          card_cvv,
          card_date_month,
          card_date_year,
          card_number,
        };
        const payload = {
          ...this.formValues,
          ...paymentPayload,
        };
        try {
          const reservationId = this.reservationId;
          if (reservationId) {
            await this.updateReservation({ id: reservationId, payload });
            this.$notify.success({
              title: "Başarılı",
              message: `${reservationId} id'li rezervasyon kaydınız güncellenmiştir.`,
            });
          } else {
            await this.completeReservation(payload);
            this.$notify.success({
              title: "Başarılı",
              message: `Rezervasyon kaydınız alınmıştır.`,
            });
          }
          this.setStep(STEPS.COMPLETED);
        } finally {
          this.isLoading = false;
        }
      } else {
        this.$message.warning("Lütfen zorunlu alanları kontrol ediniz.");
      }
    },
  },
};
</script>
