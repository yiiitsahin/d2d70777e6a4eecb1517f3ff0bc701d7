<template>
  <div class="radio-select">
    <RoomFeatureSelectItem
      v-for="item in items"
      :item="item"
      :key="`${item.id}-${item.title}`"
      :active="item.id === value"
      :day="day"
      :type="type"
      @itemChanged="handleChange"
    />
  </div>
</template>

<script>
import RoomFeatureSelectItem from "./RoomFeatureSelectItem";
export default {
  name: "RoomFeatureSelect",
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
    items: {
      type: Array,
      default: () => {},
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
  data() {
    return {
      selected: this.value,
    };
  },
  components: {
    RoomFeatureSelectItem,
  },
  methods: {
    handleChange(e) {
      this.$emit("input", e);
    },
  },
};
</script>
