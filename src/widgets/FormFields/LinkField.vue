<script lang="ts" setup>
import { inputLinkRule } from "@/shared/model";
import { BlockSettings } from "@/entities/form";

const props = defineProps<{
  formBlock: BlockSettings;
  index: number;
}>();

const previewFormState = defineModel<Record<string, any>>("previewFormState");

const key = Object.keys(previewFormState.value!)[props.index];
const rules = inputLinkRule(props.formBlock);
</script>

<template>
  <a-form-item :name="key" :rules="rules">
    <a-input
      v-model:value="previewFormState[key]"
      :placeholder="formBlock.defaultValue"
      allow-clear
    />
  </a-form-item>
</template>
