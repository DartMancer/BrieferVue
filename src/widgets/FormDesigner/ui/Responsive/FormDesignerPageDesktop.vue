<script lang="ts" setup>
import DesignerSection from "../DesignerSections";
import { BlocksListDesktop } from "../BlocksList";
</script>

<template>
  <a-flex class="form-designer-section">
    <BlocksListDesktop />
    <DesignerSection />
  </a-flex>
</template>

<style scoped lang="scss">
.form-designer-section {
  width: 100%;
  padding: 40px 50px;
  gap: 40px;
}

.designer-section {
  width: 100%;
  gap: 50px;
}

@media (max-width: 1280px) {
  .form-designer-section {
    gap: 30px;
  }
}

@media (max-width: 1024px) {
}

@media (max-width: 540px) {
  .form-designer-section {
    padding: 20px;
    gap: 20px;
    flex-direction: column;
  }

  .designer-section {
    flex-direction: column-reverse;
    gap: 30px;
  }
}
</style>
