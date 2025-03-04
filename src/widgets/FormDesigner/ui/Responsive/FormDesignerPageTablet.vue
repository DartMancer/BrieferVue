<script lang="ts" setup>
import { BlocksListButton, BlocksListMobile } from "../BlocksList";
import Buttons from "../DesignerSections/ui/Buttons";
import EditorSection from "../DesignerSections/ui/EditorSection";

const listVisible = defineModel<boolean>("listVisible", {
  required: true,
  default: false,
});
</script>

<template>
  <a-flex class="form-designer-section" :gap="listVisible ? 30 : 15" vertical>
    <a-flex justify="space-between">
      <BlocksListButton v-model:listVisible="listVisible" />
      <Buttons />
    </a-flex>
    <BlocksListMobile v-model:listVisible="listVisible" />
    <EditorSection />
  </a-flex>
</template>

<style scoped lang="scss">
.form-designer-section {
  width: 100%;
  padding: 30px;
  transition: gap 0.2s ease-in-out;
}
</style>
