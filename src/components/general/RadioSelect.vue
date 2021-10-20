<template>
  <div class="radio-select">
    RadioSelectItem
    <RadioSelectItem
      v-for="item in items"
      :key="item.id"
      @itemChanged="handleChange"
    />
  </div>
</template>

<script>
import RadioSelectItem from "./RadioSelectItem";
export default {
  name: "RadioSelect",
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
    items: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {
      selected: this.value,
    };
  },
  components: {
    RadioSelectItem,
  },
  methods: {
    handleChange(e) {
      this.$emit("input", e);
    },
  },
};
</script>
