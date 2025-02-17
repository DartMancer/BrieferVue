<script setup lang="ts">
import { SectionTitle } from "../../";
import UsefullItems from "./UsefullItems.vue";
</script>

<template>
  <a-flex justify="center">
    <SectionTitle :title="$t.pages.main.usefullTitle" />
  </a-flex>

  <a-flex class="items" vertical>
    <UsefullItems />
  </a-flex>
</template>

<style lang="scss" scoped>
@media (max-width: 1024px) {
  .items {
    display: grid;
    gap: 50px;
    // grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
}
</style>
