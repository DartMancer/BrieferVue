<script setup lang="ts">
// import { ref, computed, watch } from "vue";
// import type { Dayjs } from "dayjs";
// import dayjs from "dayjs";
// import { useFormStore } from "@/entities/form";

// type RangeValue = [Dayjs, Dayjs];

// const props = defineProps<{
//   modalVisible: boolean;
//   currentIndex: number;
// }>();

// const store = useFormStore();
// const currentBlock = computed(() => store.formBlocks[props.currentIndex]);

// const dateRange = ref<RangeValue>();
// const isDateRange = ref(false);
// const isLimitRange = ref(false);

// watch(
//   () => props.modalVisible,
//   (newVal) => {
//     if (newVal) {
//       // const retrievedDateRange = currentBlock.value.dateModel;

//       if (
//         retrievedDateRange?.dateRange &&
//         retrievedDateRange.dateRange.length === 2
//       ) {
//         const restoredDateRange: [Dayjs, Dayjs] = [
//           dayjs(retrievedDateRange.dateRange[0]),
//           dayjs(retrievedDateRange.dateRange[1]),
//         ];
//         dateRange.value = restoredDateRange;
//       }

//       isDateRange.value = retrievedDateRange?.isDateRange || false;
//       isLimitRange.value = retrievedDateRange?.isLimitRange || false;
//     } else {
//       dateRange.value = undefined;
//     }
//   },
//   { immediate: true }
// );

// function toggleLimitRange() {
//   dateRange.value = undefined;
// }

// function toggleDateRange() {
//   if (store.tempBlock) {
//     store.tempBlock.dateModel = {
//       ...store.tempBlock.dateModel,
//       isDateRange: isDateRange.value,
//       dateRange:
//         isDateRange.value && dateRange.value
//           ? [dateRange.value[0].toISOString(), dateRange.value[1].toISOString()]
//           : undefined,
//       isLimitRange: isDateRange.value ? true : false,
//     };
//   }
// }

// watch(
//   () => dateRange.value,
//   (newVal) => {
//     const block = store.tempBlock;
//     if (block) {
//       block.dateModel = {
//         ...block,
//         isDateRange: isDateRange.value,
//         dateRange: newVal
//           ? [newVal[0].toISOString(), newVal[1].toISOString()]
//           : undefined,
//         isLimitRange: !!newVal,
//       };
//     }
//   }
// );
</script>

<template>
  <!-- <a-flex gap="middle" vertical>
    <a-checkbox v-model:checked="isDateRange" @change="toggleDateRange">
      Диапазон дат
    </a-checkbox>
    <a-checkbox v-model:checked="isLimitRange" @change="toggleLimitRange">
      Ограничить ответ периодом
    </a-checkbox>
    <a-range-picker
      v-model:value="dateRange"
      :format="'DD MMM YYYY'"
      :disabled="!isLimitRange"
    />
  </a-flex> -->
</template>

<style lang="scss" scoped>
.ant-picker-range {
  color: var(--white-color);
  border: solid 0.15vw var(--accent-color);
  background-color: var(--element-color);
  box-shadow: none;
}
</style>
