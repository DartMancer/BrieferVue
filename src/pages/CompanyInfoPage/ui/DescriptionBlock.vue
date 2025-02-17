<script setup lang="ts">
import { BrieferLogo } from "@/shared/ui";
</script>

<template>
  <a-flex vertical justify="space-evenly" class="description">
    <BrieferLogo iconSize="5vw" fontSize="4vw" />
    <p class="description__text">
      {{ $t.pages.companyInfo.brieferDescription }}
    </p>
  </a-flex>
</template>

<style lang="scss" scoped>
.description {
  width: 35vw;

  &__text {
    text-align: start;
    font-size: 1.3vw;
  }
}
</style>
