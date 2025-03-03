<script lang="ts" setup>
import { computed } from "vue";

import { getModalSections } from "@/shared/utils";
import { BlockConfiguration } from "@/entities/form";
import {
  AddButtons,
  BlockTitle,
  Input,
} from "@/widgets/Modals/BlockSettingsModal";

const tempBlock = defineModel<BlockConfiguration>("tempBlock", {
  required: true,
});

const sectionVisible = computed(
  () => getModalSections(tempBlock.value.settings).hasEdit
);
</script>

<template>
  <a-flex v-if="sectionVisible" class="edit-section" vertical>
    <BlockTitle
      :title="$t.components.placeholder.editQuestion"
      :blockIcon="tempBlock.icon"
      :blockTitle="tempBlock.blockTitle"
    />

    <a-flex vertical>
      <Input
        v-model:value="tempBlock.question"
        name="question"
        :title="$t.components.placeholder.question"
        :placeholder="$t.components.placeholder.enterQuestion"
      />

      <AddButtons v-model:tempBlock="tempBlock" />
    </a-flex>
  </a-flex>
</template>

<style lang="scss" scoped>
.edit-section {
  gap: 10px;
}
</style>
