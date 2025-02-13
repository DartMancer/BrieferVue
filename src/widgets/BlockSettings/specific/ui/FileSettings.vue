<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useFormStore, FileType } from "@/entities/form";
import FileSettingContent from "./FileSettingContent.vue";

const props = defineProps<{
  modalVisible: boolean;
  currentIndex: number;
}>();

const store = useFormStore();

const currentBlock = computed(() => store.formBlocks[props.currentIndex]);

const maxSize = ref<number>(currentBlock.value?.fileModel?.maxSize || 20);
const maxFiles = ref<number>(currentBlock.value?.fileModel?.maxFiles || 20);

watch(
  () => props.modalVisible,
  (newVal) => {
    if (newVal) {
      maxSize.value = currentBlock.value?.fileModel?.maxSize || 20;
      maxFiles.value = currentBlock.value?.fileModel?.maxFiles || 20;
    }
  },
  { immediate: true }
);

watch(
  () => [maxSize.value, maxFiles.value],
  ([newSizeValue, nevFilesValue]) => {
    const newFileModel = <FileType>{ newSizeValue, nevFilesValue };
    if (store.tempBlock?.fileModel) {
      store.tempBlock.fileModel = newFileModel;
      store.tempBlock.fileModel.maxSize = newSizeValue;
      store.tempBlock.fileModel.maxFiles = nevFilesValue;
    }
  }
);
</script>

<template>
  <a-flex vertical gap="middle">
    <FileSettingContent
      title="Максимальный размер всех файлов, МБ"
      v-model:value="maxSize"
    />
    <FileSettingContent
      title="Максимальное количество файлов"
      v-model:value="maxFiles"
    />
  </a-flex>
</template>
