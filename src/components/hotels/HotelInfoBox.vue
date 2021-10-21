<template>
  <div>
    <div class="selected-hotel-detail-info__box">
      <div
        class="selected-hotel-detail-info__box-item"
        v-for="item in items"
        :key="item.title"
      >
        <div>
          <div>
            <b>{{ item.title }}</b>
          </div>
          <div>
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
    <div class="hotel-info-card" v-if="!hideCouponCode">
      <CouponInput />
    </div>
    <div class="hotel-info-card">
      <ul class="price-info-list">
        <li>
          <span><b>Oda Fiyatı</b></span
          ><span class="d-flex align-center"
            >{{ hotelProperties.roomPrice || 0 }} TL
          </span>
        </li>
        <li>
          <span><b>Fiyat Etki Oranı</b></span
          ><span>%{{ hotelProperties.priceRate || 0 }}</span>
        </li>
        <li>
          <span
            ><b>Konaklama</b> ({{ hotelProperties.reservationDays }} gün,
            {{ hotelProperties.adultCount }} yetişkin)</span
          ><span>{{ hotelProperties.accommodationPrice || 0 }} TL</span>
        </li>
        <li class="text-green" v-if="hotelProperties.discount">
          <span><b>İndirim</b> ({{ hotelProperties.coupon.code }})</span
          ><span>-{{ hotelProperties.discount }} TL</span>
        </li>
      </ul>
      <div class="price-info-list__total">
        <div>Toplam Tutar</div>
        <div>
          <b>{{ hotelProperties.totalPrice || 0 }} TL</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CouponInput from "@/components/hotels/CouponInput";
import { mapGetters } from "vuex";

export default {
  name: "HotelInfoBox",
  props: {
    hideCouponCode: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    CouponInput,
  },
  computed: {
    ...mapGetters({
      formValues: "reservations/formValues",
      hotelInfo: "hotels/savedHotelDetails",
      hotelProperties: "hotels/properties",
      reservationDays: "reservations/reservationDays",
    }),
    items() {
      return [
        {
          title: "Giriş Tarihi",
          content: this.$dayjs(this.hotelProperties.startDate).format(
            "DD MMMM YYYY"
          ),
        },
        {
          title: "Çıkış Tarihi",
          content: this.$dayjs(this.hotelProperties.endDate).format(
            "DD MMMM YYYY"
          ),
        },
        {
          title: "Yetişkin",
          content: this.hotelProperties.adultCount,
        },
        {
          title: "Çocuk",
          content: this.hotelProperties.childCount,
        },
        {
          title: "Oda Tipi",
          content:
            this.hotelProperties.roomType &&
            this.hotelProperties.roomType.title,
        },
        {
          title: "Manzara",
          content:
            this.hotelProperties.roomType &&
            this.hotelProperties.sceneType.title,
        },
      ];
    },
  },
};
</script>
