<template>
  <header class="main-header">
    <div class="container main-header__container">
      <div class="logo">
        <img src="@/assets/images/hotel-logo.svg" alt="Hotel Logo" />
      </div>
      <div class="main-header__actions">
        <el-button type="primary" size="mini" @click="resumeApp"
          >Yeni Rezervasyon Yap</el-button
        >
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Header",
  methods: {
    ...mapActions({
      resumeApp: "reservations/ResumeApp",
    }),
  },
};
</script>
