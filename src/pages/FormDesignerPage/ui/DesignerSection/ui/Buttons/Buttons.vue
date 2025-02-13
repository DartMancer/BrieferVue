<script setup lang="ts">
import PreviewButton from "./PreviewButton.vue";
import PublishButton from "./PublishButton.vue";
</script>

<template>
  <a-flex class="designer-section-buttons">
    <PreviewButton class="preview-button" />
    <PublishButton class="preview-button" />
  </a-flex>
</template>

<style lang="scss" scoped>
.designer-section-buttons {
  height: 40px;
  gap: 24px;

  .preview-button {
    padding: 0 45px;
    font-size: 19px;
    border-radius: 12px;
    transition: 0.3s ease;

    &:hover {
      box-shadow: 0 0 20px var(--primary-color);
    }
  }
}
</style>
