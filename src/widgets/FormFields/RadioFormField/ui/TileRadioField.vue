<script setup lang="ts">
// import { inputRequiredRule } from "@/shared/model";
// import { BlockSettings } from "@/entities/form";

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
    <a-radio-group class="radio-blocks" v-model:value="previewFormState[key]">
      <div v-for="item in formBlock.variables" :key="item.id">
        <a-radio class="radio-block" :value="item.id">{{ item.value }}</a-radio>
      </div>
    </a-radio-group>
  </a-form-item> -->
</template>

<style lang="scss" scoped>
.radio-blocks {
  width: 100%;
}

.radio-block {
  width: 60%;
  border: solid 0.15vw var(--accent-color);
  border-radius: 0.5vw;
  background-color: var(--element-color);
  padding: 0.4vw;
  padding-left: 1vw;
  margin-bottom: 1vw;
}
</style>
