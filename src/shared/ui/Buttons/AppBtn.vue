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
  padding: 0.6vw 1.5vw;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.8vw;
  height: 2.5vw;
  font-weight: 600;
  transition: box-shadow 0.3s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  &:hover {
    box-shadow: 0px 0px 0px 9999px rgba(0, 0, 0, 0.2) inset;
  }

  &.full-w {
    width: 100%;
  }

  &.cancel {
    background-color: #d0d0d0;
  }

  &.dangerBgDark {
    background-color: var(--bg-danger-dark);
  }

  &.shadow {
    box-shadow: var(--shadow-btn);
  }

  &.text {
    background-color: transparent;
  }

  &.white {
    color: #fff;
  }
}
</style>
