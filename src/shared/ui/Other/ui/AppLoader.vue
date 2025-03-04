<script setup lang="ts">
import LogoIcon from "@/assets/icons/Other/LogoIcon.vue";
</script>

<template>
  <div class="loader-wrapper">
    <LogoIcon class="logo-icon" />
  </div>
</template>

<style lang="scss" scoped>
.loader-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: var(--background-color);

  .logo-icon {
    max-width: 80px;
    max-height: 80px;
    animation: spin 2s ease-in-out infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
