<script lang="ts" setup>
import { ref } from "vue";

import { storeToRefs } from "pinia";

import { useFormStore } from "@/entities/form";

import { prepareBlockData, settingsFormRules } from "../model";
import AnswersSection from "./AnswersSection.vue";
import AppearanceSection from "./AppearanceSection.vue";
import EditSection from "./EditSection.vue";
import FormButtons from "./FormButtons.vue";
import SettingsSection from "./SettingsSection.vue";

const { tempBlock } = storeToRefs(useFormStore());
const { saveTempBlock } = useFormStore();

const modalVisible = defineModel<boolean>("modalVisible", { required: true });

const emit = defineEmits<{
  (e: "close"): void;
}>();

const loading = ref<boolean>(false);

const onFinish = (value: any) => {
  console.log("Error:", value);
  if (!tempBlock.value) return;
  loading.value = true;

  try {
    prepareBlockData(tempBlock.value.settings);
    saveTempBlock(tempBlock.value.id);
    closeModal();
  } finally {
    loading.value = false;
  }
};

const onFinishFailed = (value: any) => {
  console.log("Error:", value);
};

const closeModal = () => {
  emit("close");
  modalVisible.value = false;
};
</script>

<template>
  <a-modal
    class="custom-modal-setting"
    v-model:open="modalVisible"
    :footer="null"
    :autoFocusButton="null"
    destroyOnClose
    centered
  >
    <!-- :width="modalWidth" -->
    <a-form
      v-if="tempBlock"
      class="settings-form"
      v-model:model="tempBlock"
      :rules="settingsFormRules"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <EditSection v-model:tempBlock="tempBlock" />

      <AnswersSection v-model:tempBlock="tempBlock" />

      <AppearanceSection v-model:tempBlock="tempBlock" />

      <Transition name="fade-up">
        <SettingsSection v-model:tempBlock="tempBlock" />
      </Transition>

      <FormButtons v-model:loading="loading" @close="closeModal" />
    </a-form>
  </a-modal>
</template>

<style lang="scss" scoped>
.settings-form {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
