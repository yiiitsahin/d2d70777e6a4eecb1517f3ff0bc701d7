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
        <el-button type="primary" @click="handleSubmit"
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
      price: null,
      couponCode: null,
      cardName: null,
      cardNumber: null,
      cardDateMonth: null,
      cardDateYear: null,
      cardCvv: null,
    };
  },
  computed: {
    ...mapGetters({
      isCardValid: "payment/isCardValid",
    }),
  },
  mounted() {
    this.prepareForm();
  },
  methods: {
    ...mapActions({
      setStep: "reservations/SetStep",
    }),
    prepareForm() {
      if (this.formValues && this.formValues.card_number) {
        // const {
        //   price,
        //   coupon_code,
        //   card_name,
        //   card_number,
        //   card_date_month,
        //   card_date_year,
        //   card_cvv,
        // } = this.formValues;
      }
    },
    handlePrevStep() {
      this.setStep(STEPS.ROOM_AND_SCENE);
    },
    handleSubmit() {
      if (this.isCardValid) {
        console.log("Ödeme işlemini bitir!!!!");
      } else {
        this.$message.warning("Lütfen zorunlu alanları kontrol ediniz.");
      }
    },
  },
};
</script>
