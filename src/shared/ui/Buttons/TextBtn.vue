<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    disabled?: boolean;
  }>(),
  {
    disabled: false,
  }
);
</script>

<template>
  <button type="submit" class="btn" :disabled="props.disabled">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.btn {
  background-color: transparent;
  padding: none;
  border: none;
  cursor: pointer;
  font-size: 0.8vw;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5vw;

  &.error-btn {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    color: var(--error-color);
  }
}
</style>
