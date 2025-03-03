<script setup lang="ts">
import { SectionTitle } from "../../";
import UsefullItems from "./UsefullItems.vue";
</script>

<template>
  <a-flex justify="center">
    <SectionTitle :title="$t.pages.main.usefull.usefulFor" />
  </a-flex>

  <a-flex class="items">
    <UsefullItems />
  </a-flex>
</template>

<style lang="scss" scoped>
.items {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  align-items: center;
  justify-content: center;
}
</style>
