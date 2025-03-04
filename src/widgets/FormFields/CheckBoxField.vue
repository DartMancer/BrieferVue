<script setup lang="ts">
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
  <!-- <a-form-item :name="key" :rules="rules" v-if="previewFormState">
    <div class="check-box-block">
      <a-checkbox v-model:checked="previewFormState[key]">
        {{ formBlock.generalSettings.title }}
      </a-checkbox>
    </div>
  </a-form-item> -->
</template>

<style lang="scss" scoped>
.check-box-block {
  width: 60%;
  border: solid 0.15vw var(--accent-color);
  border-radius: 0.5vw;
  background-color: var(--element-color);
  padding: 0.4vw;
  padding-left: 1vw;
}
</style>
