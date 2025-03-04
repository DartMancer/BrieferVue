<script setup lang="ts">
import PreviewButton from "./PreviewButton.vue";
import PublishButton from "./PublishButton.vue";
</script>

<template>
  <a-flex class="designer-section-buttons">
    <PreviewButton class="designer-section-btn" />
    <PublishButton class="designer-section-btn publish" />
  </a-flex>
</template>

<style lang="scss" scoped>
.designer-section-buttons {
  gap: 40px;

  .designer-section-btn {
    display: flex;
    padding: 8px 45px;
    border: none;
    border-radius: 12px;
    background-color: var(--background-color);
    transition: 0.3s ease-in-out;

    &.publish {
      background-color: var(--primary-color);
    }

    &:hover {
      background-color: var(--hover-primary-color);
      box-shadow: 0 0 20px var(--hover-primary-color);
    }

    &:active {
      transform: scale(0.95);
    }
  }
}

@media (max-width: 1280px) {
  .designer-section-buttons {
    .designer-section-btn {
      padding: 8px 30px;
      border-radius: 11px;
    }
  }
}

@media (max-width: 1024px) {
  .designer-section-buttons {
    gap: 15px;

    .designer-section-btn {
      padding: 8px 20px;
      border-radius: 10px;
      background-color: var(--element-color);
    }
  }
}

@media (max-width: 540px) {
  .designer-section-buttons {
    width: 100%;
    flex-direction: column;
    gap: 10px;

    .designer-section-btn {
      border-radius: 8px;
    }
  }
}
</style>
