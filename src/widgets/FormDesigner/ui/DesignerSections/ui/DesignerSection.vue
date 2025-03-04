<script lang="ts" setup>
import Buttons from "./Buttons";
import EditorSection from "./EditorSection";
</script>

<template>
  <a-flex class="designer-section" align="flex-end" vertical>
    <Buttons />
    <EditorSection />
  </a-flex>
</template>

<style scoped lang="scss">
.designer-section {
  width: 100%;
  gap: 50px;
}

@media (max-width: 540px) {
  .designer-section {
    flex-direction: column-reverse;
    gap: 30px;
  }
}
</style>
