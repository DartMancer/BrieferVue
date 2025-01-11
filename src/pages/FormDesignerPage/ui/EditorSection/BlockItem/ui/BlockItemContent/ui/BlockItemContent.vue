<script lang="ts" setup>
import { getIconComponent } from "@/shared/utils";
import { GeneralSettingsType } from "@/entities/form";

const props = defineProps<{
  element: GeneralSettingsType;
  index: number;
}>();
</script>

<template>
  <a-flex vertical justify="flex-start">
    <p class="block-title">
      {{ props.element.title }}
    </p>
    <a-flex horizontal justify="flex-start" align="center" gap="small">
      <component
        :is="getIconComponent(props.element.icon)"
        class="block-icon"
      />
      <p class="block-name">
        {{ props.element.subtitle }}
      </p>
    </a-flex>
  </a-flex>
</template>

<style lang="scss" scoped>
.block-title {
  font-size: 1vw;
  margin: 0;
  text-align: start;
}

.block-name {
  font-size: 0.7vw;
  color: var(--accent-color);
  text-align: start;
  margin: 0;
}

.block-icon {
  max-width: 0.7vw;
  max-height: 0.7vw;
  fill: var(--accent-color);
  stroke: var(--accent-color);
}
</style>
