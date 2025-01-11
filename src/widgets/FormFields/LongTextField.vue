<script lang="ts" setup>
import { inputRequiredRule } from "@/shared/model";
import { BlockSettings } from "@/entities/form";

const props = defineProps<{
  formBlock: BlockSettings;
  index: number;
}>();

const previewFormState = defineModel<Record<string, any>>("previewFormState");

const key = Object.keys(previewFormState.value!)[props.index];
const rules = inputRequiredRule(props.formBlock);
</script>

<template>
  <a-form-item :name="key" :rules="rules">
    <a-textarea
      v-model:value="previewFormState[key]"
      :placeholder="props.formBlock.defaultValue"
      :rows="3"
      allow-clear
    />
  </a-form-item>
</template>
