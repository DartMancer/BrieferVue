<script lang="ts" setup>
import { onMounted } from "vue";
import { useFormStore } from "@/entities/form";
import BlocksList from "./BlocksList";
import DesignerSection from "./DesignerSection";

const { initialize } = useFormStore();

onMounted(() => {
  initialize();
});
</script>

<template>
  <a-flex class="form-designer-section">
    <BlocksList />
    <DesignerSection />
  </a-flex>
</template>

<style scoped lang="scss">
.form-designer-section {
  width: 100%;
  padding: 75px 52px;
  gap: 30px;
}
</style>
