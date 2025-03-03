<script lang="ts" setup>
import { computed, defineAsyncComponent, onMounted } from "vue";

import { storeToRefs } from "pinia";

import { useScreenStore } from "@/app/providers";
import { useFormStore } from "@/entities/form";

const { platform } = storeToRefs(useScreenStore());
const { initialize } = useFormStore();

const platforms = {
  desktop: defineAsyncComponent(
    () =>
      import("@/widgets/FormDesigner/ui/Responsive/FormDesignerPageDesktop.vue")
  ),
  laptop: defineAsyncComponent(
    () =>
      import("@/widgets/FormDesigner/ui/Responsive/FormDesignerPageDesktop.vue")
  ),
  tablet: defineAsyncComponent(
    () =>
      import("@/widgets/FormDesigner/ui/Responsive/FormDesignerPageTablet.vue")
  ),
  mobile: defineAsyncComponent(
    () =>
      import("@/widgets/FormDesigner/ui/Responsive/FormDesignerPageMobile.vue")
  ),
};

const currentPlatform = computed(() => {
  const platformName = platform.value;
  return platforms[platformName] ?? platforms.desktop;
});

onMounted(() => initialize());
</script>

<template>
  <component :is="currentPlatform" />
</template>
