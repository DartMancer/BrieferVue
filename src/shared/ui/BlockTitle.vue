<script lang="ts" setup>
import { getIconComponent } from "@/shared/utils";

const props = defineProps<{
  title: string;
  blockIcon?: string;
  subtitle?: string;
}>();
</script>

<template>
  <div class="custom-modal">
    <p>{{ props.title }}</p>
    <a-flex align="center">
      <component
        :is="getIconComponent(props.blockIcon)"
        class="custom-modal-icon"
      />
      <p class="custom-modal-name">{{ props.subtitle }}</p>
    </a-flex>
  </div>
</template>

<style lang="scss">
.custom-modal {
  & p {
    font-size: 1.5vw;
    margin-bottom: 0.3vw;
    font-weight: bold;
    color: var(--white-color);
    font-family: "Montserrat Alternates";
  }

  & .custom-modal-name {
    margin: 0;
    font-size: 0.8vw;
    color: var(--accent-color);
    font-family: "Montserrat Alternates";
    font-weight: 400;
  }

  & .custom-modal-icon {
    max-width: 1.3vw;
    max-height: 1.3vw;
    fill: var(--accent-color);
    stroke: var(--accent-color);
    margin-right: 10px;
  }
}
</style>
