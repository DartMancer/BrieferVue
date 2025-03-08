<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
import { Input } from "@/widgets/Modals/ModalFields";
import AddOptionWrapper from "./AddOptionWrapper.vue";
import { formatOptions } from "@/shared/utils";

const linkValue = defineModel<string | undefined>("linkValue", {
  required: true,
});

defineProps<{
  name: string | string[];
  subtitle: string;
  btnText: string;
  rules?: any;
}>();

const addonOptions = formatOptions(["https://", "http://"]);
const addon = ref<string>("https://");
const optionVisible = ref<boolean>(false);

const filteredValue = computed({
  get: () => {
    if (!linkValue.value) return "";
    return linkValue.value.replace(/^https?:\/\//i, "");
  },
  set: (newValue) => {
    const cleanValue = newValue.replace(/^https?:\/\//i, "");
    linkValue.value = cleanValue ? addon.value.toLowerCase() + cleanValue : "";
  },
});

const toggleOption = (close?: boolean) => {
  if (close) linkValue.value = "";
  optionVisible.value = !optionVisible.value;
};

onMounted(() => (optionVisible.value = !!linkValue.value));
</script>

<template>
  <AddOptionWrapper
    v-model:optionVisible="optionVisible"
    :btnText="btnText"
    :rules="rules"
    @clear="toggleOption"
  >
    <Input
      v-model:value="filteredValue"
      class="option-input"
      :name="name"
      :title="subtitle"
      :placeholder="$t.components.placeholder.enterLink"
      :rules="rules"
    >
      <template #addonBefore>
        <a-select v-model:value="addon" :options="addonOptions" />
      </template>
    </Input>
  </AddOptionWrapper>
</template>

<style lang="scss" scoped>
.option-input {
  width: 100%;
}
</style>
