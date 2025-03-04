<script setup lang="ts">
import { SectionTitle } from "@/widgets/MainPageSections";
import ConnectUs from "./ConnectUs.vue";
import CostItem from "./CostItem.vue";
</script>

<template>
  <a-flex class="cost-section" justify="center" vertical>
    <SectionTitle :title="$t.pages.main.cost.pricing" />
    <a-flex class="cost-items" justify="center">
      <CostItem v-for=" in 2" />
    </a-flex>
    <ConnectUs />
  </a-flex>
</template>

<style lang="scss" scoped>
.cost-items {
  gap: 30px;
}

@media (max-width: 540px) {
  .cost-section {
    padding: 0 20px;

    .cost-items {
      flex-direction: column;
    }
  }
}
</style>
