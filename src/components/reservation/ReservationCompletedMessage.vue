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
            <el-button type="primary" @click="handleCancelReservation"
              >Rezervasyonu İptal Et</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReservationCompletedMessage",
  methods: {
    handleNewReservation() {},
    handleUpdateReservation() {},
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
        .then(() => {
          console.log("İşlemi Yap");
        })
        .catch(() => {
          console.log("İşlemi Yapma!");
        });
    },
  },
};
</script>
