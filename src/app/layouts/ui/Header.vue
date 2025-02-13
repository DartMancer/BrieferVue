<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useScreenStore } from "@/app/providers/store/screen";
import { computed, defineAsyncComponent } from "vue";

const { platform } = storeToRefs(useScreenStore());

const platforms = {
  desktop: defineAsyncComponent(
    () => import("@/widgets/Header/HeaderDesktop.vue")
  ),
  laptop: defineAsyncComponent(
    () => import("@/widgets/Header/HeaderLaptop.vue")
  ),
  tablet: defineAsyncComponent(
    () => import("@/widgets/Header/HeaderTablet.vue")
  ),
  mobile: defineAsyncComponent(
    () => import("@/widgets/Header/HeaderMobile.vue")
  ),
};

const currentPlatform = computed(() => {
  const platformName = platform.value;
  return platforms[platformName] ?? platforms.desktop;
});
</script>

<template>
  <header>
    <component :is="currentPlatform" />
  </header>
</template>
