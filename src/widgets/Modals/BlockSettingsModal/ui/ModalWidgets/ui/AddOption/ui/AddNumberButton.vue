<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import { NumberInput } from "@/widgets/Modals/BlockSettingsModal";
import AddOptionWrapper from "./AddOptionWrapper.vue";

const defaultValue = defineModel<number | undefined>("defaultValue", {
  required: true,
});

const props = defineProps<{
  name: string | string[];
  subtitle: string;
  btnText: string;
  min?: number;
  isDecimal?: boolean;
}>();

const optionVisible = ref<boolean>(false);

const toggleOption = (close?: boolean) => {
  if (close) defaultValue.value = 0;
  optionVisible.value = !optionVisible.value;
};

watch(
  () => props.min,
  (newVal) => {
    if (newVal === 0 && defaultValue.value && defaultValue.value < 0) {
      defaultValue.value = 0;
    }
  }
);

onMounted(() => {
  optionVisible.value = !!defaultValue.value;
});
</script>

<template>
  <AddOptionWrapper
    v-model:optionVisible="optionVisible"
    :btnText="btnText"
    @clear="toggleOption"
  >
    <NumberInput
      class="option-input"
      v-model:value="defaultValue"
      :name="name"
      :placeholder="$t.components.placeholder.enterNumber"
      :title="subtitle"
      :precision="isDecimal ? 2 : 0"
      :step="isDecimal ? 0.01 : 1"
      :min="min"
    />
  </AddOptionWrapper>
</template>

<style lang="scss" scoped>
.option-input {
  width: 100%;
}

:deep(.ant-form-item) {
  margin: 0;
}
</style>
