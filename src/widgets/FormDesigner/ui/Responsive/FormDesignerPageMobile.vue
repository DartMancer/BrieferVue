<script lang="ts" setup>
import DesignerSection from "../DesignerSections";
import { BlocksListButton, BlocksListMobile } from "../BlocksList";

const listVisible = defineModel<boolean>("listVisible", {
  required: true,
  default: false,
});
</script>

<template>
  <a-flex class="form-designer-section" :gap="listVisible ? 20 : 10" vertical>
    <BlocksListButton v-model:listVisible="listVisible" />
    <BlocksListMobile v-model:listVisible="listVisible" />
    <DesignerSection />
  </a-flex>
</template>

<style scoped lang="scss">
.form-designer-section {
  width: 100%;
  padding: 20px;
  transition: gap 0.2s ease-in-out;
}
</style>
