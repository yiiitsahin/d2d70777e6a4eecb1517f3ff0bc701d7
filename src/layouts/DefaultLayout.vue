<template>
  <div class="default-layout">
    <Header />
    <main class="main__content">
      <div class="container">
        <slot></slot>
      </div>
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
