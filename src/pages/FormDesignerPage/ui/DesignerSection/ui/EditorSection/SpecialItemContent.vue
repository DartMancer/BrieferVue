<script lang="ts" setup>
import { getIconComponent } from "@/shared/utils";
import { BlockSettings } from "@/entities/form";

defineProps<{
  block: BlockSettings;
}>();
</script>

<template>
  <a-flex justify="flex-start" align="center" gap="small">
    <component :is="getIconComponent(block.icon)" class="block-icon" />
    <span class="block-title">{{ block.title }}</span>
  </a-flex>
</template>

<style lang="scss" scoped>
.block-title {
  font-size: 18px;
  text-align: start;
}

.block-icon {
  max-width: 16px;
  max-height: 16px;
  fill: var(--white-color);
  stroke: var(--white-color);
}

@media (max-width: 1280px) {
  .block-title {
    font-size: 16px;
  }

  .block-name {
    font-size: 12px;
  }
}

@media (max-width: 1024px) {
  .block-title {
    font-size: 14px;
  }

  .block-name {
    font-size: 12px;
  }

  .block-icon {
    max-width: 14px;
    max-height: 14px;
  }
}

@media (max-width: 540px) {
  .block-title {
    font-size: 12px;
  }

  .block-name {
    font-size: 10px;
  }

  .block-icon {
    max-width: 12px;
    max-height: 12px;
  }
}
</style>
