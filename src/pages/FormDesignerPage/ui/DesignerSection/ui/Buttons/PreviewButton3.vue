<script setup lang="ts">
import { ref } from "vue";
import { AppBtn } from "@/shared/ui";
import PreviewIcon from "@/assets/icons/Buttons/PreviewIcon.vue";
import { useFormStore, usePreviewStore } from "@/entities/form";
import { PreviewModal } from "@/widgets/Modals";

const store = useFormStore();
const previewStore = usePreviewStore();

const modalVisible = ref<boolean>(false);

const openModal = () => {
  modalVisible.value = true;
  previewStore.initialize(store.formBlocks);
};
</script>

<template>
  <AppBtn class="preview-button" @click="openModal">
    <PreviewIcon /> Предпросмотр
  </AppBtn>
  <PreviewModal v-model:modalVisible="modalVisible" />
</template>

<style lang="scss" scoped>
.preview-button {
  color: var(--accent-color);
  background-color: transparent;
  font-size: 1.1vw;
  margin-right: 1.1vw;
  border-radius: 0.75vw;
  transition: 0.3s ease;

  & svg {
    width: 1.5vw;
    height: 1.5vw;
    fill: var(--accent-color);
  }
}

.preview-button:hover {
  color: var(--white-color);
  background-color: var(--hover-primary-color);
  box-shadow: var(--shadow-btn);

  & svg {
    fill: var(--white-color);
  }
}

.preview-button:active {
  transform: scale(1.1);
}
</style>
