<script setup lang="ts">
import { useFormStore } from "@/entities/form/stores/useFormStore";
import { ref, computed } from "vue";
import { BlockSettings } from "@/entities/form";
import { inputRequiredRule } from "@/shared/model";

const props = defineProps<{
  formBlock: BlockSettings;
  index: number;
}>();

const previewFormState = defineModel<Record<string, any>>("previewFormState");

const key = Object.keys(previewFormState.value!)[props.index];
const rules = inputRequiredRule(props.formBlock);

// const formBlocks = computed(() => store.formBlocks);
// const formBlock = ref(formBlocks.value[props.index]);

const selectedItems = ref(new Map<string, string>());

function selectItems(conditionName: string, variableId: string) {
  if (isSelected(conditionName, variableId)) {
    selectedItems.value.delete(conditionName);
  } else {
    selectedItems.value.set(conditionName, variableId);
  }
}

function isSelected(conditionName: string, variableId: string): boolean {
  return selectedItems.value.get(conditionName) === variableId;
}
</script>

<template>
  <a-flex
    v-for="(condition, index) in formBlock.conditions"
    :key="index"
    vertical
    gap="small"
  >
    <a-flex gap="small" vertical>
      <p class="condition-title">{{ condition.label }}</p>
      <div class="flex-container">
        <div
          v-for="(variable, index) in formBlock.variables"
          :key="index"
          class="flex-item"
          :class="{ selected: isSelected(condition.label, variable.id) }"
          @click="selectItems(condition.label, variable.id)"
        >
          {{ variable.value }}
        </div>
      </div>
    </a-flex>
  </a-flex>
</template>

<style lang="scss" scoped>
.condition-title {
  font-size: 1.1vw;
  color: var(--white-color);
}

// .flex-container {
//   display: flex;
//   flex-wrap: wrap;
//   gap: 1vw;
// }

// .flex-item {
//   height: fit-content;
//   font-size: 1vw;
//   color: var(--white-color);
//   background-color: var(--element-color);
//   text-align: center;
//   padding: 0.3vw 1vw;
//   border: solid 0.15vw var(--accent-color);
//   border-radius: 0.5vw;
//   margin-bottom: 1.5vw;
//   cursor: pointer;
// }

// .flex-item:hover {
//   border-color: var(--hover-primary-color);
// }

.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1vw;
  margin-bottom: 1vw;
}

.flex-item {
  color: var(--white-color);
  background-color: var(--element-color);
  padding: 0.45vw 0.95vw;
  font-size: 1vw;
  text-align: center;
  border: solid 0.15vw var(--accent-color);
  border-radius: 0.5vw;
  transition: 0.3s ease-in-out;
  cursor: pointer;
}

.flex-item.selected {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  box-shadow: 0 0 0.5vw var(--primary-color);
}
</style>
