<script lang="ts" setup>
import { computed } from "vue";
import { getModalSections, getModalSettings } from "@/shared/utils";
import { BlockConfiguration } from "@/entities/form";
import {
  BlockTitle,
  ContactsSettings,
  DateSettings,
  DividerSettings,
  FilesSettings,
  LinksSettings,
  NumberSettings,
} from "@/widgets/Modals/BlockSettingsModal";
import { Checkbox } from "@/widgets/Modals/ModalFields";

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
    v-if="(sectionVisible && !tempBlock.isSpecial) || settingsVisible.isDivider"
    class="settings-section"
    vertical
  >
    <BlockTitle :title="$t.components.placeholder.settingsTitle" />

    <a-flex :gap="20" vertical>
      <Checkbox
        v-if="!tempBlock.isSpecial"
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
</style>
