<script lang="ts" setup>
import { inputInnRule } from "@/shared/model";
import { BlockSettings } from "@/entities/form";

const props = defineProps<{
  formBlock: BlockSettings;
  index: number;
}>();

const previewFormState = defineModel<Record<string, any>>("previewFormState", {
  required: true,
});

const key = Object.keys(previewFormState.value!)[props.index];
const rules = inputInnRule(props.formBlock);
</script>

<template>
  <a-form-item :name="key" :rules="rules">
    <a-input-number
      v-model:value="previewFormState[key]"
      :placeholder="formBlock.defaultValue"
      :controls="false"
      :max="100000000000000"
      allow-clear
    />
  </a-form-item>
</template>

<style lang="scss" scoped></style>
