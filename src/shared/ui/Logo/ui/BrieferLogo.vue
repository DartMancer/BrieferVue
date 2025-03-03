<script setup lang="ts">
import LogoIcon from "@/assets/icons/Other/LogoIcon.vue";
import { BrieferText } from "..";

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
    <LogoIcon
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
