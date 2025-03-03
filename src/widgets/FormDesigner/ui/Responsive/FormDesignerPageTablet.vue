<script lang="ts" setup>
import { BlocksListMobile } from "../BlocksList";
import Buttons from "../DesignerSections/ui/Buttons";
import EditorSection from "../DesignerSections/ui/EditorSection";
</script>

<template>
  <a-flex class="form-designer-section" vertical>
    <a-flex justify="space-between">
      <BlocksListMobile />
      <Buttons />
    </a-flex>
    <EditorSection />
  </a-flex>
</template>

<style scoped lang="scss">
.form-designer-section {
  width: 100%;
  padding: 30px;
  gap: 30px;
}
</style>
