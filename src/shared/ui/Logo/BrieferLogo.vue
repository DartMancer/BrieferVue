<script setup lang="ts">
import BrieferLogoIcon from "@/assets/icons/BrieferLogoIcon.vue";
import { BrieferText } from ".";

const props = withDefaults(
  defineProps<{
    iconSize?: string;
    fontSize?: string;
    color?: string;
  }>(),
  {
    iconSize: "82px",
    fontSize: "40px",
    color: "var(--white-color)",
  }
);
</script>

<template>
  <a-flex align="center">
    <BrieferLogoIcon
      class="logo"
      :style="{
        width: props.fontSize,
        height: props.iconSize,
        fill: props.color,
      }"
    />
    <BrieferText :style="{ color: props.color, fontSize: props.fontSize }" />
  </a-flex>
</template>

<style lang="scss" scoped>
.logo {
  margin-right: 10px;
}
</style>
