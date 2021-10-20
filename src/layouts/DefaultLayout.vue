<template>
  <div class="default-layout">
    <Header />
    <main class="container main__content">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import { Header } from "@/components/layout";

export default {
  name: "DefaultLayout",
  components: {
    Header,
  },
};
</script>
