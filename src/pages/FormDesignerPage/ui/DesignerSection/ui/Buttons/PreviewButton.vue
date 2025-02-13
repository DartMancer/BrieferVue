<script setup lang="ts">
import { ref, computed } from "vue";
import { AppBtn } from "@/shared/ui";
import PreviewIcon from "@/assets/icons/PreviewIcon.vue";
import { useFormStore, usePreviewStore } from "@/entities/form";
import { PreviewModal } from "@/widgets/Modals";

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

  & svg {
    width: 22px;
    height: 22px;
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
