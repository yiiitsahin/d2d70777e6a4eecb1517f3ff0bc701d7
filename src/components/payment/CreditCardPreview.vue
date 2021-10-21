<template>
  <div class="credit-card-preview">
    <div class="credit-card-preview__card">
      <div class="credit-card-preview__card-image">
        <img src="@/assets/images/hotel-logo.svg" alt="Hotel Logo" />
      </div>
      <div class="credit-card-preview__card-info">
        <div class="credit-card-preview__card-number">
          <div class="credit-card-preview__label">KART NO</div>
          {{ cardFormattedNo || "---- ---- ---- ----" }}
        </div>
        <div class="credit-card-preview__card-name">
          {{ cardInfo.card_name || "_________" }}
        </div>
        <div class="credit-card-preview__card-dates">
          <span class="credit-card-preview__label mr-10">VALID THRU</span>
          <span
            >{{ cardInfo.card_date_month || "--" }} /
            {{ cardInfo.card_date_year || "----" }}</span
          >
        </div>
        <div class="credit-card-preview__card-cvv mt-5">
          <span class="credit-card-preview__label mr-10">CVV</span>
          <span>{{ cardInfo.card_cvv || "---" }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CreditCardPreview",
  computed: {
    ...mapGetters({
      cardInfo: "payment/cardInfo",
      cardFormattedNo: "payment/cardFormattedNo",
    }),
  },
};
</script>
