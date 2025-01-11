<script setup lang="ts">
import { ref, computed } from "vue";
import { AppBtn } from "@/shared/ui";
import PreviewIcon from "@/assets/icons/PreviewIcon.vue";
import { useFormStore, usePreviewStore } from "@/entities/form";
import { PreviewModal } from "../../Modals";

const store = useFormStore();
const previewStore = usePreviewStore();

const formBlocks = computed(() => store.formBlocks);

const modalVisible = ref<boolean>(false);

function openModal() {
  modalVisible.value = true;
  previewStore.initialize(formBlocks.value);
}
</script>

<template>
  <AppBtn class="preview-button" @click="openModal">
    <PreviewIcon /> Предпросмотр
    <PreviewModal v-model:modalVisible="modalVisible" />
  </AppBtn>
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

.main-preview-block {
  margin: 7vw;
  margin-bottom: 0;
}

.send-btn {
  width: 16.8vw;
  height: 3.2vw;
  font-size: 1.2vw;
  color: var(--white-color);
  font-family: "Montserrat Alternates";
  background-color: var(--primary-color);
  box-shadow: 0 0 1vw var(--primary-color);
  transition: 0.1s ease-in-out;

  &:hover {
    background-color: var(--hover-primary-color);
    box-shadow: 0 0 1vw var(--hover-primary-color);
  }

  &:active {
    transform: scale(0.95);
  }
}
</style>
