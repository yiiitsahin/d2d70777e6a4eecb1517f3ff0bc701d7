<template>
  <div class="reservation-completed-message-box reservation-step mb-25">
    <div class="reservation-step__content">
      <div class="reservation-completed-message-box__content">
        <div class="mb-20 text-green">
          <FontAwesomeIcon :icon="['far', 'calendar-check']" size="5x" />
        </div>
        <div class="">Rezervasyon kaydınız alınmıştır.</div>
        <p class="">
          Rezervasyon özetiniz aşağıdaki gibidir. Rezervasyon kaydınızda
          değişiklik veya yeni rezervasyon yapmak için aşağıdaki linkleri
          kullanabilirsiniz.
        </p>
        <div class="reservation-completed-message-box__actions">
          <div class="reservation-completed-message-box__actions-item">
            <el-button type="primary" @click="handleNewReservation"
              >Yeni Rezervasyon Yap</el-button
            >
          </div>
          <div class="reservation-completed-message-box__actions-item">
            <el-button type="primary" @click="handleUpdateReservation"
              >Rezervasyon Güncelle</el-button
            >
          </div>
          <div class="reservation-completed-message-box__actions-item">
            <el-button
              type="primary"
              :loading="isDeleting"
              @click="handleCancelReservation"
              >Rezervasyonu İptal Et</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import STEPS from "@/constants/reservationSteps";

export default {
  name: "ReservationCompletedMessage",
  data() {
    return {
      isDeleting: false,
    };
  },
  computed: {
    ...mapGetters({
      reservationId: "reservations/reservationId",
    }),
  },
  methods: {
    ...mapActions({
      setStep: "reservations/SetStep",
      deleteReservation: "reservations/DeleteReservation",
      resumeApp: "reservations/ResumeApp",
    }),
    handleNewReservation() {
      this.resumeApp();
    },
    handleUpdateReservation() {
      this.setStep(STEPS.HOTEL_AND_DATE);
    },
    handleCancelReservation() {
      this.$confirm(
        "Rezervasyon kaydınızı iptal etmek istediğinize emin misiniz?",
        "Uyarı",
        {
          confirmButtonText: "Onayla",
          cancelButtonText: "Vazgeç",
          type: "warning",
        }
      )
        .then(async () => {
          try {
            this.isDeleting = true;
            const reservationId = this.reservationId;
            await this.deleteReservation(reservationId);
            this.$notify.success({
              title: "Başarılı",
              message: `${reservationId} id'li rezervasyon başarıyla iptal edilmiştir.`,
            });
            this.resumeApp();
          } finally {
            this.isDeleting = false;
          }
        })
        .catch(() => {});
    },
  },
};
</script>
