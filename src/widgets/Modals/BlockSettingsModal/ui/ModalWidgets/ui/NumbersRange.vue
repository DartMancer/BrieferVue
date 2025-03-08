<script lang="ts" setup>
import { computed, watch } from "vue";
import { NumbersRangeType } from "@/entities/form";
import { NumberInput } from "@/widgets/Modals/ModalFields";

const numbersRange = defineModel<NumbersRangeType>("numbersRange", {
  required: true,
});

const props = defineProps<{
  name: string | string[];
  min?: number;
  rules?: any;
}>();

const minNumber = computed({
  get() {
    return numbersRange.value.minNumber;
  },
  set(value) {
    const newMin = Math.max(value, props.min || 0);

    if (newMin > numbersRange.value.maxNumber) {
      numbersRange.value.maxNumber = newMin;
    }
    numbersRange.value.minNumber = newMin;
  },
});

const maxNumber = computed({
  get() {
    return numbersRange.value.maxNumber;
  },
  set(value) {
    const newMax = Math.max(value, minNumber.value);
    numbersRange.value.maxNumber = newMax;
  },
});

watch(
  () => props.min,
  (newVal) => {
    if (newVal === 0) {
      if (numbersRange.value.minNumber < 0) {
        numbersRange.value.minNumber = 0;
      }
      if (numbersRange.value.maxNumber < 0) {
        numbersRange.value.maxNumber = 0;
      }
    }
  }
);
</script>

<template>
  <a-flex>
    <NumberInput
      v-model:value="minNumber"
      :name="[...name, 'minNumber']"
      :placeholder="$t.components.placeholder.enterNumber"
      :min="min"
      :rules="rules ? rules.minNumber : null"
      addon="от"
    />
    <NumberInput
      v-model:value="maxNumber"
      :name="[...name, 'maxNumber']"
      title=""
      :placeholder="$t.components.placeholder.enterNumber"
      :min="maxNumber"
      :rules="rules ? rules.maxNumber : null"
      addon="до"
    />
  </a-flex>
</template>
