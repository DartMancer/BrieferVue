<script lang="ts" setup>
import { FieldBlockBase } from "@/entities/form";
import { ClearTextField, FormDivider } from "@/widgets/Modals/PreviewModal";

const field = defineModel<FieldBlockBase>("field", { required: true });
</script>

<template>
  <FormDivider v-if="field.type === 'DIVIDER'" v-model:field="field" />
  <ClearTextField
    v-else-if="field.type === 'CLEAR_TEXT'"
    v-model:field="field"
  />
</template>
