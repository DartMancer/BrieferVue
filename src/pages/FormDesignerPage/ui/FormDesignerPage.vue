<script lang="ts" setup>
import { computed, defineAsyncComponent, onMounted, ref } from "vue";

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

const listVisible = ref<boolean>(false);

const currentPlatform = computed(() => {
  const platformName = platform.value;
  return platforms[platformName] ?? platforms.desktop;
});

onMounted(() => initialize());
</script>

<template>
  <component :is="currentPlatform" v-model:listVisible="listVisible" />
</template>
