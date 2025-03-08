<script lang="ts" setup>
import { computed } from "vue";
import dayjs from "dayjs";
import { RangeValueType } from "@/entities/form";

const dateRange = defineModel<RangeValueType | undefined>("dateRange", {
  required: true,
});

defineProps<{ name: string | string[]; isLimitRange: boolean; rules?: any }>();

const value = computed({
  get: () => {
    if (!dateRange.value) return undefined;
    return [
      fromISO(dateRange.value.startDate),
      fromISO(dateRange.value.endDate),
    ];
  },

  set: (newValue) => {
    dateRange.value = newValue
      ? {
          startDate: toISO(newValue[0]),
          endDate: toISO(newValue[1]),
        }
      : undefined;
  },
});

const toISO = (date: dayjs.Dayjs) => date.toISOString();
const fromISO = (date: string) => dayjs(date);
</script>

<template>
  <a-form-item :name="name" :rules="rules">
    <a-range-picker
      class="date-range-field"
      v-model:value="value"
      :format="'DD MMM YYYY'"
      :disabled="!isLimitRange"
    />
  </a-form-item>
</template>
