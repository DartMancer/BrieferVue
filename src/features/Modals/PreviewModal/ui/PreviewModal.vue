<script setup lang="ts">
import { storeToRefs } from "pinia";

import { usePreviewStore } from "@/entities/form";
import EmptyForm from "./EmptyForm.vue";
import PreviewForm from "./PreviewForm.vue";

const { formFields } = storeToRefs(usePreviewStore());

const modalVisible = defineModel<boolean>("modalVisible", { required: true });
</script>

<template>
  <a-modal
    class="custom-modal-preview"
    v-model:open="modalVisible"
    :footer="null"
    :autoFocusButton="null"
    destroyOnClose
    centered
  >
    <PreviewForm v-if="formFields.length" />
    <EmptyForm v-else v-model:modalVisible="modalVisible" />
  </a-modal>
</template>

<style lang="scss" scoped>
.fields-form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 60px;
}

@media (max-width: 1024px) {
  .fields-form {
    gap: 40px;
  }
}

@media (max-width: 540px) {
  .fields-form {
    gap: 20px;
  }
}
</style>
