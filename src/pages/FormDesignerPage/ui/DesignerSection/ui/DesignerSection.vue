<script lang="ts" setup>
import { Buttons, EditorSection } from ".";
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
</style>
