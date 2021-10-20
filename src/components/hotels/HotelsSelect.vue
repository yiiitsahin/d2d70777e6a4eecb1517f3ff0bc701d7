<template>
  <div class="hotels-select">
    <el-select
      v-model="selectedHotel"
      filterable
      placeholder="Rezervasyon yapmak istediğiniz oteli seçiniz"
      clearable
      @change="handleChange"
    >
      <el-option
        v-for="item in hotels"
        :key="item.id"
        :label="item.hotel_name"
        :value="+item.id"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HotelsSelect",
  props: {
    value: {
      type: [Number, String],
      default: null,
    },
  },
  data() {
    return {
      selectedHotel: this.value,
    };
  },
  watch: {
    value(val) {
      this.selectedHotel = val;
    },
  },
  computed: {
    ...mapGetters({
      hotels: "hotels/hotels",
      hotelsDetails: "hotels/hotelsDetails",
    }),
  },
  methods: {
    handleChange(selectedHotel) {
      this.$emit("input", selectedHotel);
      this.$emit("change", selectedHotel);
    },
  },
};
</script>
