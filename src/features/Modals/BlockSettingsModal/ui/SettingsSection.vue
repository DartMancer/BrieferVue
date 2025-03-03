<script lang="ts" setup>
import { BlockConfiguration } from "@/entities/form";
import { getModalSections, getModalSettings } from "@/shared/utils";
import {
  BlockTitle,
  Checkbox,
  ContactsSettings,
  DateSettings,
  DividerSettings,
  FilesSettings,
  LinksSettings,
  NumberSettings,
} from "@/widgets/Modals/BlockSettingsModal";
import { computed } from "vue";

const tempBlock = defineModel<BlockConfiguration>("tempBlock", {
  required: true,
});

const sectionVisible = computed(
  () => getModalSections(tempBlock.value.settings).hasSettings
);

const settingsVisible = computed(() =>
  getModalSettings(tempBlock.value.settings)
);
</script>

<template>
  <a-flex
    v-if="sectionVisible || settingsVisible.isDivider"
    class="settings-section"
    vertical
  >
    <BlockTitle :title="$t.components.placeholder.settingsTitle" />

    <a-flex :gap="20" vertical>
      <Checkbox
        v-if="settingsVisible.isRequired"
        v-model:checked="tempBlock.requiredField"
        name="requiredField"
        :label="$t.components.buttons.block.requiredQuestion"
      />

      <DividerSettings v-model:tempBlock="tempBlock" />

      <NumberSettings v-model:tempBlock="tempBlock" />

      <ContactsSettings v-model:tempBlock="tempBlock" />

      <LinksSettings v-model:tempBlock="tempBlock" />

      <DateSettings v-model:tempBlock="tempBlock" />

      <FilesSettings v-model:tempBlock="tempBlock" />
    </a-flex>
  </a-flex>
</template>

<style lang="scss" scoped>
.settings-section {
  gap: 10px;
}

:deep(.ant-form-item) {
  margin: 0;
}
</style>
