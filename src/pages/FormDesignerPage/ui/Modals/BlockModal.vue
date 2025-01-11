<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import { BlockTitle } from "@/shared/ui";
import { useFormStore } from "@/entities/form";
import { AddButtons, Input, SettingsSection } from "../BlockSettings";
import { getParamsUtils, getSettingsParamsUtils } from "../../model";

const store = useFormStore();

const props = defineProps<{
  modalVisible: boolean;
  currentIndex: number;
}>();

const emit = defineEmits<{
  (e: "update:modalVisible", value: boolean): void;
  (e: "closeModal"): void;
}>();

const currentBlock = computed(
  () => store.formBlocks[props.currentIndex].generalSettings
);

const visible = ref(props.modalVisible);
const loading = ref<boolean>(false);

const titleInput = ref(currentBlock.value?.title || "");
const isChecked = ref(currentBlock.value?.requiredField || false);

const paramComponent = getParamsUtils(currentBlock.value.icon);
const settingsomponent = getSettingsParamsUtils(currentBlock.value.icon);

watch(
  () => props.modalVisible,
  (newVal) => {
    visible.value = newVal;
    if (newVal) {
      store.setTempBlock(store.formBlocks[props.currentIndex]);
      titleInput.value = currentBlock.value?.title || "";
      isChecked.value = currentBlock.value?.requiredField || false;
    } else {
      store.clearTempBlock();
    }
  }
);

watch(visible, (newVal) => emit("update:modalVisible", newVal));

function onSaveButtonClick() {
  const block = store.tempBlock?.generalSettings;
  if (block) {
    block.title = titleInput.value;
    block.requiredField = isChecked.value;
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      store.saveTempBlock(props.currentIndex);
      emit("closeModal");
    }, 300);
  }
}

function onCancelButtonClick() {
  store.clearTempBlock();
  emit("closeModal");
}
</script>

<template>
  <a-modal class="custom-modal-setting" v-model:open="visible" centered>
    <template #title>
      <BlockTitle
        title="Редактирование вопроса"
        :blockIcon="currentBlock.icon"
        :subtitle="currentBlock.subtitle"
      />
    </template>
    <a-flex class="question-edit" vertical justify="flex-start">
      <a-flex vertical>
        <Input
          subtitle="Вопрос"
          hintText="Введите Ваш вопрос"
          v-model:titleInput="titleInput"
        />
        <!-- <p v-if="store.validationErrors.title" class="error-message">
          {{ store.validationErrors.title }}
        </p> -->
      </a-flex>

      <AddButtons
        v-model:modalVisible="props.modalVisible"
        :currentIndex="props.currentIndex"
      />

      <div v-if="paramComponent">
        <component
          :is="paramComponent"
          v-model:modalVisible="props.modalVisible"
          :currentIndex="props.currentIndex"
        />
      </div>

      <SettingsSection
        label="Обязательный вопрос"
        v-model:isChecked="isChecked"
      />
      <div v-if="settingsomponent">
        <component
          :is="settingsomponent"
          v-model:modalVisible="props.modalVisible"
          :currentIndex="props.currentIndex"
        />
      </div>
    </a-flex>
    <template #footer>
      <a-button key="back" @click="onCancelButtonClick">Отмена</a-button>
      <a-button
        key="submit"
        type="primary"
        @click="onSaveButtonClick"
        :loading="loading"
        >Сохранить</a-button
      >
    </template>
  </a-modal>
</template>

<style lang="scss" scoped>
.question-edit {
  gap: 1.5vw;
}
</style>
