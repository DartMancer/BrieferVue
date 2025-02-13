<script setup lang="ts">
import { BlockTitle } from "@/shared/ui";

const props = defineProps<{
  label: string;
}>();

const isChecked = defineModel("isChecked");
</script>

<template>
  <a-flex class="question-settngs" vertical>
    <BlockTitle :title="'Настройки'" />
    <a-checkbox v-model:checked="isChecked">
      {{ props.label }}
    </a-checkbox>
  </a-flex>
</template>

<style lang="scss" scoped></style>
