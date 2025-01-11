<script setup lang="ts">
import { AppBtn } from "@/shared/ui";
</script>

<template>
  <AppBtn class="publish-button"> Создать анкету </AppBtn>
</template>

<style lang="scss" scoped>
.publish-button {
  color: var(--white-color);
  background-color: var(--primary-color);
  font-size: 1.1vw;
  border-radius: 0.75vw;
  transition: 0.3s ease;
}

.publish-button:hover {
  color: var(--white-color);
  background-color: var(--hover-primary-color);
  box-shadow: var(--shadow-btn);
}

.publish-button:active {
  transform: scale(1.1);
}
</style>
