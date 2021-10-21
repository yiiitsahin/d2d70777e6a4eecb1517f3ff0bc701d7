<template>
  <div class="coupon-code-input d-flex">
    <el-input placeholder="Kupon Kodu" v-model="couponCode"></el-input>
    <el-button type="primary" class="ml-15">Kullan</el-button>
  </div>
</template>

<script>
export default {
  name: "CouponCodeInput",
  data() {
    return {
      couponCode: null,
    };
  },
};
</script>
