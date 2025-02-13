<script setup lang="ts">
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <div>
    <Header />
    <div class="main-layout" justify="center">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.main-layout {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding-top: 94px;
  background-color: var(--background-color);
}

@media (max-width: 1280px) {
  .main-layout {
    padding-top: 75px;
  }
}

@media (max-width: 1024px) {
  .main-layout {
    padding-top: 59px;
  }
}

@media (max-width: 540px) {
  .main-layout {
    padding-top: 74px;
  }
}
</style>
