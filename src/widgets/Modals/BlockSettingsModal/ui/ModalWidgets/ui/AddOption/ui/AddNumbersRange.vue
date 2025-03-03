<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { NumbersRangeType } from "@/entities/form";
import { numbersRules } from "@/features/Modals/BlockSettingsModal/model";
import { NumbersRange } from "@/widgets/Modals/BlockSettingsModal";
import AddOptionWrapper from "./AddOptionWrapper.vue";

const numbersRange = defineModel<NumbersRangeType | undefined>("numbersRange", {
  required: true,
});

defineProps<{
  name: string | string[];
  subtitle: string;
  btnText: string;
  min?: number;
}>();

const optionVisible = ref<boolean>(false);
const DEFAULT_RANGE = { minNumber: 0, maxNumber: 0 };

const toggleOption = (close?: boolean) => {
  if (close) numbersRange.value = DEFAULT_RANGE;
  optionVisible.value = !optionVisible.value;
};

onMounted(() => {
  const defaultValue = numbersRange.value || DEFAULT_RANGE;
  optionVisible.value = !!defaultValue.minNumber || !!defaultValue.maxNumber;
});
</script>

<template>
  <AddOptionWrapper
    v-if="numbersRange"
    v-model:optionVisible="optionVisible"
    :btnText="btnText"
    @clear="toggleOption"
  >
    <a-flex :gap="10" vertical>
      <span class="title">{{ $t.components.placeholder.defaultTitle }}</span>
      <NumbersRange
        class="numbers-range"
        v-model:numbersRange="numbersRange"
        :name="name"
        :rules="numbersRules"
        :min="min"
      />
    </a-flex>
  </AddOptionWrapper>
</template>

<style lang="scss" scoped>
.title {
  font-size: 20px;
  color: var(--white-color);
}

.numbers-range {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

:deep(.ant-form-item) {
  margin: 0;
}

@media (max-width: 1024px) {
  .title {
    font-size: 18px;
  }
}

@media (max-width: 540px) {
  .title {
    font-size: 14px;
  }
}
</style>
