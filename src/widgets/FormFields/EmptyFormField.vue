<script setup lang="ts"></script>

<template>
  <a-flex vertical>
    <div class="empty-preview">
      <a-empty />
    </div>
  </a-flex>
</template>

<style lang="scss" scoped>
.empty-preview {
  padding: 2.4vw;
  border: solid 0.15vw var(--accent-color);
  border-top-left-radius: 1vw;
  border-top-right-radius: 1vw;
  background-color: var(--element-color);
}

:deep(.ant-empty-description) {
  color: var(--white-color);
}
</style>
