<script lang="ts" setup>
import { useFormStore } from "@/entities/form";
import { EditableListSetting } from "..";
const store = useFormStore();
const props = defineProps<{
  modalVisible: boolean;
  currentIndex: number;
}>();

const getVariables = () => {
  return store.tempBlock?.variables
    ? store.tempBlock.variables.map((item) => ({ ...item }))
    : [];
};

const setVariables = (newList: any[]) => {
  const block = store.tempBlock;
  if (block) {
    block.variables = newList.map((item) => ({ ...item }));
  }
};
</script>

<template>
  <div>
    <EditableListSetting
      v-model:modalVisible="props.modalVisible"
      :currentIndex="props.currentIndex"
      :getList="getVariables"
      :setList="setVariables"
      title="Ответы"
    />
  </div>
</template>
