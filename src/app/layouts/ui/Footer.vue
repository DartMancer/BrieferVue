<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";

import { storeToRefs } from "pinia";

import { useScreenStore } from "@/app/providers/store/screen";

const { platform } = storeToRefs(useScreenStore());

const platforms = {
  desktop: defineAsyncComponent(() => import("@/widgets/Footer/Footer.vue")),
  laptop: defineAsyncComponent(() => import("@/widgets/Footer/Footer.vue")),
  tablet: defineAsyncComponent(
    () => import("@/widgets/Footer/FooterTablet.vue")
  ),
  mobile: defineAsyncComponent(() => import("@/widgets/Footer/Footer.vue")),
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
