<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useScreenStore } from "@/entities/screen";
import Header from "./Header.vue";
import MobileVersion from "./MobileVersion.vue";

const screenStore = useScreenStore();
const { platform } = storeToRefs(screenStore);
</script>

<template>
  <a-flex v-if="platform === 'desktop'" justify="center">
    <Header />
    <a-flex class="main-layout" justify="center" align="center">
      <slot></slot>
    </a-flex>
  </a-flex>
  <a-flex v-else justify="center">
    <MobileVersion />
  </a-flex>
</template>

<style lang="scss" scoped>
.main-layout {
  position: relative;
  overflow: auto;
  width: 100%;
  min-height: 100vh;
  padding-left: 3.5vw;
  padding-right: 3.5vw;
  background-color: var(--background-color);
}
</style>
