<script setup lang="ts">
import PreviewButton from "./PreviewButton.vue";
import PublishButton from "./PublishButton.vue";
</script>

<template>
  <a-flex class="designer-section-buttons">
    <PreviewButton />
    <PublishButton />
  </a-flex>
</template>

<style lang="scss" scoped>
.designer-section-buttons {
  height: 4%;
  margin-bottom: 2.1vw;
  border: none;
  font-family: "Nunito";
}
</style>
