<script lang="ts" setup>
// import { BlockSettings } from "@/entities/form";
// import { inputRequiredRule } from "@/shared/model";
// const props = defineProps<{
//   formBlock: BlockSettings;
//   index: number;
// }>();

// const previewFormState = defineModel<Record<string, any>>("previewFormState");

// const key = Object.keys(previewFormState.value!)[props.index];
// const rules = inputRequiredRule(props.formBlock);
</script>

<template>
  <!-- <a-form-item :name="key" :rules="rules">
    <a-input-number
      class="input"
      v-model:value="previewFormState[key]"
      :placeholder="formBlock.defaultValue"
      string-mode
    />
  </a-form-item> -->
</template>

<style lang="scss" scoped>
.input {
  width: 60%;
  background-color: var(--element-color);
  border: solid 0.15vw var(--accent-color);
}
</style>
