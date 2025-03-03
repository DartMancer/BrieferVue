<script lang="ts" setup>
import { computed } from "vue";

import { isBlockWithVariables } from "@/shared/model";
import { getModalSections } from "@/shared/utils";
import { BlockConfiguration } from "@/entities/form";
import { BlockTitle, VariablesList } from "@/widgets/Modals/BlockSettingsModal";

const tempBlock = defineModel<BlockConfiguration>("tempBlock", {
  required: true,
});

const sectionVisible = computed(
  () => getModalSections(tempBlock.value.settings).hasAnswers
);

const answerSettings = computed(() => {
  return isBlockWithVariables(tempBlock.value.settings)
    ? tempBlock.value.settings
    : null;
});
</script>

<template>
  <a-flex
    v-if="sectionVisible && answerSettings"
    class="answers-section"
    vertical
  >
    <BlockTitle :title="$t.components.placeholder.answersTitle" />

    <VariablesList v-model:variables="answerSettings.variables" />
  </a-flex>
</template>

<style lang="scss" scoped>
.answers-section {
  gap: 10px;
}
</style>
