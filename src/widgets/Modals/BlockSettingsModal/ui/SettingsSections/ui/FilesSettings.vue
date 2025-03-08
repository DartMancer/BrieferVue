<script lang="ts" setup>
import { computed } from "vue";
import { isFileBlockSettings } from "@/shared/model";
import { BlockConfiguration, FileBlockSettings } from "@/entities/form";
import { filesRules } from "@/features/Modals/BlockSettingsModal";
import { NumberInput } from "@/widgets/Modals/ModalFields";

const tempBlock = defineModel<BlockConfiguration>("tempBlock", {
  required: true,
});

const settings = computed(() => {
  return isFileBlockSettings(tempBlock.value.settings)
    ? (tempBlock.value.settings as FileBlockSettings)
    : null;
});
</script>

<template>
  <a-flex class="file-settings" vertical>
    <NumberInput
      v-if="settings"
      class="file-input"
      v-model:value="settings.maxSize"
      :name="['settings', 'maxSize']"
      :subtitle="$t.components.placeholder.fileSizeSubtitle"
      :placeholder="$t.components.placeholder.enterNumber"
      :min="0"
      :max="20"
      :rules="filesRules.maxSize"
    />
    <NumberInput
      v-if="settings"
      class="file-input"
      v-model:value="settings.maxFiles"
      :name="['settings', 'maxFiles']"
      :subtitle="$t.components.placeholder.fileCountSubtitle"
      :placeholder="$t.components.placeholder.enterNumber"
      :min="0"
      :max="20"
      :rules="filesRules.maxFiles"
    />
  </a-flex>
</template>

<style lang="scss" scoped>
.file-settings {
  gap: 15px;

  .file-input {
    width: 100%;
  }
}
</style>
