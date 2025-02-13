<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { TextCombinedType } from "../types";
import { useScreenStore } from "@/app/providers";
import { computed } from "vue";

defineProps<{
  texts: TextCombinedType[];
}>();

const { platform } = storeToRefs(useScreenStore());

const wordsSpace = computed(() => {
  if (platform.value === "desktop") {
    return "8px";
  } else if (platform.value === "laptop") {
    return "6px";
  } else {
    return "4px";
  }
});
</script>

<template>
  <span
    v-for="(content, idx) in texts"
    :class="content.className || ''"
    :style="{ marginRight: idx < texts.length - 1 ? wordsSpace : '0' }"
  >
    {{ content.text }}
  </span>
</template>
