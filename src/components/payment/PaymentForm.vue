<template>
  <div ref="form" class="payment-form">
    <CreditCardPreview />

    <div class="payment-form__row">
      <div class="payment-form__label required">Kartın Üzerindeki İsim</div>
      <el-input
        v-model="card_name"
        placeholder="Kartın üzerindeki ismi giriniz"
      ></el-input>
    </div>

    <div class="payment-form__row">
      <div class="payment-form__label required">Kartın Numarası</div>
      <el-input
        v-model="card_number"
        v-mask="'#### #### #### ####'"
        placeholder="Kartın numarasını giriniz"
      ></el-input>
    </div>

    <div class="payment-form__row d-flex">
      <div>
        <div class="payment-form__label required">Kart Son Kullanma Tarihi</div>
        <div class="d-flex">
          <el-select v-model="card_date_month" placeholder="Ay">
            <el-option
              v-for="item in 12"
              :key="item"
              :label="item"
              :value="`${item.toString().padStart(2, 0)}`"
            >
            </el-option>
          </el-select>
          <el-select v-model="card_date_year" placeholder="Yıl" class="ml-15">
            <el-option
              v-for="item in yearOptions"
              :key="item"
              :label="item"
              :value="`${item}`"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="ml-15">
        <div class="payment-form__label required">CVV</div>
        <el-input
          v-model="card_cvv"
          v-mask="'###'"
          placeholder="CVV"
        ></el-input>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import CreditCardPreview from "@/components/payment/CreditCardPreview";
export default {
  name: "PaymentForm",
  components: {
    CreditCardPreview,
  },
  computed: {
    ...mapGetters({
      cardInfo: "payment/cardInfo",
      cardFormattedNo: "payment/cardFormattedNo",
    }),
    card_number: {
      get() {
        return this.cardFormattedNo;
      },
      set(value) {
        this.setCardNumber(value);
      },
    },
    card_date_month: {
      get() {
        return this.cardInfo.card_date_month;
      },
      set(value) {
        this.setCardDateMonth(value);
      },
    },
    card_date_year: {
      get() {
        return this.cardInfo.card_date_year;
      },
      set(value) {
        this.setCardDateYear(value);
      },
    },
    card_cvv: {
      get() {
        return this.cardInfo.card_cvv;
      },
      set(value) {
        this.setCardCvv(value);
      },
    },
    card_name: {
      get() {
        return this.cardInfo.card_name;
      },
      set(value) {
        this.setCardName(value);
      },
    },
    yearOptions() {
      const currentYear = new Date().getFullYear();
      const temp = [];
      for (let i = 0; i < 10; i++) {
        temp.push(currentYear + i);
      }
      return temp;
    },
  },
  methods: {
    ...mapMutations({
      setCardNumber: "payment/setCardNumber",
      setCardDateYear: "payment/setCardDateYear",
      setCardDateMonth: "payment/setCardDateMonth",
      setCardCvv: "payment/setCardCvv",
      setCardName: "payment/setCardName",
      clearCardFields: "payment/clearCardFields",
    }),
  },
};
</script>
