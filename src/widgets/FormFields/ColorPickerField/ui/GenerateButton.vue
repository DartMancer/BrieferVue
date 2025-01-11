<script setup lang="ts">
const emit = defineEmits<{
  (e: "generatePalette"): void;
}>();
</script>

<template>
  <a-flex class="controls" justify="center" align="center">
    <button class="generate-btn" @click="emit('generatePalette')">
      Генерировать палитру
    </button>
  </a-flex>
</template>

<style lang="scss" scoped>
.generate-btn {
  cursor: pointer;
  color: var(--accent-color);
  padding: 0.5vw 2vw;
  margin-top: 1vw;
  border-radius: 0.5vw;
  background-color: transparent;
  border: solid 0.15vw var(--accent-color);
  transition: 0.2s ease-in-out;

  &:hover {
    color: var(--white-color);
    background-color: var(--hover-primary-color);
    border-color: var(--hover-primary-color);
    box-shadow: 0 0 0.5vw var(--primary-color);
    transform: scale(1.1);
  }
}
</style>
