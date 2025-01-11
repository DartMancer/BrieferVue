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
    <a-radio-group class="flex-container" v-model:value="previewFormState[key]">
      <div v-for="item in formBlock.variables" :key="item.id">
        <a-radio-button class="flex-item" :value="item.value">
          {{ item.value }}
        </a-radio-button>
      </div>
    </a-radio-group>
  </a-form-item>
</template>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1vw;
}

.flex-item {
  height: fit-content;
  font-size: 1vw;
  color: var(--white-color);
  background-color: var(--element-color);
  text-align: center;
  border: solid 0.15vw var(--accent-color);
  border-radius: 0.5vw;
  cursor: pointer;
}

.flex-item:hover {
  border-color: var(--hover-primary-color);
}
</style>
