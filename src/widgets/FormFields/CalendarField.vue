<script setup lang="ts">
import { ref } from "vue";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { inputRequiredRule } from "@/shared/model";
import { BlockSettings } from "@/entities/form";

const props = defineProps<{
  formBlock: BlockSettings;
  index: number;
}>();

const previewFormState = defineModel<Record<string, any>>("previewFormState", {
  required: true,
});

const key = Object.keys(previewFormState.value!)[props.index];
const rules = inputRequiredRule(props.formBlock);

const isRange = ref(props.formBlock.dateModel?.isDateRange);
const retrievedDateRange = ref(props.formBlock.dateModel);

const disabledDate = (current: Dayjs) => {
  if (
    retrievedDateRange?.value?.dateRange &&
    retrievedDateRange.value.dateRange.length === 2
  ) {
    const restoredDateRange: [Dayjs, Dayjs] = [
      dayjs(retrievedDateRange.value.dateRange[0]),
      dayjs(retrievedDateRange.value.dateRange[1]),
    ];
    restoredDateRange;
    return current < restoredDateRange[0] || current > restoredDateRange[1];
  }
};
</script>

<template>
  <a-form-item v-if="isRange" :name="key" :rules="rules">
    <a-range-picker
      v-model:value="previewFormState[key]"
      :format="'DD MMM YYYY'"
      :disabled-date="disabledDate"
    />
  </a-form-item>
  <a-form-item v-else class="a" :name="key" :rules="rules">
    <a-date-picker
      v-model:value="previewFormState[key]"
      :format="'DD MMM YYYY'"
      :disabled-date="disabledDate"
    />
  </a-form-item>
</template>
