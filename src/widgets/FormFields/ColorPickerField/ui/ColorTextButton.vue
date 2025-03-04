<script setup lang="ts">
// import { AppBtn } from "@/shared/ui/Buttons";

defineProps<{
  index: number;
  color: string;
  backColor: string;
}>();

// const emit = defineEmits<{
//   (e: "openColorPicker"): void;
// }>();
</script>

<template>
  <!-- <AppBtn
    class="color-name"
    :style="{ color: backColor }"
    @click="emit('openColorPicker')"
    >{{ color }}
  </AppBtn> -->
</template>

<style lang="scss" scoped>
.color-name {
  padding: 0 1.2vw;
  margin: 0;
  font-size: 1vw;
  font-weight: bold;
  font-family: "Montserrat Alternates";
  margin-bottom: 1vw;
}
</style>
