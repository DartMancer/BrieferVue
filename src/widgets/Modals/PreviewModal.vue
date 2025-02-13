<script setup lang="ts">
import { ref, computed, reactive, watch } from "vue";
import { AppBtn } from "@/shared/ui";
import { useFormStore, usePreviewStore } from "@/entities/form";
import { FormField, EmptyFormField } from "@/widgets";

const store = useFormStore();
const previewStore = usePreviewStore();

const props = defineProps<{
  modalVisible: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modalVisible", value: boolean): void;
}>();

const formBlocks = computed(() => store.formBlocks);
const previewFormState = reactive<Record<string, any>>({});

const visible = ref(props.modalVisible);
const loading = ref<boolean>(false);
const modalKey = ref(0);

const initializeFormState = () => {
  const fields = previewStore.formFields;

  Object.keys(previewFormState).forEach((key) => {
    delete previewFormState[key];
  });

  fields.forEach((field) => {
    previewFormState[field.id] = field.value || "";
  });

  console.log("Заполненный formState:", previewFormState);
};

const handleFinish = async () => {
  try {
    loading.value = true;
    console.log(previewFormState);
  } finally {
    loading.value = false;
  }
};

watch(
  () => props.modalVisible,
  (newVal) => {
    visible.value = newVal;
    if (newVal) {
      modalKey.value += 1;
      initializeFormState();
    }
  },
  { immediate: true }
);

watch(visible, (newVal) => emit("update:modalVisible", newVal));
</script>

<template>
  <a-modal
    class="custom-modal-preview"
    v-model:open="visible"
    centered
    width="65%"
    :key="modalKey"
  >
    <a-flex vertical gap="middle">
      <a-form
        class="main-preview-block"
        name="preview-form"
        v-model:model="previewFormState"
        @finish="handleFinish"
        @finishFailed="handleFinish"
      >
        <EmptyFormField v-if="formBlocks.length <= 0" />
        <a-flex
          v-else
          v-for="(item, index) in formBlocks"
          :key="index"
          vertical
        >
          <FormField
            :formBlock="item"
            :index="index"
            v-model:previewFormState="previewFormState"
          />
        </a-flex>
        <a-flex justify="center">
          <AppBtn class="send-btn" html-type="submit" :loading="loading">
            Отправить
          </AppBtn>
        </a-flex>
      </a-form>
    </a-flex>
    <template #footer></template>
  </a-modal>
</template>

<style lang="scss" scoped>
.main-preview-block {
  margin: 7vw;
  margin-bottom: 0;
}

.send-btn {
  width: 16.8vw;
  height: 3.2vw;
  font-size: 1.2vw;
  color: var(--white-color);
  font-family: "Montserrat Alternates";
  background-color: var(--primary-color);
  box-shadow: 0 0 1vw var(--primary-color);
  transition: 0.1s ease-in-out;

  &:hover {
    background-color: var(--hover-primary-color);
    box-shadow: 0 0 1vw var(--hover-primary-color);
  }

  &:active {
    transform: scale(0.95);
  }
}
</style>
