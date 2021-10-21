<template>
  <div class="coupon-code-input d-flex">
    <el-input placeholder="Kupon Kodu" v-model="couponCode"></el-input>
    <el-button
      type="primary"
      class="ml-15"
      @click="handleUseCoupon"
      :disabled="!couponCode"
      >Kodu Kullan</el-button
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { getDayDiff } from "@/helpers";

export default {
  name: "CouponCodeInput",
  data() {
    return {
      couponCode: null,
    };
  },
  methods: {
    ...mapActions({
      getCoupon: "hotels/GetCoupon",
      setCoupon: "hotels/SetCoupon",
    }),
    validateCoupon(coupon) {
      const expirationDate = coupon.expiration_at;
      const remainingTime = getDayDiff(expirationDate);
      const formattedExpirationDate =
        this.$dayjs(expirationDate).format("DD.MM.YYYY");
      if (remainingTime > 0) {
        this.setCoupon(coupon);
        this.$notify.success({
          title: "İndirim Uygulandı",
          message: `Girdiğiniz kupon koduyla toplam tutara ${coupon.discount_ammount} TL indirim uygulanmıştır.`,
        });
        this.couponCode = null;
      } else {
        this.$notify.warning({
          title: "Tarihi Geçmiş Kupon Kodu",
          message: `Girdiğiniz kupon kodu ${formattedExpirationDate} tarihi ile geçerliliğini yitirmiştir.`,
        });
        this.couponCode = null;
      }
    },
    async handleUseCoupon() {
      const code = this.couponCode;
      if (code) {
        const coupon = await this.getCoupon(code);
        if (coupon.length === 1) {
          this.validateCoupon(coupon[0]);
        } else {
          this.$notify.warning({
            title: "Kupon Bulunamadı",
            message:
              "Girdiğiniz kupon kodu bulunamadı veya birden çok kupon ile eşleşti, lütfen girdiğiniz kodu kontrol ediniz.",
          });
          this.couponCode = null;
        }
      }
    },
  },
};
</script>
