<template>
  <div class="radio-select__item" :class="{ active }" @click="handleSelect">
    <div class="radio-select__item-wrapper">
      <div class="radio-select__item-image" v-if="item.photo">
        <img :src="item.photo" :alt="item.title" />
      </div>
      <div class="radio-select__item-container">
        <div class="radio-select__item-title">{{ item.title }}</div>
        <div class="radio-select__item-info">
          <template v-if="type === 'room_type'">
            <div class="radio-select__item-info-text">
              <div v-if="day">{{ day }} gün</div>
              <div>{{ formValues.adult }} Yetişkin</div>
            </div>
            <div class="radio-select__item-info-number">
              {{ totalPrice }}
              <FontAwesomeIcon :icon="['fas', 'lira-sign']" size="xs" />
            </div>
          </template>
          <template v-else>
            <div class="radio-select__item-info-text">
              <div>Fiyata Etki Oranı</div>
            </div>
            <div
              class="radio-select__item-info-number"
              v-if="type === 'room_scenic'"
            >
              +{{ item.price_rate }}%
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "RoomFeatureSelectItem",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    active: {
      type: Boolean,
      default: false,
    },
    day: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      default: "room_type",
    },
  },
  computed: {
    ...mapGetters({
      formValues: "reservations/formValues",
    }),
    totalPrice() {
      if (this.item && this.item.price) {
        const day = this.day;
        const personCount = this.formValues.adult;
        const price = this.item.price;
        return day * price * personCount;
      }
      return 0;
    },
  },
  methods: {
    handleSelect() {
      this.$emit("itemChanged", this.item.id);
    },
  },
};
</script>
