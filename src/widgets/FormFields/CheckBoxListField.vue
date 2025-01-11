<script setup lang="ts">
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
  <a-form-item :name="key" :rules="rules" v-if="previewFormState">
    <a-checkbox-group
      class="flex-container"
      v-model:value="previewFormState[key]"
    >
      <a-flex
        v-for="item in formBlock.variables"
        :key="item.id"
        class="check-box-group"
        gap="middle"
        vertical
      >
        <a-checkbox class="check-box-block" :value="item.value">
          {{ item.value }}
        </a-checkbox>
      </a-flex>
    </a-checkbox-group>
  </a-form-item>
</template>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1vw;
}

.check-box-group {
  width: 100%;

  .check-box-block {
    width: 60%;
    border: solid 0.15vw var(--accent-color);
    border-radius: 0.5vw;
    background-color: var(--element-color);
    padding: 0.6vw;
    padding-left: 1vw;
  }
}
</style>
