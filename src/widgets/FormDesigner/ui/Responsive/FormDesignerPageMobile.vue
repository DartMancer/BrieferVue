<script lang="ts" setup>
import DesignerSection from "../DesignerSections";
import { BlocksListMobile } from "../BlocksList";
</script>

<template>
  <a-flex class="form-designer-section" vertical>
    <BlocksListMobile />
    <DesignerSection />
  </a-flex>
</template>

<style scoped lang="scss">
.form-designer-section {
  width: 100%;
  padding: 20px;
  gap: 20px;
}
</style>
