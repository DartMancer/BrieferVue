<script lang="ts" setup>
import { useFormStore } from "@/entities/form";
import { AnswersSetting, EditableListSetting } from "../../common";
const store = useFormStore();
const props = defineProps<{
  modalVisible: boolean;
  currentIndex: number;
}>();

const getConditions = () => {
  return store.tempBlock?.conditions
    ? store.tempBlock.conditions.map((item) => ({ ...item }))
    : [];
};

const setConditions = (newList: any[]) => {
  const block = store.tempBlock;
  if (block) {
    block.conditions = newList.map((item) => ({ ...item }));
  }
};
</script>

<template>
  <a-flex class="condition-section" vertical>
    <div>
      <EditableListSetting
        v-model:modalVisible="props.modalVisible"
        :currentIndex="props.currentIndex"
        :getList="getConditions"
        :setList="setConditions"
        title="Критерии"
      />
    </div>
    <AnswersSetting
      v-model:modalVisible="props.modalVisible"
      :currentIndex="props.currentIndex"
    />
  </a-flex>
</template>

<style lang="css" scoped>
.condition-section {
  gap: 1.5vw;
}
</style>
