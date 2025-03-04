<script setup lang="ts">
const modalVisible = defineModel<boolean>("modalVisible", { required: true });
</script>

<template>
  <a-modal
    class="custom-modal-preview"
    v-model:open="modalVisible"
    :footer="null"
    centered
  >
  </a-modal>
</template>

<style lang="scss" scoped></style>
