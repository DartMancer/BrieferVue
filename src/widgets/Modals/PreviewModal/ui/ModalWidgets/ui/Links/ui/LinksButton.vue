<script lang="ts" setup>
defineProps<{ disabled?: boolean; condition?: boolean }>();
</script>

<template>
  <a-button
    v-if="condition"
    :class="['link-btn', { disabled: disabled }]"
    :disabled="disabled"
    type="text"
    shape="circle"
  >
    <slot />
  </a-button>
</template>

<style lang="scss" scoped>
.link-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--accent-color);
  transition: 0.2s ease-in-out;

  :deep(.btn-icon) {
    max-width: 14px;
    max-height: 14px;
    fill: var(--accent-color);
    transition: 0.2s ease-in-out;
  }

  &.disabled {
    border-color: var(--disabled-color);

    :deep(.btn-icon) {
      fill: var(--disabled-color);
    }
  }

  &.delete {
    border-color: var(--error-color);

    :deep(.btn-icon) {
      fill: var(--error-color);
    }
  }

  &:hover:not(.disabled) {
    border-color: var(--hover-accent-color);

    :deep(.btn-icon) {
      fill: var(--hover-accent-color);
    }

    &.delete {
      border-color: var(--hover-error-color);

      :deep(.btn-icon) {
        fill: var(--hover-error-color);
      }
    }
  }

  &:active {
    transform: scale(0.95);
  }
}
</style>
