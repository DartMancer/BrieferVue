<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { Textarea } from "@/widgets/Modals/BlockSettingsModal";
import AddOptionWrapper from "./AddOptionWrapper.vue";

const textValue = defineModel<string | undefined>("textValue", {
  required: true,
});

defineProps<{
  name: string | string[];
  subtitle: string;
  btnText: string;
  rules?: any;
}>();

const optionVisible = ref<boolean>(false);

const toggleOption = (close?: boolean) => {
  if (close) textValue.value = "";
  optionVisible.value = !optionVisible.value;
};

onMounted(() => (optionVisible.value = !!textValue.value));
</script>

<template>
  <AddOptionWrapper
    v-model:optionVisible="optionVisible"
    :btnText="btnText"
    :rules="rules"
    @clear="toggleOption"
  >
    <Textarea
      class="option-input"
      v-model:value="textValue"
      :name="name"
      :placeholder="$t.components.placeholder.enterText"
      :title="subtitle"
      :rules="rules"
      :max="4"
    />
  </AddOptionWrapper>
</template>

<style lang="scss" scoped>
.option-input {
  width: 100%;
}
</style>
