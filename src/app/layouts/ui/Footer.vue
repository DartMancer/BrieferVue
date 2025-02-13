<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useScreenStore } from "@/app/providers/store/screen";
import { computed, defineAsyncComponent } from "vue";

const { platform } = storeToRefs(useScreenStore());

const platforms = {
  desktop: defineAsyncComponent(
    () => import("@/widgets/Footer/FooterDesktop.vue")
  ),
  laptop: defineAsyncComponent(
    () => import("@/widgets/Footer/FooterDesktop.vue")
  ),
  tablet: defineAsyncComponent(
    () => import("@/widgets/Footer/FooterTablet.vue")
  ),
  mobile: defineAsyncComponent(
    () => import("@/widgets/Footer/FooterMobile.vue")
  ),
};

const currentPlatform = computed(() => {
  const platformName = platform.value;
  return platforms[platformName] ?? platforms.desktop;
});
</script>

<template>
  <footer>
    <component :is="currentPlatform" />
  </footer>
</template>
