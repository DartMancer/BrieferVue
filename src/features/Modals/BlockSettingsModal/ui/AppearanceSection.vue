<script lang="ts" setup>
import { computed } from "vue";
import { isBlockWithLooks } from "@/shared/model";
import { getModalSections } from "@/shared/utils";
import { BlockConfiguration } from "@/entities/form";
import { BlockTitle } from "@/widgets/Modals/BlockSettingsModal";
import { Select } from "@/widgets/Modals/ModalFields";

const tempBlock = defineModel<BlockConfiguration>("tempBlock", {
  required: true,
});

const sectionVisible = computed(
  () => getModalSections(tempBlock.value.settings).hasAppearance
);

const appearanceSettings = computed(() => {
  return isBlockWithLooks(tempBlock.value.settings)
    ? tempBlock.value.settings
    : null;
});
</script>

<template>
  <a-flex
    v-if="sectionVisible && appearanceSettings"
    class="appearence-section"
    vertical
  >
    <BlockTitle :title="$t.components.placeholder.appearanceTitle" />

    <Select
      name="listLooks"
      v-model:value="appearanceSettings.listLooks"
      :type="tempBlock.type"
      :placeholder="$t.components.placeholder.selectOption"
      :subtitle="$t.components.placeholder.appearanceSubtitle"
      label-in-value
    />
  </a-flex>
</template>

<style lang="scss" scoped>
.appearence-section {
  gap: 10px;
}
</style>
